/* ============================================================
   TRIZEN   Content layer
   Single source of truth. Derived from README.md and rewritten
   for a premium, enterprise voice while preserving meaning.
   ============================================================ */

export const site = {
  name: "Trizen",
  full: "Trizen Technologies",
  tagline: "AI-Driven Innovation",
  domain: "trizentechnologies.com",
  email: "trizen@trizentechnologies.com",
  location: "Paras Panorama, Sector 126, Mohali, Punjab",
  locationShort: "India",
  // Exact Google Maps place link (not a text search) so "Directions" always
  // opens this precise, verified location instead of Google's best guess.
  mapsUrl: "https://maps.app.goo.gl/guVvmHkQVoGE7MZx9",
  description:
    "Trizen Technologies is an AI-first digital partner   we engineer intelligent web, mobile and enterprise systems, autonomous AI agents, and multi-channel outreach that transform how businesses operate and grow.",
  social: {
    linkedin: "https://www.linkedin.com/company/trizentechnologies/",
    instagram: "https://www.instagram.com/trizen_technologies/",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "AI SDR", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  titleLines: ["Intelligence,", "engineered", "into everything", "you build."],
  lead:
    "We embed AI into web apps, mobile products and business workflows   delivering agents, chatbots, automation and outreach systems that transform how you operate and grow.",
  primary: { label: "Explore Services", href: "/services" },
  secondary: { label: "Meet the AI SDR", href: "/products" },
} as const;

export const heroStats = [
  { value: 10, suffix: "", label: "Projects delivered" },
  { value: 5, suffix: "+", label: "Happy customers" },
  { value: 7, suffix: "", label: "Core disciplines" },
  { value: 24, suffix: "/7", label: "Autonomous outreach" },
] as const;

export const marquee = [
  "AI Integration",
  "Autonomous Agents",
  "Web Engineering",
  "Mobile Apps",
  "SaaS Platforms",
  "RPA & Automation",
  "AR / VR",
  "Cloud",
  "SEO & Growth",
  "QA & Testing",
] as const;

/* ---- What we do (capabilities) ---- */
export const capabilities = [
  {
    title: "AI Integration",
    desc: "We embed chatbots, LLMs, recommendation engines and intelligent features into your existing applications   seamlessly.",
    image: "/media/ai-abstract.webp",
  },
  {
    title: "Intelligent Automation",
    desc: "Automate repetitive work with RPA, NLP pipelines and AI-driven decision engines that save time and cut cost.",
    image: "/media/automation.webp",
  },
  {
    title: "AR / VR Experiences",
    desc: "Immersive augmented and virtual reality for training, simulation and unforgettable customer engagement.",
    image: "/media/innovation.webp",
  },
] as const;

/* ---- Services ---- */
export type Service = {
  id: string;
  n: string;
  title: string;
  subtitle: string;
  desc: string;
  includes: string[];
  image: string;
  /** Optional looping clip shown instead of `image` on the services page. */
  video?: string;
  poster?: string;
};

export const services: Service[] = [
  {
    id: "web",
    n: "01",
    title: "Web Application Development",
    subtitle: "Smart, scalable web experiences",
    desc: "Full-stack web applications that are fast, secure and AI-enhanced   from dashboards to SaaS platforms, built with modern technology.",
    includes: [
      "Full-stack development (React, Node.js)",
      "AI-powered feature integration",
      "Progressive Web Apps (PWA)",
      "REST & GraphQL APIs",
      "Cloud deployment & scaling",
      "Performance optimization",
    ],
    image: "/media/webdev.webp",
    video: "/home/web-engineering.mp4",
    poster: "/home/web-engineering-poster.jpg",
  },
  {
    id: "mobile",
    n: "02",
    title: "iOS / Android Development",
    subtitle: "Intelligent mobile applications",
    desc: "Native and cross-platform apps with built-in AI   intuitive, performant and ready for the intelligent era.",
    includes: [
      "Native iOS (Swift)",
      "Native Android (Kotlin / Java)",
      "Cross-platform (React Native, Flutter)",
      "AI / ML model integration",
      "Offline-first architecture",
      "Push, real-time & store deployment",
    ],
    image: "/media/mobile-app.webp",
    video: "/home/mobile-apps.mp4",
    poster: "/home/mobile-apps-poster.jpg",
  },
  {
    id: "ai",
    n: "03",
    title: "AI & Chatbot Integration",
    subtitle: "Make your product intelligent",
    desc: "We embed conversational AI, LLMs, recommendation engines and RAG into new or existing systems   turning ordinary tools into smart ones.",
    includes: [
      "Custom chatbot development",
      "LLM integration (OpenAI, Gemini, Claude)",
      "AI assistants for web & mobile",
      "Retrieval-Augmented Generation (RAG)",
      "Sentiment analysis & NLP",
      "AI-powered search & recommendations",
    ],
    image: "/media/neural.webp",
    video: "/home/ai-chatbots.mp4",
    poster: "/home/ai-chatbots-poster.jpg",
  },
  {
    id: "automation",
    n: "04",
    title: "Automation & AI Technologies",
    subtitle: "Intelligent process automation",
    desc: "Automate workflows and unlock efficiency with RPA, NLP pipelines and computer vision that reshape operations.",
    includes: [
      "Robotic Process Automation (RPA)",
      "Intelligent workflow automation",
      "AI-driven analytics & reporting",
      "NLP pipelines",
      "Computer vision integration",
      "AI decision engines",
    ],
    image: "/media/automation.webp",
    video: "/home/automation.mp4",
    poster: "/home/automation-poster.jpg",
  },
  {
    id: "arvr",
    n: "05",
    title: "AR / VR Products",
    subtitle: "Immersive reality experiences",
    desc: "Augmented and virtual reality built for training, simulation, product visualization and customer engagement.",
    includes: [
      "Augmented Reality (AR) apps",
      "Virtual Reality (VR) environments",
      "Mixed Reality (MR) solutions",
      "Training & simulation",
      "Product visualization in AR",
      "3D interactive experiences",
    ],
    image: "/media/innovation.webp",
    video: "/home/ar-vr.mp4",
    poster: "/home/ar-vr-poster.jpg",
  },
  {
    id: "qa",
    n: "06",
    title: "Manual & Automated Testing",
    subtitle: "Quality assurance you can trust",
    desc: "Comprehensive QA that keeps applications bug-free and production-ready   from manual test planning to full CI/CD automation.",
    includes: [
      "Functional, regression & UAT",
      "Test planning, cases & bug reporting",
      "Selenium & Appium automation",
      "Cypress E2E testing",
      "API testing (Postman, REST Assured)",
      "CI/CD pipeline integration",
    ],
    image: "/media/workspace.webp",
    video: "/home/qa-testing.mp4",
    poster: "/home/qa-testing-poster.jpg",
  },
  {
    id: "seo",
    n: "07",
    title: "Digital Marketing & SEO",
    subtitle: "Grow your online visibility",
    desc: "Data-driven marketing and SEO strategies that move rankings, run paid campaigns and produce content that converts.",
    includes: [
      "Search Engine Optimization (SEO)",
      "Pay-per-click (PPC) advertising",
      "Social media marketing",
      "Content marketing & strategy",
      "Keyword & competitor analysis",
      "Analytics & performance tracking",
    ],
    image: "/media/marketing.webp",
    video: "/home/growth-seo.mp4",
    poster: "/home/growth-seo-poster.jpg",
  },
];

/* ---- Per-service detail pages ---- */
export type ServiceExtra = {
  tagline: string;
  video: string;
  poster: string;
  /** "light" = ivory footage: hero uses theme text over an ivory fade instead of dark scrims. */
  videoTone?: "light";
  intro: string[];
  whatWeDo: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
  gallery: string[];
  /** Ready-made collage shown in place of the 3-image gallery grid. */
  galleryImage?: { src: string; width: number; height: number };
  tech: string[];
};

export const serviceExtra: Record<string, ServiceExtra> = {
  web: {
    tagline:
      "Your website or web app is often the first thing customers see. We build ones that load fast, stay secure and are easy to use, whether it's a customer portal, an internal dashboard or a full SaaS product.",
    video: "/home/web-engineering.mp4",
    poster: "/home/web-engineering-poster.jpg",
    videoTone: "light",
    intro: [
      "We build full-stack web applications that are quick to load, secure by default and intelligent under the hood   from dashboards and SaaS platforms to customer portals.",
      "Every build pairs modern front-end craft with robust APIs and cloud infrastructure, so your product scales cleanly as you grow.",
    ],
    whatWeDo: [
      { title: "Full-stack builds", desc: "React / Next.js front-ends backed by Node.js, REST and GraphQL APIs." },
      { title: "AI-powered features", desc: "Search, recommendations and assistants embedded where they add value." },
      { title: "PWA & performance", desc: "Progressive web apps, Core Web Vitals and cloud deployment tuned for scale." },
    ],
    outcomes: [
      { value: "2×", label: "Faster load times" },
      { value: "99.9%", label: "Uptime targets" },
      { value: "SEO", label: "Best practices built in" },
    ],
    gallery: ["/media/webdev.webp", "/media/code-screen.jpg", "/media/developers.jpg"],
    galleryImage: { src: "/services/web-gallery.png", width: 1536, height: 1024 },
    tech: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "AWS"],
  },
  mobile: {
    tagline:
      "Your customers spend most of their day on their phones. We build iPhone and Android apps that feel smooth, keep working on a weak connection and get through App Store and Play Store review without delays.",
    video: "/home/mobile-apps.mp4",
    poster: "/home/mobile-apps-poster.jpg",
    videoTone: "light",
    intro: [
      "We craft mobile apps that feel native, perform smoothly and ship with AI baked in   for iOS, Android, or both from a single codebase.",
      "From offline-first architecture to on-device ML, we build apps users keep on their home screen.",
    ],
    whatWeDo: [
      { title: "Native & cross-platform", desc: "Swift, Kotlin, React Native and Flutter   the right tool per project." },
      { title: "On-device intelligence", desc: "ML models, personalization and smart features that work offline." },
      { title: "Store-ready delivery", desc: "Push, real-time sync and App Store / Play Store deployment." },
    ],
    outcomes: [
      { value: "1", label: "Codebase, iOS + Android" },
      { value: "Offline", label: "First architecture" },
      { value: "4.8★", label: "Store-quality UX" },
    ],
    gallery: ["/media/mobile-app.webp", "/media/woman-laptop.jpg", "/media/workspace.webp"],
    galleryImage: { src: "/services/mobile-gallery.png", width: 1536, height: 1024 },
    tech: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
  },
  ai: {
    tagline:
      "Your team answers the same questions every day. We add chatbots and AI assistants that learn from your own documents, so customers and staff get accurate answers instantly, at any hour.",
    video: "/home/ai-chatbots.mp4",
    poster: "/home/ai-chatbots-poster.jpg",
    videoTone: "light",
    intro: [
      "We turn ordinary products into intelligent ones   embedding conversational AI, LLMs and retrieval-augmented generation into new or existing systems.",
      "From support copilots to AI-powered search, we ship intelligence that's grounded in your data and safe in production.",
    ],
    whatWeDo: [
      { title: "Chatbots & copilots", desc: "Assistants trained on your content, integrated into web and mobile." },
      { title: "RAG & search", desc: "Retrieval-augmented generation over your knowledge base and docs." },
      { title: "LLM integration", desc: "OpenAI, Gemini, Claude   wired in with guardrails and evals." },
    ],
    outcomes: [
      { value: "24/7", label: "Automated support" },
      { value: "−40%", label: "Support volume" },
      { value: "RAG", label: "Grounded, cited answers" },
    ],
    gallery: ["/media/neural.webp", "/media/ai-render.jpg", "/media/ai-abstract.webp"],
    galleryImage: { src: "/services/ai-gallery.png", width: 1672, height: 941 },
    tech: ["OpenAI", "Claude", "LangChain", "Python", "Pinecone"],
  },
  automation: {
    tagline:
      "Copying data between spreadsheets, chasing approvals, rebuilding the same report every week. We automate that repetitive work so it runs on its own, and your team gets those hours back.",
    video: "/home/automation-hero.mp4",
    poster: "/home/automation-hero-poster.jpg",
    videoTone: "light",
    intro: [
      "We automate the repetitive work that slows teams down   with RPA, NLP pipelines and AI decision engines that run reliably in the background.",
      "The result: fewer manual steps, faster processes and people freed to do higher-value work.",
    ],
    whatWeDo: [
      { title: "Robotic Process Automation", desc: "Bots that handle repetitive, rules-based tasks across your tools." },
      { title: "Intelligent workflows", desc: "NLP pipelines and AI decisioning wired into your operations." },
      { title: "Analytics & reporting", desc: "Automated dashboards and insights, delivered on schedule." },
    ],
    outcomes: [
      { value: "80%", label: "Time saved" },
      { value: "24/7", label: "Runs unattended" },
      { value: "0", label: "Manual re-keying" },
    ],
    gallery: ["/media/automation.webp", "/media/analytics-ui.jpg", "/media/data-center.jpg"],
    galleryImage: { src: "/services/automation-gallery.png", width: 1536, height: 1024 },
    tech: ["Python", "UiPath", "Airflow", "OpenCV"],
  },
  arvr: {
    tagline:
      "Some things are easier to show than explain. We build AR and VR experiences that let customers see a product in their own space, and let your team train hands-on without the cost or risk of the real thing.",
    video: "/home/ar-vr.mp4",
    poster: "/home/ar-vr-poster.jpg",
    videoTone: "light",
    intro: [
      "We build augmented and virtual reality experiences for training, simulation, product visualization and unforgettable customer engagement.",
      "From AR product previews to full VR environments, we make the immersive practical.",
    ],
    whatWeDo: [
      { title: "AR experiences", desc: "Product visualization and interactive overlays for web and mobile." },
      { title: "VR environments", desc: "Training simulations and immersive worlds built to scale." },
      { title: "3D & mixed reality", desc: "Interactive 3D and MR solutions for real business use." },
    ],
    outcomes: [
      { value: "3D", label: "Interactive visualization" },
      { value: "VR", label: "Training & simulation" },
      { value: "AR", label: "On any device" },
    ],
    gallery: ["/media/innovation.webp", "/media/vr-headset.jpg", "/media/cyber.jpg"],
    galleryImage: { src: "/services/arvr-gallery.png", width: 1536, height: 1024 },
    tech: ["Unity", "WebXR", "Three.js", "ARKit", "ARCore"],
  },
  qa: {
    tagline:
      "One bug in production can cost you customers. We test your web and mobile apps by hand and with automated checks on every release, so problems get caught before your users ever see them.",
    video: "/home/qa-testing.mp4",
    poster: "/home/qa-testing-poster.jpg",
    videoTone: "light",
    intro: [
      "We keep your applications bug-free and production-ready   from manual test planning to full CI/CD automation.",
      "Comprehensive QA that catches issues early, so you ship with confidence.",
    ],
    whatWeDo: [
      { title: "Manual & exploratory", desc: "Functional, regression and UAT with clear test plans and reporting." },
      { title: "Test automation", desc: "Selenium, Appium and Cypress suites wired into your pipeline." },
      { title: "API & performance", desc: "Postman / REST Assured API tests and load testing at scale." },
    ],
    outcomes: [
      { value: "CI/CD", label: "Automated pipelines" },
      { value: "E2E", label: "Coverage" },
      { value: "↓ bugs", label: "In production" },
    ],
    gallery: ["/media/workspace.webp", "/media/code-screen.jpg", "/media/developers.jpg"],
    galleryImage: { src: "/services/qa-gallery.png", width: 1536, height: 1024 },
    tech: ["Selenium", "Appium", "Cypress", "Postman", "Jest"],
  },
  seo: {
    tagline:
      "A great product won't sell if nobody can find it. We help you rank on Google, run ads that bring in real customers, and show you clear numbers on what's working and what isn't.",
    video: "/home/growth-seo.mp4",
    poster: "/home/growth-seo-poster.jpg",
    videoTone: "light",
    intro: [
      "We grow your visibility with SEO, paid campaigns and content that converts   all measured and optimized against real business goals.",
      "Strategy backed by analytics, executed with craft.",
    ],
    whatWeDo: [
      { title: "SEO & content", desc: "Technical SEO, keyword strategy and content that ranks and converts." },
      { title: "Paid & social", desc: "PPC and social campaigns tuned for ROI across channels." },
      { title: "Analytics & growth", desc: "Tracking, experimentation and reporting that compounds results." },
    ],
    outcomes: [
      { value: "+312%", label: "Avg. response lift" },
      { value: "SEO", label: "First-page focus" },
      { value: "ROI", label: "Measured & optimized" },
    ],
    gallery: ["/media/marketing.webp", "/media/analytics-ui.jpg", "/media/meeting-room.jpg"],
    galleryImage: { src: "/services/seo-gallery.png", width: 1672, height: 941 },
    tech: ["GA4", "Search Console", "Ahrefs", "Meta Ads"],
  },
};

