import { siteEn } from "./site.en";
import { siteTr } from "./site.tr";
import type { ProjectItem, SiteContent } from "./types";

export function getSite(locale: string): SiteContent {
  return locale === "tr" ? siteTr : siteEn;
}

export function getProject(locale: string, slug: string): ProjectItem | undefined {
  return getSite(locale).projects.find((p) => p.slug === slug);
}
