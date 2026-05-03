"use client";

import { BrandWordmark } from "@/components/BrandWordmark";
import { CommandPalette } from "@/components/CommandPalette";
import { getSite } from "@/content/getSite";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";

const navLinkClass =
  "relative py-1 text-[13px] font-medium tracking-tight text-slate-500 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/35 after:transition-transform after:duration-300 after:ease-out hover:text-slate-100 hover:after:scale-x-100";

export function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const site = getSite(locale);

  const onCaseStudy = pathname.includes("/projects/");
  const homePrefix = onCaseStudy ? `/${locale}` : "";

  const nav = [
    { href: `${homePrefix}#showcase`, label: site.labels.navWork },
    { href: `${homePrefix}#about`, label: site.labels.navAbout },
    { href: `${homePrefix}#contact`, label: site.labels.navContact },
  ];

  const rest = pathname.replace(/^\/(en|tr)/, "") || "";
  const suffix = rest === "" ? "" : rest;
  const enHref = `/en${suffix}`;
  const trHref = `/tr${suffix}`;

  return (
    <>
      <CommandPalette />
      <header className="sticky top-0 z-50 border-b border-white/[0.04] bg-[color-mix(in_oklab,#0f172a_88%,transparent)] backdrop-blur-xl supports-[backdrop-filter]:bg-[color-mix(in_oklab,#0f172a_76%,transparent)]">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-3 px-4 sm:h-[3.1rem] sm:gap-5 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}`}
            aria-label={`${site.name} — ${locale === "tr" ? "Ana sayfa" : "Home"}`}
            className="shrink-0 transition-opacity duration-300 ease-out hover:opacity-70"
          >
            <BrandWordmark name={site.name} variant="nav" />
          </Link>
          <nav
            className="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-8"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600 lg:inline">
              {site.labels.commandPaletteHint}
            </span>
            <div
              className="flex items-center gap-2 border-l border-white/10 pl-3 sm:pl-4"
              role="navigation"
              aria-label={site.labels.langSwitchAria}
            >
              <Link
                href={enHref}
                className={`font-mono text-[11px] uppercase tracking-[0.14em] ${locale === "en" ? "text-slate-100" : "text-slate-500 hover:text-slate-300"}`}
                hrefLang="en"
              >
                EN
              </Link>
              <span className="text-slate-600" aria-hidden>
                /
              </span>
              <Link
                href={trHref}
                className={`font-mono text-[11px] uppercase tracking-[0.14em] ${locale === "tr" ? "text-slate-100" : "text-slate-500 hover:text-slate-300"}`}
                hrefLang="tr"
              >
                TR
              </Link>
            </div>
          </div>
        </div>
        <nav className="flex justify-center gap-4 overflow-x-auto border-t border-white/[0.03] px-4 py-1.5 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Primary mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={`${navLinkClass} shrink-0 text-[13px]`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