/* ---- Services hero (rotating keyword) ---- */
export const servicesHero = {
  eyebrow: "Our Services",
  prefix: "Full-spectrum",
  words: ["web", "mobile", "AI", "automation", "AR / VR", "testing", "growth"],
  suffix: "services.",
  subtitle:
    "From web and mobile to AI, automation and QA   end-to-end solutions engineered to drive real business results.",
  primary: { label: "Explore services", href: "#web" },
  secondary: { label: "Book a call", href: "/contact" },
  tags: [
    "Web Apps",
    "Mobile",
    "AI & Chatbot",
    "Automation",
    "AR / VR",
    "QA & Testing",
    "SEO & Growth",
  ],
} as const;

/* ---- Product: AI SDR ---- */
export const product = {
  badge: "Flagship AI Product",
  title: "AI SDR Outreach System",
  tagline: "Close more deals with AI-powered, multi-channel outreach.",
  desc: "Automate your entire sales development pipeline across voice calls, email, WhatsApp and LinkedIn. Our AI SDR engages prospects 24/7, personalizes every interaction, and books qualified meetings on autopilot.",
  metrics: [
    { value: "10x", label: "Faster outreach" },
    { value: "3x", label: "Higher response rates" },
    { value: "80%", label: "Time saved" },
  ],
  channels: [
    {
      title: "AI Calling",
      tag: "Voice outreach on autopilot",
      desc: "Conversational AI agents make outbound calls, handle objections naturally, qualify leads and book meetings   without human intervention. Every call sounds natural, stays on-script where it matters, and adapts the moment a prospect pushes back.",
      stat: { value: "24/7", label: "AI agents dialing around the clock, no shift gaps" },
      points: [
        "Natural voice AI conversation",
        "Real-time objection handling",
        "Recording & AI summary",
        "CRM integration & lead sync",
        "Multi-language support",
        "Smart call scheduling",
        "Voicemail drop automation",
        "Call outcome analytics dashboard",
      ],
    },
    {
      title: "Email Outreach",
      tag: "Personalized at scale",
      desc: "AI crafts hyper-personalized sequences per prospect from their profile, company and behavior   lifting open and reply rates. Sequences adjust tone, timing and follow-up cadence automatically as a prospect engages.",
      stat: { value: "3x", label: "higher reply rates vs. generic mass emails" },
      points: [
        "AI-written personalized email",
        "Multi-step automated sequences",
        "Open & click tracking",
        "A/B testing & optimization",
        "Smart follow-up timing",
        "Deliverability management",
        "Inbox warm-up & reputation protection",
        "Reply sentiment detection",
      ],
    },
    {
      title: "WhatsApp Outreach",
      tag: "Engage where prospects are",
      desc: "Reach prospects on the highest-read channel. AI manages two-way conversations, answers questions and nurtures leads   all inside the app they already check dozens of times a day.",
      stat: { value: "98%", label: "of WhatsApp messages get opened" },
      points: [
        "Automated WhatsApp campaigns",
        "AI two-way conversations",
        "Template-based flows",
        "Rich media support",
        "WhatsApp Business API",
        "Opt-in / opt-out management",
        "Broadcast lists & segmentation",
        "Read-receipt & response analytics",
      ],
    },
    {
      title: "LinkedIn Outreach",
      tag: "B2B prospecting automated",
      desc: "Scale LinkedIn with AI-powered connection requests, message sequences, profile visits and InMail   targeting the right decision makers with messaging tuned to their role and industry.",
      stat: { value: "5x", label: "more qualified connections accepted per week" },
      points: [
        "Automated connection requests",
        "Personalized message sequences",
        "Profile visit automation",
        "InMail campaign management",
        "Prospect targeting filters",
        "Sales Navigator integration",
        "Auto profile views & endorsements",
        "Lead list building from Sales Navigator",
      ],
    },
  ],
  steps: [
    {
      n: "01",
      title: "Import your leads",
      desc: "Upload a prospect list from any CRM or CSV. AI enriches and segments automatically.",
    },
    {
      n: "02",
      title: "Set up AI sequences",
      desc: "Configure multi-channel sequences. AI personalizes every message for each prospect.",
    },
    {
      n: "03",
      title: "AI engages prospects",
      desc: "Your AI SDR reaches out across calls, email, WhatsApp and LinkedIn simultaneously   24/7.",
    },
    {
      n: "04",
      title: "Book meetings on autopilot",
      desc: "Qualified prospects land in your calendar. You only talk to interested leads.",
    },
  ],
} as const;

