"use client";

import type { ContactFormCopy } from "@/content/types";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

export function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    try {
      const body = new FormData();
      body.set("access_key", WEB3FORMS_ACCESS_KEY);
      body.set("name", name);
      body.set("email", email);
      body.set("message", message);
      body.set("subject", `[Portfolio] ${name}`);
      body.set("from_name", name);
      body.set("replyto", email);

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        mode: "no-cors",
        body,
      });

      // In no-cors mode browser does not expose response details.
      // If request does not throw, treat delivery as successful.
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 text-[14px] text-slate-100 outline-none transition-[border-color,box-shadow] placeholder:text-slate-600 focus:border-white/15 focus:ring-1 focus:ring-white/10";

  const msg =
    status === "success"
      ? copy.success
      : status === "error"
        ? copy.error
        : null;

  const msgClass =
    status === "success"
      ? "text-emerald-400/95"
      : status === "error"
        ? "text-amber-400/95"
        : "";

  return (
    <div className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-5 sm:p-6">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-[13px] font-medium tracking-tight text-slate-400">
            {copy.nameLabel}
          </label>
          <input id="contact-name" name="name" type="text" required minLength={1} autoComplete="name" maxLength={120} className={field} />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-[13px] font-medium tracking-tight text-slate-400">
            {copy.emailLabel}
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={320} className={field} />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block text-[13px] font-medium tracking-tight text-slate-400">
            {copy.messageLabel}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={3}
            rows={5}
            maxLength={8000}
            className={`${field} resize-y min-h-[8rem]`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.05] px-4 py-2.5 text-[13px] font-medium tracking-tight text-slate-100 transition-[border-color,opacity] hover:border-white/[0.16] hover:bg-white/[0.07] hover:text-white disabled:cursor-not-allowed disabled:opacity-55"
        >
          {status === "sending" ? copy.sending : copy.submit}
        </button>
      </form>
      {msg ? <p className={`type-small mt-5 ${msgClass}`}>{msg}</p> : null}
    </div>
  );
}
