import { ContributionHeatmap } from "@/components/ContributionHeatmap";
import type { SiteContent } from "@/content/types";
import { fetchContributions } from "@/lib/githubContributions";
import Link from "next/link";

type GitHubSectionProps = {
  site: SiteContent;
};

export async function GitHubSection({ site }: GitHubSectionProps) {
  const username = site.github.calendarUsername?.trim() || null;
  const raw = username ? await fetchContributions(username) : null;
  const contributions = raw?.length ? raw : null;

  const total = contributions?.reduce((acc, d) => acc + d.count, 0) ?? null;

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm sm:p-7">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="type-eyebrow text-slate-500">{site.github.eyebrow}</p>
          <h3 className="type-github-panel-title mt-3 text-slate-50">{site.github.title}</h3>
          <p className="type-body mt-3 max-w-xl text-slate-500">{site.github.lead}</p>
        </div>
        <Link
          href={site.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] font-medium tracking-tight text-slate-200 transition-colors hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white sm:mt-0"
        >
          {site.github.cta}
        </Link>
      </div>

      {contributions?.length ? (
        <div className="mt-10">
          <div className="type-small mb-4 flex items-center justify-between text-slate-500">
            <span>{site.github.calendarCaption}</span>
            {total !== null ? (
              <span className="type-eyebrow tracking-widest text-slate-400">
                {total} {site.github.contributionUnit}
              </span>
            ) : null}
          </div>
          <ContributionHeatmap contributions={contributions} />
        </div>
      ) : username ? (
        <p className="type-small mt-8 text-slate-500">{site.github.calendarFallback}</p>
      ) : (
        <p className="type-small mt-8 text-slate-500">{site.github.calendarDisabled}</p>
      )}

      {site.github.pinnedRepos.length ? (
        <div className="mt-12 border-t border-white/[0.06] pt-10">
          <p className="type-eyebrow text-slate-500">{site.github.pinnedEyebrow}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {site.github.pinnedRepos.map((repo) => (
              <li key={repo.name}>
                <Link
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-white/[0.06] bg-black/20 p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-sky-400/25 hover:shadow-[0_18px_55px_-38px_rgba(56,189,248,0.55)]"
                >
                  <p className="text-base font-medium tracking-tight text-slate-100 group-hover:text-white">{repo.name}</p>
                  <p className="type-small mt-2 text-slate-500">{repo.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