/* ---- Why us ---- */
export const whyUs = [
  {
    title: "AI-First Approach",
    desc: "We build intelligence into every solution, turning ordinary applications into smart, adaptive systems.",
  },
  {
    title: "End-to-End Delivery",
    desc: "From concept to deployment, we own the full lifecycle   design, build, test and maintain.",
  },
  {
    title: "Proven Results",
    desc: "Our AI-driven work helps businesses increase efficiency, close more deals and scale faster.",
  },
] as const;

/* ---- About ---- */
export const about = {
  eyebrow: "About Us",
  heading: "We are Trizen Technologies",
  lead: "An AI-first technology company building intelligent solutions that transform how businesses operate, communicate and grow.",
  story: [
    "Trizen Technologies was founded on a single vision   to make AI accessible and impactful for businesses of every size. We saw companies struggling to keep pace with rapidly evolving technology, and we set out to bridge that gap.",
    "What began as a web and mobile studio quickly evolved into an AI-first partner. We realized the most meaningful value we could add wasn't just building applications   it was making them intelligent.",
    "Today we integrate chatbots, automation, AR/VR and AI-powered outreach into businesses across industries   helping them work smarter, grow faster and lead their markets.",
  ],
  mission:
    "To democratize AI by integrating intelligent capabilities into everyday business applications   empowering companies to automate, scale and compete in the AI era, regardless of size or industry.",
  vision:
    "To be the leading AI integration partner for businesses worldwide   synonymous with innovation, where every product we build pushes the frontier of what's possible.",
  values: [
    { title: "Innovation", desc: "We stay ahead of the curve, continuously adopting the latest AI and technology advancements." },
    { title: "Quality", desc: "Every line of code and every solution meets the highest standards of performance." },
    { title: "AI-First", desc: "Intelligence isn't an add-on   it's the foundation of everything we design and build." },
    { title: "Client Success", desc: "Your growth is our mission. We measure success by the value we create for you." },
  ],
} as const;

