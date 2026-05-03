import { BrandWordmark } from "@/components/BrandWordmark";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { GitHubSection } from "@/components/GitHubSection";
import { Header } from "@/components/Header";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { ShowcaseFigure } from "@/components/ShowcaseFigure";
import { ShowcaseLift } from "@/components/ShowcaseLift";
import { SiteFooter } from "@/components/SiteFooter";
import { getSite } from "@/content/getSite";
import { locales, type Locale } from "@/i18n/config";
import Link from "next/link";
import { notFound } from "next/navigation";

const shell = "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8";
const section =
  "scroll-mt-[5.25rem] border-t border-white/[0.04] py-14 lg:py-[4.25rem]";
const linkMuted =
  "text-slate-400 underline decoration-white/[0.08] underline-offset-[5px] transition-colors hover:text-slate-100 hover:decoration-white/25";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const site = getSite(locale);

  return (
    <>
      <Header />

      <main className="relative isolate overflow-hidden text-slate-400">
        <HeroBackdrop />

        <section
          className={`relative ${shell} pb-16 pt-[4.75rem] sm:pb-[4.5rem] sm:pt-[5.25rem]`}
          aria-labelledby="hero-heading"
        >
          <FadeIn>
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div>
                <p className="text-slate-50">
                  <BrandWordmark name={site.name} variant="hero" />
                </p>
                <p className="type-eyebrow mt-2.5 text-slate-600">{site.role}</p>
                <h1
                  id="hero-heading"
                  className="type-hero mt-6 max-w-[24ch] text-slate-50 sm:mt-7"
                >
                  {site.heroLines[0]}
                  <br />
                  {site.heroLines[1]}
                </h1>
                <p className="type-body mt-5 max-w-md text-slate-500">
                  {site.heroFocus}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {site.heroCtas.map((cta) => {
                    const cls =
                      "inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[13px] font-medium tracking-tight text-slate-200 transition-colors duration-200 hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-white active:scale-[0.98]";
                    const external = /^https?:\/\//.test(cta.href);
                    return external ? (
                      <a
                        key={cta.label}
                        href={cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cls}
                      >
                        {cta.label}
                      </a>
                    ) : (
                      <Link key={cta.label} href={cta.href} className={cls}>
                        {cta.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[30rem]">
                <div className="relative overflow-hidden rounded-[1.1rem] border border-violet-300/30 bg-[linear-gradient(160deg,#070b18_0%,#0b1226_72%,#0c1830_100%)] p-3 shadow-[0_20px_60px_rgba(8,10,30,0.6)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_85%,color-mix(in_oklab,#8b5cf6_28%,transparent)_0%,transparent_56%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_5%,color-mix(in_oklab,#38bdf8_16%,transparent)_0%,transparent_50%)]" />

                  <div className="relative rounded-[0.75rem] border border-white/10 bg-[#030712] p-3 font-mono text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
                    <p className="text-slate-500">~/src/engineer/profile.ts</p>
                    <p className="mt-1 text-cyan-300">const profile = &#123;</p>
                    <p className="pl-4 text-slate-300">role: "{site.role}",</p>
                    <p className="pl-4 text-violet-300">focus: ["Mobile", "Web", "Automation"],</p>
                    <p className="pl-4 text-emerald-300">mindset: "Clean code + scalable systems"</p>
                    <p className="text-cyan-300">&#125;;</p>

                    <div className="mt-3 grid grid-cols-7 gap-1.5">
                      {Array.from({ length: 28 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-1.5 rounded-full ${
                            idx % 5 === 0
                              ? "bg-violet-300/80"
                              : idx % 3 === 0
                                ? "bg-cyan-300/75"
                                : "bg-slate-600/65"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mx-auto h-3 w-[86%] rounded-b-2xl border-x border-b border-white/[0.12] bg-[linear-gradient(180deg,#111827_0%,#070b16_100%)]" />
                <div className="mx-auto h-2 w-[24%] rounded-b-xl bg-slate-700/70" />
                <div className="pointer-events-none absolute -right-2 -top-3 h-9 w-9 rounded-full border border-cyan-300/35 bg-cyan-300/10 shadow-[0_0_20px_rgba(56,189,248,0.35)]" />
                <div className="pointer-events-none absolute -left-2 bottom-10 h-8 w-8 rounded-full border border-violet-300/35 bg-violet-300/10 shadow-[0_0_20px_rgba(139,92,246,0.35)]" />
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="showcase" className={`relative ${section}`}>
          <div className={shell}>
            <FadeIn>
              <p className="type-eyebrow text-slate-600">
                {site.showcaseEyebrow}
              </p>
              <h2 className="type-section-title mt-2 text-slate-50">
                {site.showcaseTitle}
              </h2>
            </FadeIn>
          </div>

          <FadeIn>
            <div
              className={`${shell} mt-9 grid grid-cols-1 gap-x-7 gap-y-9 pb-14 md:grid-cols-2 md:gap-y-10 lg:pb-[4.25rem]`}
            >
              {site.projects.map((project) => (
                <article
                  key={project.slug}
                  className="flex min-w-0 flex-col gap-3"
                >
                  <ShowcaseLift compact>
                    <ShowcaseFigure
                      compact
                      project={project}
                      placeholderLabel={site.labels.screenshotPlaceholder}
                      visitLiveWebsiteLabel={site.labels.visitLiveWebsite}
                    />
                  </ShowcaseLift>
                  <div className="min-w-0 px-0.5">
                    <h3 className="line-clamp-2 text-[15px] font-medium leading-snug tracking-tight text-slate-100 md:text-[15px]">
                      {project.title}
                    </h3>
                    <p
                      className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-500"
                      title={project.showcaseDescription}
                    >
                      {project.showcaseDescription}
                    </p>
                    <p
                      className="mt-2 truncate font-mono text-[10px] uppercase tracking-[0.12em] text-slate-600"
                      title={project.stack.join(" · ")}
                    >
                      {project.stack.join(" · ")}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[13px] font-medium ${linkMuted}`}
                      >
                        {site.labels.linkGithub}
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-[13px] font-medium ${linkMuted}`}
                        >
                          {site.labels.linkLiveSite}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="about" className={`${section} bg-black/[0.06]`}>
          <div className={shell}>
            <FadeIn>
              <p className="type-eyebrow text-slate-600">
                {site.profile.eyebrow}
              </p>
              <h2 className="type-section-title mt-2 max-w-lg text-slate-50">
                {site.profile.title}
              </h2>
              <p className="type-body mt-4 max-w-xl text-slate-500">
                {site.profile.bio}
              </p>

              <div className="mt-10 grid gap-9 border-t border-white/[0.04] pt-10 lg:grid-cols-2 lg:gap-12">
                <div>
                  <p className="type-eyebrow text-slate-600">
                    {site.education.eyebrow}
                  </p>
                  <h3 className="type-card-title mt-2 text-slate-200">
                    {site.education.title}
                  </h3>
                  <p className="type-body mt-3 text-slate-500">
                    {site.education.school}
                  </p>
                  <p className="type-small mt-2 text-slate-600">
                    {site.education.degreeLine}
                  </p>
                  <p className="type-small mt-1 text-slate-600">
                    {site.education.graduationLine}
                  </p>
                </div>
                <div>
                  <p className="type-eyebrow text-slate-600">
                    {site.languagesEyebrow}
                  </p>
                  <h3 className="type-card-title mt-2 text-slate-200">
                    {site.languagesTitle}
                  </h3>
                  <ul className="type-body mt-4 space-y-2.5 text-slate-500">
                    {site.languages.map((lang) => (
                      <li key={lang.name}>
                        <span className="text-slate-300">{lang.name}</span>
                        <span className="text-slate-700"> — </span>
                        <span>{lang.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <GitHubSection site={site} />
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="contact" className={section}>
          <div className={shell}>
            <FadeIn>
              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:grid-rows-[auto,auto] lg:items-start lg:gap-x-10 lg:gap-y-9 xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] xl:gap-x-12">
                <div className="min-w-0 lg:col-start-1 lg:row-start-1">
                  <p className="type-eyebrow text-slate-600">
                    {site.contactEyebrow}
                  </p>
                  <h2 className="type-section-title mt-2 text-slate-50">
                    {site.contactTitle}
                  </h2>
                  <p className="type-small mt-2 max-w-sm text-slate-500">
                    {site.contactLead}
                  </p>
                </div>

                <div className="shrink-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:sticky lg:top-28 lg:self-start">
                  <ContactForm copy={site.contactForm} />
                </div>

                <ul className="type-small flex flex-col gap-3 text-slate-500 lg:col-start-1 lg:row-start-2 lg:mt-0">
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className={linkMuted}
                    >
                      {site.contact.email}
                    </a>
                  </li>
                  <li>
                    <span className="text-slate-600">
                      {site.labels.contactLocationLabel}:{" "}
                    </span>
                    {site.contact.location}
                  </li>
                  <li>
                    <Link
                      href={site.contact.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkMuted}
                    >
                      {site.labels.contactPortfolio}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={site.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkMuted}
                    >
                      GitHub
                    </Link>
                  </li>
                  {site.contact.linkedin ? (
                    <li>
                      <Link
                        href={site.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkMuted}
                      >
                        LinkedIn
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
