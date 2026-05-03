import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;
  const prefersTurkish = header.split(",").some((part) => {
    const code = part.trim().split(";")[0]?.toLowerCase();
    return code?.startsWith("tr");
  });
  return prefersTurkish ? "tr" : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return NextResponse.next();

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