/* ============================================================
   ABOUT PAGE   expanded, non-duplicative content
   ============================================================ */

/* ---- Scroll-scrub video hero (Apple-style) ---- */
export const aboutHero = {
  eyebrow: "About Trizen",
  // Laptop teardown, re-encoded with a keyframe every 6 frames for smooth scroll-scrubbing
  video: "/hero/hero-laptop-scrub.mp4",
  poster: "/hero/hero-laptop-poster.jpg",
  /* Brightness of the (unscrimmed) footage behind each stage's headline (`tone`)
     and subtitle (`subTone`), so the copy switches between dark-on-light and
     light-on-dark. */
  stages: [
    {
      title: ["We engineer", "intelligence."],
      // Sits over the video's first frame (closed laptop on a light ground)
      sub: "An AI-first studio turning bold ideas into products that think, learn and scale.",
      tone: "light",
      subTone: "light",
    },
    {
      title: ["Built by a", "restless young team."],
      sub: "Engineers, designers and AI specialists who treat every build as a craft.",
      tone: "dark",
      subTone: "dark",
    },
    {
      title: ["Let's build the", "intelligent future."],
      sub: "From the first spark of an idea to a living product   with intelligence at its core.",
      tone: "light",
      subTone: "light",
    },
  ],
} as const;

