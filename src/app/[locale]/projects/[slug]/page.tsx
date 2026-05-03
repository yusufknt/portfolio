import { FadeIn } from "@/components/FadeIn";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, getSite } from "@/content/getSite";
import { siteEn } from "@/content/site.en";
import { locales, type Locale } from "@/i18n/config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const slugs = siteEn.projects.map((p) => p.slug);
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(locale, slug);
  const site = getSite(locale);
  if (!project) return { title: site.labels.backToHome };

  return {
    title: project.title,
    description: project.showcaseDescription,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.showcaseDescription,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const site = getSite(locale);
  const project = getProject(locale, slug);
  if (!project) notFound();

  const stackLine = project.stack.join(" — ");

  return (
    <>
      <Header />

      <article className="relative mx-auto max-w-3xl px-4 pb-32 pt-16 text-slate-400 sm:px-6 sm:pt-20 lg:px-8">
        <FadeIn>
          <Link
            href={`/${locale}`}
            className="type-eyebrow-wide inline-flex items-center gap-2 text-slate-500 transition-colors hover:text-sky-400"
          >
            ← {site.labels.backToHome}
          </Link>

          <p className="type-stack-line mt-12 text-sky-400/90">{stackLine}</p>
          <h1 className="type-case-title mt-6 text-slate-50">{project.title}</h1>
          <p className="type-body mt-8 text-slate-500">{project.showcaseDescription}</p>

          <dl className="mt-20 space-y-14">
            <div>
              <dt className="type-eyebrow text-slate-500">{site.labels.projectProblem}</dt>
              <dd className="type-body mt-4 text-slate-300">{project.problem}</dd>
            </div>
            <div>
              <dt className="type-eyebrow text-slate-500">{site.labels.projectResearch}</dt>
              <dd className="type-body mt-4 text-slate-300">{project.research}</dd>
            </div>
            <div>
              <dt className="type-eyebrow text-slate-500">{site.labels.projectSolution}</dt>
              <dd className="type-body mt-4 text-slate-300">{project.solution}</dd>
            </div>
            <div>
              <dt className="type-eyebrow text-slate-500">{site.labels.projectArchitecture}</dt>
              <dd className="type-body mt-4 text-slate-300">{project.architecture}</dd>
            </div>
            <div>
              <dt className="type-eyebrow text-slate-500">{site.labels.projectImplementation}</dt>
              <dd className="type-body mt-4 text-slate-300">{project.implementation}</dd>
            </div>
            <div>
              <dt className="type-eyebrow text-slate-500">{site.labels.projectTechStack}</dt>
              <dd className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="type-eyebrow text-slate-500">{site.labels.projectResults}</dt>
              <dd className="type-body mt-4 text-slate-300">{project.impact}</dd>
            </div>
          </dl>

          <div className="mt-16 flex flex-wrap gap-6 text-[15px] font-medium tracking-tight">
            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
              {site.labels.projectGithub}
            </Link>
            {project.live ? (
              <Link href={project.live} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
                {site.labels.projectLiveDemo}
              </Link>
            ) : (
              <span className="text-slate-600">{site.labels.projectLiveNone}</span>
            )}
          </div>
        </FadeIn>
      </article>

      <SiteFooter locale={locale} />
    </>
  );
}
