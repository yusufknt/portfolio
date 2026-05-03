import type { SiteContent } from "./types";

export const siteTr = {
  name: "Yusuf Kantarcıoğlu",
  role: "Bilgisayar Mühendisliği Öğrencisi · Mobil ve Web",
  seoDescription:
    "Flutter ve modern web ile kullanıcı odaklı ürünler; Firebase, SEO ve performans odaklı arayüzler. Nazilli / uzaktan iş birlikleri.",

  heroLines: ["Flutter Mobile", "Modern Web Interfaces"],
  heroFocus:
    "Flutter ve modern web ile mobil ve web ürünleri geliştiriyorum. Veri toplama ve otomasyona ilgi duyuyorum.",

  heroCtas: [
    { label: "GitHub", href: "https://github.com/yusufknt" },
    { label: "İşler", href: "#showcase" },
    { label: "Portföy", href: "https://yusufkantarcioglu.com/" },
  ],

  showcaseEyebrow: "İşler",
  showcaseTitle: "Projeler",

  profile: {
    eyebrow: "Hakkında",
    title: "Kısaca",
    bio: "Bilgisayar Mühendisliği öğrencisiyim; Flutter ve modern web ile ürün geliştiriyorum.",
  },

  education: {
    eyebrow: "Eğitim",
    title: "Akademik",
    school: "Dumlupınar Üniversitesi — Kütahya, Türkiye",
    degreeLine: "Bilgisayar Mühendisliği Lisans Programı · AGNO: 2.94 / 4.00",
    graduationLine: "Beklenen mezuniyet: 2026",
  },

  languagesEyebrow: "Diller",
  languagesTitle: "İletişim dilleri",
  languages: [
    { name: "Türkçe", level: "Ana dil" },
    { name: "İngilizce", level: "B1 — teknik okuma ve temel iletişim" },
  ],

  github: {
    calendarUsername: "yusufknt",
    eyebrow: "Aktivite",
    title: "GitHub",
    lead: "Repolar ve katkı özeti.",
    cta: "GitHub profilini aç",
    calendarCaption: "Katkı takvimi",
    calendarFallback: "Takvim yüklenemedi—tam geçmiş için profile gidin.",
    calendarDisabled: "Heatmap için kullanıcı adını site yapılandırmasında ayarlayın.",
    pinnedEyebrow: "Öne çıkan repolar",
    contributionUnit: "katkı",
    pinnedRepos: [
      {
        name: "roam.ai",
        description: "Yapay zeka destekli seyahat planlama — Flutter, Firebase.",
        href: "https://github.com/yusufknt/roam.ai",
      },
      {
        name: "redmine-issue-status-lifecycle-plugin",
        description: "Redmine için issue yaşam döngüsü analizi ve Chart.js görselleştirmesi.",
        href: "https://github.com/yusufknt/redmine-issue-status-lifecycle-plugin",
      },
    ],
  },

  projects: [
    {
      slug: "roam-ai",
      title: "ROAM AI — Akıllı seyahat planlama",
      showcaseDescription:
        "Flutter ve yapay zeka entegrasyonuyla geliştirilen mobil seyahat planlama uygulaması; konuma göre anlık öneriler ve uzun vadeli gezi planı.",
      problem:
        "Gezginlerin günlük öneriler ile çok günlük rotayı tek akışta birleştiren, kişiselleştirilmiş bir araç eksikliği.",
      research:
        "Konum bazlı öneri türleri (yemek, eğlence, kültürel aktiviteler); tarih ve şehir parametreleriyle plan üretimi senaryoları.",
      solution:
        "Mobil uygulama içinde yapay zeka destekli uzun vadeli plan oluşturma ve kullanıcı bağlamına göre anlık öneri yüzeyleri.",
      architecture:
        "Firebase Auth, Firestore ve Storage; gerçek zamanlı veri senkronu; harici REST API entegrasyonları.",
      implementation:
        "Flutter ile modern ve minimal arayüz; tarih/şehir bazlı kişiselleştirilmiş rota üretimi ve öneri kartları.",
      stack: ["Dart", "Flutter", "Firebase", "REST APIs", "AI integration"],
      impact:
        "Tek codebase ile mobil deneyim; Firebase ile ölçeklenebilir veri katmanı ve güvenli kimlik akışı.",
      github: "https://github.com/yusufknt/roam.ai",
      live: null,
      imageSrc: "/showcase/roam.png",
    },
    {
      slug: "personal-site",
      title: "Kişisel web sitesi",
      showcaseDescription:
        "Freelance müşteri kazanımına yönelik stratejik içerik ve proje odaklı yapı; hızlı yükleme ve SEO dostu sayfa düzeni.",
      problem:
        "Ürün ve hizmetlerin tek yerde anlaşılır şekilde sunulması; arama motorları ve mobil cihazlarda güçlü ilk izlenim.",
      research:
        "İçerik blokları ve çağrı aksiyonları; teknik SEO ve performans bütçesi için kritik yollar.",
      solution:
        "Proje ve hizmet odaklı bilgi mimarisi; sade gezinme ve doğrudan iletişim kanalları.",
      architecture:
        "Sunucu tarafı render veya statik üretim uyumlu yapı; bileşen tabanlı sayfa düzenleri.",
      implementation:
        "Responsive düzen; meta ve semantik HTML ile SEO uyumu; görsel ve tipografi ile minimal marka sunumu.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      impact:
        "Tek kanaldan portföy ve iletişim—iş birlikleri için net bir vitrin.",
      github: "https://github.com/yusufknt",
      live: "https://yusufkantarcioglu.com/",
      imageSrc: "/showcase/kisisel.png",
    },
    {
      slug: "durumx",
      title: "Durumx web sitesi",
      showcaseDescription:
        "İşletme odaklı web görünürlüğü; menü, kampanya ve iletişim alanlarının güncellenebilir yapıda sunumu.",
      problem:
        "İşletmenin dijital yüzünün net olmaması ve kampanya içeriklerinin esnek şekilde yönetilememesi.",
      research:
        "Hedef kitle ve dönüşüm noktaları; mobil kullanım oranına göre öncelikli bileşenler.",
      solution:
        "Yönetilebilir içerik bölgeleri ve güçlü iletişim çağrıları ile marka odaklı UI.",
      architecture:
        "Bölümlere ayrılmış şablon yapısı; performans için optimize edilmiş varlıklar.",
      implementation:
        "Responsive tasarım; SEO uyumlu başlık ve yapı; hızlı ilk yükleme için optimizasyon.",
      stack: ["React", "JavaScript", "Responsive web"],
      impact:
        "Ziyaretçilerin işletmeyi ve teklifleri hızlıca anlaması; güncellenebilir kampanya alanları.",
      github: "https://github.com/yusufknt/durumx",
      live: "https://durumx.com",
      imageSrc: "/showcase/durumx1.webp",
    },
    {
      slug: "simit-teknesi-nazilli",
      title: "Simit Teknesi Nazilli web sitesi",
      showcaseDescription:
        "Yerel işletme için kurumsal kimliğe uygun, güven veren ve mobil uyumlu vitrin sitesi.",
      problem:
        "Mahalli işletmenin çevrimiçi görünürlüğünün zayıf olması ve müşterilerin temel bilgilere hızlı ulaşamaması.",
      research:
        "Marka tonu ve yerel SEO anahtarları; iletişim ve konum bilgisinin öne çıkarılması.",
      solution:
        "Sade navigasyon; ürün/hizmet özeti ve iletişim odaklı tek sayfa veya çok bölümlü yapı.",
      architecture:
        "Hafif ön yükleme; statik veya CDN dostu dağıtım.",
      implementation:
        "Mobil öncelikli düzen; tutarlı tipografi ve renk kullanımı.",
      stack: ["Web", "Responsive UI"],
      impact:
        "Dijital görünürlük artışı ve müşteri güveni için profesyonel ilk izlenim.",
      github: "https://github.com/yusufknt/simitteknesi",
      live: "https://simitteknesinazilli.com",
      imageSrc: "/showcase/simit-teknesi-nazilli.webp",
    },
    {
      slug: "gym-progress",
      title: "Gym Progress — fitness takip",
      showcaseDescription:
        "Haftalık ve uzun vadeli performans analizi; kullanıcı dostu arayüz ve gelişimin görselleştirilmesi.",
      problem:
        "Antrenman verilerinin dağınık takibi ve ilerlemenin zaman içinde görünür kılınması ihtiyacı.",
      research:
        "Kullanıcı akışları ve minimum sürtünmeli veri girişi; grafik ve özet ihtiyaçları.",
      solution:
        "Fitness gelişimini görselleştiren ekranlar; veri saklama ve kullanıcı yönetimi.",
      architecture:
        "Yerel veya bulut senkron ile kalıcı kullanıcı verisi.",
      implementation:
        "Sade arayüz; trend ve haftalık özet görünümleri.",
      stack: ["Dart", "Flutter", "Mobile"],
      impact:
        "Kullanıcıların motivasyonunu destekleyen net ilerleme görünümü.",
      github: "https://github.com/yusufknt/gym",
      live: null,
      imageSrc: "/showcase/gymprogress.png",
    },
    {
      slug: "redmine-issue-lifecycle",
      title: "Issue Status Lifecycle — Redmine eklentisi",
      showcaseDescription:
        "Issue durum geçiş sürelerini hesaplayan yaşam döngüsü analizi; kullanıcı ve kategori bazlı raporlar ve Chart.js grafikleri.",
      problem:
        "Redmine içinde issue’ların durum geçişlerinin süre olarak görünür olmaması ve raporlama zorluğu.",
      research:
        "Redmine Plugin API ve issue durum makinesi; süre ölçümü için veri modeli.",
      solution:
        "Durum değişimlerini kaydeden lifecycle katmanı ve süre analizi.",
      architecture:
        "Ruby on Rails plugin yapısı; PostgreSQL ile ilişkisel veri; Chart.js ile grafik katmanı.",
      implementation:
        "Kullanıcı ve kategori bazlı süre analizleri; görsel rapor sayfaları.",
      stack: ["Ruby on Rails", "PostgreSQL", "Redmine Plugin API", "Chart.js"],
      impact:
        "Ekip için görünür SLA ve darboğaz tespiti—kararları veriye dayandırma.",
      github: "https://github.com/yusufknt/redmine-issue-status-lifecycle-plugin",
      live: null,
      imageSrc: null,
    },
  ],

  contactEyebrow: "İletişim",
  contactTitle: "Konuşalım",
  contactLead: "Formu doldurun veya doğrudan yazın.",

  contactForm: {
    nameLabel: "Ad Soyad",
    emailLabel: "E-posta",
    messageLabel: "Mesaj",
    submit: "Gönder",
    sending: "Gönderiliyor…",
    success: "Mesajınız iletildi. En kısa sürede dönüş yaparım.",
    error: "Gönderilemedi. Bir süre sonra tekrar deneyin.",
    configureHint:
      "Form henüz yapılandırılmadı. Yerelde `.env.local` içine `WEB3FORMS_ACCESS_KEY` ekleyin (web3forms.com).",
  },

  contact: {
    email: "yusuf.kantarcioglu@gmail.com",
    github: "https://github.com/yusufknt",
    linkedin: null,
    portfolio: "https://yusufkantarcioglu.com/",
    location: "Nazilli, Aydın, Türkiye",
  },

  labels: {
    navWork: "İşler",
    navAbout: "Hakkında",
    navContact: "İletişim",
    langSwitchAria: "Dili değiştir",
    commandPaletteLabel: "Komut paleti",
    commandPalettePlaceholder: "Bölüme git…",
    commandPaletteEmpty: "Sonuç yok.",
    commandPaletteHint: "⌘K",
    linkGithub: "Kaynak kod",
    linkLiveSite: "Canlı site",
    projectProblem: "Problem",
    projectResearch: "Araştırma",
    projectSolution: "Çözüm",
    projectArchitecture: "Mimari",
    projectImplementation: "Uygulama",
    projectTechStack: "Teknoloji",
    projectResults: "Sonuçlar",
    projectGithub: "GitHub",
    projectLiveDemo: "Canlı site",
    projectLiveNone: "Genel web demosu yok — kaynak için GitHub’a bakın.",
    screenshotPlaceholder: "Proje görseli",
    footerBuiltWith: "Next.js · Tailwind CSS · Framer Motion",
    backToHome: "Ana sayfa",
    contactPortfolio: "Portföy sitesi",
    contactLocationLabel: "Konum",
    visitLiveWebsite: "Canlı siteyi yeni sekmede aç",
  },
} satisfies SiteContent;