/* ---- Core Values   image accordion (hover to expand) ---- */
export const aboutValues = {
  eyebrow: "Core Values",
  heading: ["What", "drives us."],
  items: [
    {
      title: "Innovation",
      tags: ["Curious", "Frontier"],
      desc: "We stay ahead of the curve, continuously adopting the latest AI and technology advancements.",
      image: "/about/c6d60cda-169e-4003-84db-73b1042689ed.png",
    },
    {
      title: "Quality",
      tags: ["Craft", "Reliable"],
      desc: "Every line of code and every solution meets the highest standards of performance.",
      image: "/about/882cbded-5f18-4128-ab4d-1dae482641c5.png",
    },
    {
      title: "AI-First",
      tags: ["Intelligent", "By design"],
      desc: "Intelligence isn't an add-on   it's the foundation of everything we design and build.",
      image: "/about/092f37fa-f3c5-4c1b-abfc-e6eeae868329.png",
    },
    {
      title: "Client Success",
      tags: ["Outcomes", "Value"],
      desc: "Your growth is our mission. We measure success by the value we create for you.",
      image: "/about/196f76b2-ade9-4c5d-b894-c0af547441c0.png",
    },
    {
      title: "Partnership",
      tags: ["Team", "Long-term"],
      desc: "We work as an extension of your team   not a vendor   invested in your results.",
      image: "/about/f1dd0132-2969-4750-9aac-f9fbfa20a55f.png",
    },
  ],
} as const;

