import { BrandWordmark } from "@/components/BrandWordmark";
import { getSite } from "@/content/getSite";

export function SiteFooter({ locale }: { locale: string }) {
  const site = getSite(locale);

  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-slate-500">
          <span className="type-eyebrow tracking-widest">© {new Date().getFullYear()}</span>
          <BrandWordmark name={site.name} variant="footer" className="text-[13px] text-slate-400" />
        </p>
        <p className="type-small text-slate-500">{site.labels.footerBuiltWith}</p>
      </div>
    </footer>
  );
}
