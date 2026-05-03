import { NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  let json: Body;
  try {
    json = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, code: "invalid_json" }, { status: 400 });
  }

  const name = String(json.name ?? "").trim().slice(0, 120);
  const email = String(json.email ?? "").trim().slice(0, 320);
  const message = String(json.message ?? "").trim().slice(0, 8000);

  if (name.length < 1) {
    return NextResponse.json({ ok: false, code: "validation", field: "name" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, code: "validation", field: "email" }, { status: 400 });
  }
  if (message.length < 3) {
    return NextResponse.json({ ok: false, code: "validation", field: "message" }, { status: 400 });
  }

  const formData = new FormData();
  formData.set("access_key", accessKey);
  formData.set("name", name);
  formData.set("email", email);
  formData.set("message", message);
  formData.set("subject", `[Portfolio] ${name}`);
  formData.set("from_name", name);
  formData.set("replyto", email);

  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const userAgent = req.headers.get("user-agent");

  const upstream = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      ...(origin ? { Origin: origin } : {}),
      ...(referer ? { Referer: referer } : {}),
      ...(userAgent ? { "User-Agent": userAgent } : {}),
    },
    body: formData,
  });

  const raw = await upstream.text();
  let payload: { success?: boolean; message?: string } = {};
  try {
    payload = JSON.parse(raw) as { success?: boolean; message?: string };
  } catch {
    return NextResponse.json(
      { ok: false, code: "upstream_parse", detail: raw.slice(0, 240) },
      { status: upstream.ok ? 502 : upstream.status },
    );
  }

  if (!upstream.ok || payload.success === false) {
    return NextResponse.json(
      { ok: false, code: "upstream", detail: payload.message },
      { status: upstream.ok ? 502 : upstream.status },
    );
  }

  return NextResponse.json({ ok: true });
}