/* ---- Culture: young, energetic, creative ---- */
export const aboutCulture = {
  eyebrow: "Our culture",
  heading: ["Young, energetic,", "relentlessly creative."],
  body: [
    "We're a young, energetic team of engineers, designers and AI specialists who genuinely love building. We move fast, stay curious, and treat every project like a craft   not a ticket to close.",
    "That energy shows up in the work: bolder ideas, cleaner execution, and a willingness to try the approach nobody else has. We'd rather ship something remarkable than something merely acceptable.",
  ],
  highlights: [
    {
      title: "Young & energetic",
      desc: "A team that moves fast, stays curious, and brings fresh energy to every problem it touches.",
    },
    {
      title: "Creative by default",
      desc: "We treat engineering as a craft   chasing elegant solutions, not just ones that technically work.",
    },
    {
      title: "Always learning",
      desc: "AI shifts every week   so do we. Continuous learning isn't a perk here, it's the job.",
    },
    {
      title: "Ownership mindset",
      desc: "We act like founders of your product: invested in outcomes and impact, never just hours logged.",
    },
  ],
} as const;

/* ---- What we build (About): the real service list + the AI SDR product ---- */
export const aboutOffer = {
  eyebrow: "What we build",
  heading: ["Seven services.", "One AI-first team."],
  sub: "Everything we offer, in one place. Pick the one you need, or bring us the problem and we'll shape the build around it.",
} as const;

/* ---- Team / people ---- */
export const aboutTeam = {
  eyebrow: "The people",
  heading: ["A small team with", "outsized impact."],
  body: "We stay deliberately lean   a tight, multidisciplinary crew who ship more than teams three times our size. Fewer hand-offs, more craft, and direct access to the people actually building your product.",
  tags: ["Engineers", "Designers", "AI specialists", "QA", "Growth"],
  images: [
    // Collage fills column-first (even = left, odd = right); the two similar
    // laptop shots (0 and 3) sit diagonally so they're never side by side.
    { src: "/about/cae1243f-0eaa-4da7-80ae-e9041d77ac76.png", alt: "Engineers pairing on code at a shared monitor" },
    { src: "/about/cb79fbb4-d7f9-40f7-a47f-f18cff8ff513.png", alt: "Mapping out app screens on a whiteboard with sticky notes" },
    { src: "/about/d3da46b4-5cd8-420a-aa1f-b0505cb465a3.png", alt: "A team session walking through an AI dashboard" },
    { src: "/about/987de268-1c4d-4570-a6f5-b88aea772754.png", alt: "The team smiling over a build on a laptop" },
  ],
} as const;

/* ---- Tech stack ---- */
export const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow",
  "OpenAI", "LangChain", "AWS", "Docker", "Kubernetes", "PostgreSQL",
  "Flutter", "Swift", "Kotlin", "GraphQL", "Selenium", "Figma",
] as const;

