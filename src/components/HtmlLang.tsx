"use client";

import { locales } from "@/i18n/config";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean)[0];
    if (locales.includes(segment as (typeof locales)[number])) {
      document.documentElement.lang = segment === "tr" ? "tr" : "en";
    }
  }, [pathname]);

  return null;
}
