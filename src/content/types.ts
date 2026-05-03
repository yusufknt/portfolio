export type SiteLabels = {
  navWork: string;
  navAbout: string;
  navContact: string;
  langSwitchAria: string;
  commandPaletteLabel: string;
  commandPalettePlaceholder: string;
  commandPaletteEmpty: string;
  commandPaletteHint: string;
  linkGithub: string;
  linkLiveSite: string;
  projectProblem: string;
  projectResearch: string;
  projectSolution: string;
  projectArchitecture: string;
  projectImplementation: string;
  projectTechStack: string;
  projectResults: string;
  projectGithub: string;
  projectLiveDemo: string;
  /** Gösterilir when project.live is null (ör. yalnızca mobil/repo). */
  projectLiveNone: string;
  screenshotPlaceholder: string;
  contactPortfolio: string;
  contactLocationLabel: string;
  /** Showcase görseli `live` adresine gidiyorsa anchor aria-label */
  visitLiveWebsite: string;
  footerBuiltWith: string;
  backToHome: string;
};

export type PinnedRepo = {
  name: string;
  description: string;
  href: string;
};

export type SiteGithub = {
  calendarUsername: string | null;
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
  calendarCaption: string;
  calendarFallback: string;
  calendarDisabled: string;
  pinnedEyebrow: string;
  contributionUnit: string;
  pinnedRepos: PinnedRepo[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  showcaseDescription: string;
  problem: string;
  research: string;
  solution: string;
  architecture: string;
  implementation: string;
  stack: string[];
  impact: string;
  github: string;
  live: string | null;
  imageSrc: string | null;
};

export type HeroCta = { label: string; href: string };

export type ProfileBlock = {
  eyebrow: string;
  title: string;
  bio: string;
};

export type EducationBlock = {
  eyebrow: string;
  title: string;
  school: string;
  degreeLine: string;
  graduationLine: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type ContactFormCopy = {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  configureHint: string;
};

export type SiteContent = {
  name: string;
  role: string;
  seoDescription: string;
  heroLines: [string, string];
  heroFocus: string;
  heroCtas: HeroCta[];
  showcaseEyebrow: string;
  showcaseTitle: string;
  profile: ProfileBlock;
  education: EducationBlock;
  languagesEyebrow: string;
  languagesTitle: string;
  languages: LanguageItem[];
  github: SiteGithub;
  projects: ProjectItem[];
  contactEyebrow: string;
  contactTitle: string;
  contactLead: string;
  contactForm: ContactFormCopy;
  contact: {
    email: string;
    github: string;
    linkedin: string | null;
    portfolio: string;
    location: string;
  };
  labels: SiteLabels;
};