/* ---- Testimonials (representative voice, brand-neutral) ---- */
export const testimonials = [
  {
    quote:
      "Trizen took Dine Dash from an idea to a real product   our website, iOS and Android apps, and now our digital marketing, all under one roof. They think like a partner, not a vendor.",
    name: "Elliot Burdon",
    role: "CEO, Dine Dash",
    avatar: "/media/portraits/Elliot.jpeg",
  },
] as const;

/* ---- FAQ ---- */
export const faqs = [
  {
    q: "What makes Trizen an 'AI-first' company?",
    a: "Intelligence isn't a feature we bolt on at the end. We design every solution around AI from day one   whether that's an embedded assistant, an automation pipeline, or an autonomous outreach agent.",
  },
  {
    q: "Do you work with existing applications or only new builds?",
    a: "Both. We integrate chatbots, LLMs, RAG and automation into systems you already run, and we build new AI-native products end-to-end.",
  },
  {
    q: "How does the AI SDR Outreach System work?",
    a: "You import leads, configure multi-channel sequences, and the AI engages prospects across calls, email, WhatsApp and LinkedIn 24/7   booking qualified meetings straight into your calendar.",
  },
  {
    q: "Which industries do you serve?",
    a: "We work across industries   SaaS, fintech, retail, logistics and more. Our AI and engineering practices adapt to your domain and data.",
  },
  {
    q: "What does engagement look like?",
    a: "It starts with a free consultation and a no-obligation project quote, followed by an AI integration assessment. From there we own design, build, test and maintenance.",
  },
  {
    q: "How quickly can we get started?",
    a: "Reach out and our team responds within 24 hours to map out the right solution for your goals.",
  },
] as const;

export const contactSubjects = [
  "General Enquiry",
  "Web Application Development",
  "iOS / Android App Development",
  "AI & Chatbot Integration",
  "Automation & AI Technologies",
  "AR/VR Products",
  "Manual & Automated Testing",
  "Digital Marketing & SEO",
  "AI SDR Outreach System",
  "Partnership / Collaboration",
  "Other",
] as const;

export const contactPromises = [
  "Free initial consultation",
  "Response within 24 hours",
  "No-obligation project quote",
  "AI integration assessment",
] as const;

/* ============================================================
   HOMEPAGE   expanded showcase content
   New editorial + section copy for the animated home page.
   ============================================================ */

/* ---- About teaser (editorial intro on home) ---- */
export const homeAbout = {
  eyebrow: "Who we are",
  heading: ["We build software", "that thinks."],
  body: [
    "Trizen Technologies is an AI-first studio. We started where most teams stop   asking not just what a product should do, but how it should reason. That question reshapes everything downstream: the architecture, the interface, the outcomes.",
    "From embedded assistants and retrieval pipelines to autonomous outreach agents, we ship intelligence as a first-class feature   engineered, measured and built to scale with your business.",
  ],
  image: "/home/7b42c6e6-e039-4f73-a86d-cf70cf73eef2.png",
  imageAlt: "Trizen team reviewing code and a system architecture diagram together",
} as const;

/* ---- Capabilities gallery (pinned storyboard) ---- */
/* Pulls from `services` but pairs each with a gallery image + short line. */
export type CapabilityItem = {
  id: string;
  label: string;
  line: string;
  desc: string;
  points: readonly string[];
  /** Still image; doubles as the poster when `video` is set. */
  image: string;
  video?: string;
};

