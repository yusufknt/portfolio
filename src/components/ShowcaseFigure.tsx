import type { ProjectItem } from "@/content/types";
import Image from "next/image";

type ShowcaseFigureProps = {
  project: ProjectItem;
  placeholderLabel: string;
  visitLiveWebsiteLabel: string;
  /** İki sütunlu grid kartları — daha kısa görsel */
  compact?: boolean;
};

export function ShowcaseFigure({
  project,
  placeholderLabel,
  visitLiveWebsiteLabel,
  compact = false,
}: ShowcaseFigureProps) {
  const shell = compact
    ? "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition-opacity duration-300 group-hover:opacity-[0.94]"
    : "relative aspect-[21/9] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-opacity duration-300 group-hover:opacity-[0.93]";

  const figure = (
    <div className={shell}>
      <div className="absolute inset-0">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.live ? "" : project.title}
            fill
            className="object-cover object-top"
            sizes={compact ? "(min-width: 768px) 42vw, 100vw" : "(min-width: 1024px) 72rem, 100vw"}
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,transparent_52%,color-mix(in_oklab,#a78bfa_12%,transparent)_100%)]">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">
              {placeholderLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (!project.live) {
    return figure;
  }

  const linkRing = compact
    ? "group block rounded-xl outline-none ring-offset-2 ring-offset-[#0f172a] focus-visible:ring-2 focus-visible:ring-white/25"
    : "group block rounded-[1.75rem] outline-none ring-offset-4 ring-offset-[#0b1224] focus-visible:ring-2 focus-visible:ring-white/25";

  return (
    <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkRing} aria-label={`${visitLiveWebsiteLabel}: ${project.title}`}>
      {figure}
    </a>
  );
}
