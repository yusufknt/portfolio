import type { SiteContent } from "./types";

export const siteEn = {
  name: "Yusuf Kantarcıoğlu",
  role: "Computer Engineering Student · Mobile & Web",
  seoDescription:
    "User-centered products with Flutter and modern web—Firebase, SEO-minded structure, and performance-focused UI. Based in Nazilli, Türkiye; open to remote collaboration.",

  heroLines: ["Flutter Mobile", "Modern Web Interfaces"],
  heroFocus:
    "I build mobile and web products with Flutter and modern tooling. Interested in data collection and automation.",

  heroCtas: [
    { label: "GitHub", href: "https://github.com/yusufknt" },
    { label: "Work", href: "#showcase" },
    { label: "Portfolio", href: "https://yusufkantarcioglu.com/" },
  ],

  showcaseEyebrow: "Work",
  showcaseTitle: "Projects",

  profile: {
    eyebrow: "About",
    title: "Short intro",
    bio: "Computer Engineering student building products with Flutter and modern web.",
  },

  education: {
    eyebrow: "Education",
    title: "Academic",
    school: "Dumlupınar University — Kütahya, Türkiye",
    degreeLine: "B.Sc. Computer Engineering · GPA: 2.94 / 4.00",
    graduationLine: "Expected graduation: 2026",
  },

  languagesEyebrow: "Languages",
  languagesTitle: "Communication",
  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "B1 — technical reading & basic communication" },
  ],

  github: {
    calendarUsername: "yusufknt",
    eyebrow: "Activity",
    title: "GitHub",
    lead: "Repos and contribution snapshot.",
    cta: "Open GitHub profile",
    calendarCaption: "Contribution calendar",
    calendarFallback: "Calendar unavailable—open profile for full history.",
    calendarDisabled: "Set github.calendarUsername in site config to enable the heatmap.",
    pinnedEyebrow: "Highlighted repos",
    contributionUnit: "contributions",
    pinnedRepos: [
      {
        name: "roam.ai",
        description: "AI-assisted travel planning — Flutter & Firebase.",
        href: "https://github.com/yusufknt/roam.ai",
      },
      {
        name: "redmine-issue-status-lifecycle-plugin",
        description: "Redmine issue lifecycle analytics with Chart.js.",
        href: "https://github.com/yusufknt/redmine-issue-status-lifecycle-plugin",
      },
    ],
  },

  projects: [
    {
      slug: "roam-ai",
      title: "ROAM AI — Smart travel planning",
      showcaseDescription:
        "A Flutter mobile app with AI integration for travel planning—location-aware suggestions and long-horizon itineraries.",
      problem:
        "Travelers need one flow that combines daily discovery with multi-day planning—personalized to context.",
      research:
        "Location-based recommendation categories (food, entertainment, culture); itinerary generation with date and city parameters.",
      solution:
        "AI-assisted long-term trip planning inside the app plus contextual “what’s nearby” surfaces.",
      architecture:
        "Firebase Auth, Firestore, and Storage; realtime sync patterns; external REST APIs.",
      implementation:
        "Modern minimal Flutter UI; personalized routes by date/city and card-based recommendations.",
      stack: ["Dart", "Flutter", "Firebase", "REST APIs", "AI integration"],
      impact:
        "Single codebase mobile experience; scalable data plane on Firebase with secure identity flows.",
      github: "https://github.com/yusufknt/roam.ai",
      live: null,
      imageSrc: "/showcase/roam.png",
    },
    {
      slug: "personal-site",
      title: "Personal website",
      showcaseDescription:
        "Portfolio-first storytelling for freelance outreach—fast loads and SEO-friendly page structure.",
      problem:
        "Present services and projects clearly in one place—with strong first impressions on mobile and search.",
      research:
        "Content blocks and CTAs; critical paths for technical SEO and performance budgets.",
      solution:
        "Project-led information architecture; straightforward navigation and direct contact paths.",
      architecture:
        "SSR or static-generation-friendly layout with reusable sections.",
      implementation:
        "Responsive layout; semantic HTML/meta for SEO; minimal typography-driven branding.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      impact:
        "One canonical place for portfolio and contact—easier collaborations.",
      github: "https://github.com/yusufknt",
      live: "https://yusufkantarcioglu.com/",
      imageSrc: "/showcase/kisisel.png",
    },
    {
      slug: "durumx",
      title: "Durumx website",
      showcaseDescription:
        "Business-focused web presence with manageable areas for menu, campaigns, and contact.",
      problem:
        "A growing brand needs a clear digital footprint and flexible surfaces for campaigns.",
      research:
        "Audience priorities and conversion paths; mobile-heavy usage patterns.",
      solution:
        "Manageable content regions with brand-led UI and strong contact CTAs.",
      architecture:
        "Section-based templates with performance-conscious assets.",
      implementation:
        "Responsive design; SEO-oriented headings/structure; tuned initial load.",
      stack: ["React", "JavaScript", "Responsive web"],
      impact:
        "Faster comprehension for visitors and flexible campaign zones.",
      github: "https://github.com/yusufknt/durumx",
      live: "https://durumx.com",
      imageSrc: "/showcase/durumx1.webp",
    },
    {
      slug: "simit-teknesi-nazilli",
      title: "Simit Teknesi Nazilli website",
      showcaseDescription:
        "A trustworthy local-business showcase—brand-aligned, responsive, and easy to scan.",
      problem:
        "Limited online visibility and slow access to essentials like hours and contact.",
      research:
        "Brand tone and local SEO signals; emphasizing location and contact.",
      solution:
        "Simple navigation with services overview and contact-forward layout.",
      architecture:
        "Lightweight frontend; CDN/static-friendly delivery.",
      implementation:
        "Mobile-first layout with consistent typography and color.",
      stack: ["Web", "Responsive UI"],
      impact:
        "Stronger digital presence and a more professional first impression.",
      github: "https://github.com/yusufknt/simitteknesi",
      live: "https://simitteknesinazilli.com",
      imageSrc: "/showcase/simit-teknesi-nazilli.webp",
    },
    {
      slug: "gym-progress",
      title: "Gym Progress — fitness tracking",
      showcaseDescription:
        "Weekly and long-horizon performance views—friendly UI and clearer progress visualization.",
      problem:
        "Workout data scattered across notes/apps—hard to see trends over time.",
      research:
        "Low-friction logging flows and chart/summary needs.",
      solution:
        "Screens that visualize strength progression with structured storage and user management.",
      architecture:
        "Persistent user data with local/cloud sync patterns where applicable.",
      implementation:
        "Clean UI with weekly summaries and trend-friendly layouts.",
      stack: ["Dart", "Flutter", "Mobile"],
      impact:
        "A clearer sense of progress—supporting consistency.",
      github: "https://github.com/yusufknt/gym",
      live: null,
      imageSrc: "/showcase/gymprogress.png",
    },
    {
      slug: "redmine-issue-lifecycle",
      title: "Issue Status Lifecycle — Redmine plugin",
      showcaseDescription:
        "Analyze issue status transitions over time—user/category breakdowns with Chart.js dashboards.",
      problem:
        "Hard to see how long issues spend in each state inside Redmine—reporting is painful.",
      research:
        "Redmine Plugin API and issue workflows; data modeling for durations.",
      solution:
        "A lifecycle layer that tracks transitions and computes timing analytics.",
      architecture:
        "Rails plugin structure; PostgreSQL relational storage; Chart.js visualization.",
      implementation:
        "Per-user and per-category timing analyses with readable charts.",
      stack: ["Ruby on Rails", "PostgreSQL", "Redmine Plugin API", "Chart.js"],
      impact:
        "More visible throughput bottlenecks—decisions grounded in data.",
      github: "https://github.com/yusufknt/redmine-issue-status-lifecycle-plugin",
      live: null,
      imageSrc: null,
    },
  ],

  contactEyebrow: "Contact",
  contactTitle: "Let’s talk",
  contactLead: "Use the form below or reach me directly.",

  contactForm: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submit: "Send",
    sending: "Sending…",
    success: "Message sent. I’ll get back to you soon.",
    error: "Could not send. Please try again later.",
    configureHint:
      "Form not configured yet. Add `WEB3FORMS_ACCESS_KEY` to `.env.local` (see web3forms.com).",
  },

  contact: {
    email: "yusuf.kantarcioglu@gmail.com",
    github: "https://github.com/yusufknt",
    linkedin: null,
    portfolio: "https://yusufkantarcioglu.com/",
    location: "Nazilli, Aydın, Türkiye",
  },

  labels: {
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    langSwitchAria: "Switch language",
    commandPaletteLabel: "Command menu",
    commandPalettePlaceholder: "Jump to section…",
    commandPaletteEmpty: "No matches.",
    commandPaletteHint: "⌘K",
    linkGithub: "Source",
    linkLiveSite: "Live site",
    projectProblem: "Problem",
    projectResearch: "Research",
    projectSolution: "Solution",
    projectArchitecture: "Architecture",
    projectImplementation: "Implementation",
    projectTechStack: "Tech stack",
    projectResults: "Results",
    projectGithub: "GitHub",
    projectLiveDemo: "Live site",
    projectLiveNone: "No public web demo — see GitHub for source.",
    screenshotPlaceholder: "Project visual",
    footerBuiltWith: "Next.js · Tailwind CSS · Framer Motion",
    backToHome: "Home",
    contactPortfolio: "Portfolio site",
    contactLocationLabel: "Location",
    visitLiveWebsite: "Open live website in a new tab",
  },
} satisfies SiteContent;