export const capabilityGallery: readonly CapabilityItem[] = [
  {
    id: "web",
    label: "Web Engineering",
    line: "Fast, secure, AI-enhanced web platforms.",
    desc: "From customer portals to full SaaS products, we build web apps with AI designed in from day one, not bolted on later.",
    points: [
      "React, Next.js & Node.js full-stack builds",
      "AI search, copilots & recommendations",
      "Cloud-ready, fast and secure by default",
    ],
    image: "/home/web-engineering-poster.jpg",
    video: "/home/web-engineering.mp4",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    line: "Native & cross-platform, intelligence built in.",
    desc: "iOS and Android apps that feel quick, keep working offline and put smart features right in your users' hands.",
    points: [
      "Swift, Kotlin, React Native & Flutter",
      "On-device AI & ML model integration",
      "Offline-first, push & store deployment",
    ],
    image: "/home/mobile-apps-poster.jpg",
    video: "/home/mobile-apps.mp4",
  },
  {
    id: "ai",
    label: "AI & Chatbots",
    line: "LLMs, RAG and assistants embedded into your product.",
    desc: "We connect language models to your own docs and data, so assistants give grounded answers instead of guesses.",
    points: [
      "Custom chatbots & AI assistants",
      "RAG over your knowledge base",
      "OpenAI, Gemini & Claude integrations",
    ],
    image: "/home/ai-chatbots-poster.jpg",
    video: "/home/ai-chatbots.mp4",
  },
  {
    id: "automation",
    label: "Automation",
    line: "RPA and decision engines that reclaim hours.",
    desc: "We find the repetitive work slowing your team down and hand it to bots and AI pipelines that run around the clock.",
    points: [
      "RPA for data entry & back-office tasks",
      "NLP & computer vision pipelines",
      "Decision engines & automated reporting",
    ],
    image: "/home/automation-poster.jpg",
    video: "/home/automation.mp4",
  },
  {
    id: "arvr",
    label: "AR / VR",
    line: "Immersive training, simulation and visualization.",
    desc: "Experiences that let people train safely, explore products in 3D and understand complex ideas by doing.",
    points: [
      "AR product visualization",
      "VR training & simulation",
      "Mixed reality & 3D interactive builds",
    ],
    image: "/home/ar-vr-poster.jpg",
    video: "/home/ar-vr.mp4",
  },
  {
    id: "qa",
    label: "QA & Testing",
    line: "Quality assurance you can trust.",
    desc: "We test every release by hand and by script, so bugs get caught in the pipeline instead of by your users.",
    points: [
      "Functional, regression & UAT testing",
      "Selenium, Appium & Cypress automation",
      "API testing wired into CI/CD",
    ],
    image: "/home/qa-testing-poster.jpg",
    video: "/home/qa-testing.mp4",
  },
  {
    id: "seo",
    label: "Growth & SEO",
    line: "Data-driven marketing that moves the needle.",
    desc: "SEO, paid campaigns and content built on real data, with every channel measured against growth you can see.",
    points: [
      "Technical SEO & keyword research",
      "PPC & social media campaigns",
      "Content strategy & performance tracking",
    ],
    image: "/home/growth-seo-poster.jpg",
    video: "/home/growth-seo.mp4",
  },
] as const;

/* ---- Showreel (sparkle clip-path reveal) ---- */
export const showreel = {
  eyebrow: "Inside the work",
  title: ["Intelligence in", "motion."],
  caption: "A look at how we engineer AI into products   from data to decision.",
  image: "/media/data-center.jpg",
  imageAlt: "Abstract data infrastructure",
  /* Everyday scenes revealed over the video, one per business area */
  scenes: [
    {
      area: "Support",
      href: "/services/ai",
      title: "Customer questions get answered at 2 a.m.",
      desc: "Assistants trained on your docs and data resolve routine questions around the clock, and hand the tricky ones to your team with full context.",
    },
    {
      area: "Sales",
      href: "/products",
      title: "New leads hear back in minutes, not days.",
      desc: "An AI SDR follows up across calls, email, WhatsApp and LinkedIn, qualifies interest and books the meeting straight into your calendar.",
    },
    {
      area: "Operations",
      href: "/services/automation",
      title: "Reports build themselves every morning.",
      desc: "Automations pull numbers from every tool you use, flag what changed and land a clean summary in your inbox before the day starts.",
    },
    {
      area: "Product",
      href: "/services/web",
      title: "Your app gets smarter with every user.",
      desc: "Search that understands intent, recommendations that fit and features that adapt, built into the web and mobile products your customers already use.",
    },
  ],
} as const;

/* ---- Stats band ---- */
export const statsBand = [
  { value: 10, suffix: "", label: "Projects delivered" },
  { value: 5, suffix: "+", label: "Happy customers" },
  { value: 7, suffix: "", label: "Core services" },
  { value: 30, suffix: "+", label: "Technologies we build with" },
] as const;

/* ---- Testimonials heading ---- */
export const testimonialsIntro = {
  eyebrow: "Client stories",
  heading: ["Teams that let", "their products think."],
} as const;

/* ---- How we work (homepage engagement process) ---- */
export const homeProcess = {
  eyebrow: "How we work",
  heading: ["From idea to", "intelligent product."],
  sub: "A clear, four-step path from first conversation to a live product that keeps getting smarter.",
  steps: [
    {
      n: "01",
      title: "Discover",
      desc: "We map your goals, data and workflows to find where AI creates the most leverage   and where it doesn't.",
    },
    {
      n: "02",
      title: "Design & architect",
      desc: "We shape the solution   experience, system architecture and the AI approach   before a line of code is written.",
    },
    {
      n: "03",
      title: "Build & integrate AI",
      desc: "We engineer the product and embed intelligence   agents, RAG, automation   tested end to end.",
    },
    {
      n: "04",
      title: "Launch & scale",
      desc: "We ship to production, measure real impact, and keep improving the system as you grow.",
    },
  ],
} as const;

/* ---- Closing CTA band ---- */
export const ctaBand = {
  eyebrow: "Let's build",
  title: ["Ready to make", "it intelligent?"],
  sub: "Tell us what you're building. We'll map the fastest path to an AI-native product   free consultation, response within 24 hours.",
  primary: { label: "Start a project", href: "/contact" },
  secondary: { label: "Meet the AI SDR", href: "/products" },
} as const;
