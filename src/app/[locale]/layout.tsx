import { LocaleProvider } from "@/components/LocaleProvider";
import { getSite } from "@/content/getSite";
import { locales, type Locale } from "@/i18n/config";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSite(locale);

  return {
    title: {
      default: `${site.name} — ${site.role}`,
      template: `%s — ${site.name}`,
    },
    description: site.seoDescription,
    openGraph: {
      title: `${site.name} — ${site.role}`,
      description: site.seoDescription,
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
