export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  client?: string;
  /** Path under `/public` — e.g. `/logos/nagarro.svg` */
  logoSrc?: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type LinkedInPeerTheme = {
  title: string;
  detail: string;
};

export type Recommendation = {
  quote: string;
  author: string;
  context: string;
};

export type SiteCraftSignal = {
  title: string;
  detail: string;
};

export type WritingItem = {
  title: string;
  subtitle: string;
  url: string;
  tags: string[];
  readingMinutes: number;
};

export type ImpactHighlight = {
  title: string;
  company: string;
  client: string;
  problem: string;
  outcome: string;
  signals: string[];
};

/** Scannable outcomes for hiring managers — tie numbers to named programs. */
export type ProofOutcome = {
  metric: string;
  label: string;
  where: string;
};

export type DailyTool = {
  name: string;
  oneLiner: string;
};

export type PerformanceNote = {
  intro: string;
  howMeasured: string;
  bullets: string[];
};

export type ContactCta = {
  /** Prefilled mailto subject — hiring manager replaces bracketed role. */
  emailSubject: string;
  /** Optional starter body so replies are structured. */
  emailBody: string;
  primaryButtonLabel: string;
};

export const profile = {
  name: "Kumar Ankur",
  /** ISO date for first full-time engineering role — drives live “years of experience” copy ({{years}} = e.g. 10+) */
  careerStartISO: "2015-10-01",
  /** Primary line under name in hero */
  role: "Senior Frontend Engineer · Frontend Architect",
  /** Sub-line for credibility scanning */
  roleAccent: "Staff-level frontend · AI-enabled delivery · {{years}} years shipping production UI",
  location: "Bangalore, India",
  headline:
    "I architect customer-facing platforms the way top product orgs expect—clear ownership, measurable UX, and systems that stay maintainable after launch. I partner tightly with product, design, and platform teams on trade-offs, risk, and delivery sequencing.",
  expertiseChips: [
    "{{years}} years shipping enterprise customer UIs",
    "Fortune 500 & scale: McKinsey, Verizon, Marriott, AT&T · MakeMyTrip (consumer travel)",
    "AI-assisted engineering: Copilot, Cursor, ChatGPT in daily workflow",
    "Leadership: interviews, mentoring, architecture & code quality",
  ],
  /** Hero status pill (under name) — {{years}} is replaced from careerStartISO */
  heroStatusLine: "{{years}} years · Enterprise UI · Fortune 500 programs",
  heroCallouts: {
    focus: "Enterprise platforms · Fortune 500 programs",
    proof: "{{years}} years in production frontend systems",
  },
  summary: [
    "{{years}} years shipping enterprise-grade web applications and frontend platforms using React, TypeScript, JavaScript, Angular, Redux, and modern delivery practices. I specialize in frontend architecture, reusable component systems, WCAG-minded accessibility, Core Web Vitals and Lighthouse-driven performance, enterprise UI platforms, SharePoint SPFx, and AI-assisted software development.",
    "I have repeatedly delivered at scale for global organizations—McKinsey & Company (current), Verizon, MakeMyTrip, Marriott, and AT&T—across ecommerce, telecom, travel marketplaces, hospitality, and collaboration domains. I am comfortable owning architecture discussions, raising the quality bar through reviews, and mentoring engineers while partnering with product, UX, and backend teams.",
    "I actively use GitHub Copilot, Cursor, and ChatGPT for AI-assisted debugging, automation, boilerplate acceleration, and productivity-focused workflows—without compromising code review, security awareness, or ownership. I also write on Medium (React, React Native maps, Firebase auth, UI animation) to share practical implementation notes with the community.",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/kumar-ankur-696026b7/",
    medium: "https://medium.com/@akakankur81",
    github: "https://github.com/Ankur-1994",
    featuredProject: "https://www.aashviautomotive.in/",
  },
  /** Static file in /public — used for download attribute */
  assets: {
    resumePdfPath: "/Kumar-Ankur-Senior-Frontend-Engineer-Resume.pdf",
    resumeDownloadName: "Kumar-Ankur-Senior-Frontend-Engineer-Resume.pdf",
  },
  contact: {
    email: "akakankur81@gmail.com",
    whatsappE164: "919599015901",
  },
  /**
   * Recruiter-facing availability.
   * Optional: add `bookingUrl` with your Cal.com or Calendly link to show “Book a short intro” in the hero.
   */
  availability: {
    headline: "Open to senior / staff frontend & frontend-architect roles (IC)",
    subline: "India · Remote-friendly · Typical notice: per current employer agreement",
  },
  leadership: [
    "Led and mentored frontend teams (up to ~5 engineers) across enterprise product initiatives.",
    "Conducted technical interviews and candidate evaluations for frontend roles.",
    "Partnered with architects, stakeholders, and cross-functional teams on modernization, accessibility, and performance engineering.",
    "Championed reusable architecture, performance budgets, and pragmatic Agile delivery.",
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech), Electronics & Communication Engineering",
    school: "Academy of Technology",
    period: "2011 — 2015",
  },
  certifications: [
    "Agile awareness & Scrum-oriented delivery",
    "Spot awards and engineering excellence recognition",
    "100+ DSA problems (platforms / AlgoExpert) — disciplined problem-solving practice",
  ],
  experience: [
    {
      company: "Nagarro",
      role: "Senior Software Engineer",
      location: "India (client-facing)",
      client: "McKinsey & Company",
      logoSrc: "/logos/nagarro.svg",
      start: "2024",
      end: "Present",
      highlights: [
        "Architecting scalable enterprise frontend platforms and reusable UI systems with React, TypeScript, and modern engineering practices.",
        "Building SharePoint SPFx extensions and enterprise collaboration experiences for internal business workflows.",
        "Owning reusable component libraries and modular architectures that improve maintainability, velocity, and consistency across teams.",
        "Tuning rendering performance, bundle strategy, lazy loading, and scalability to improve real user experience and operational efficiency.",
        "Shipping responsive, WCAG-conscious enterprise interfaces with strong attention to edge cases and production stability.",
        "Leveraging GitHub Copilot, Cursor, and ChatGPT for AI-assisted development, debugging, and workflow automation—paired with rigorous review and ownership.",
        "Code reviews, architecture discussions, mentoring, and frontend candidate evaluation through structured technical interviews.",
      ],
    },
    {
      company: "MakeMyTrip",
      role: "Lead Software Engineer",
      location: "Gurugram, India",
      logoSrc: "/logos/makemytrip.svg",
      start: "2022",
      end: "2023",
      highlights: [
        "Drove technical excellence across the team—code quality, performance, and security standards—with clear ownership of delivery and reviews.",
        "Partnered with product, design, and cross-functional teams on requirements, architecture, and roadmaps for the MMT mobile product.",
        "Built and evolved the host-app funnel so hosts could onboard, complete mandatory fields, and submit details for QC verification.",
        "Explored a POC to ship the Host App independently via OTA updates (Microsoft App Center / CodePush-style delivery) so releases could move faster than the main app bundle.",
      ],
    },
    {
      company: "Publicis Sapient",
      role: "Senior Software Engineer",
      location: "India (client-facing)",
      client: "Verizon",
      logoSrc: "/logos/publicissapient.svg",
      start: "2020",
      end: "2024",
      highlights: [
        "Delivered enterprise-scale ecommerce experiences with React, Angular, TypeScript, Redux, Bootstrap, and Material UI.",
        "Built reusable component libraries and enterprise UI modules reused across multiple business workflows.",
        "Improved Core Web Vitals and perceived performance via lazy loading, image optimization, code splitting, and bundle strategy—roughly ~30% page load improvement on targeted initiatives.",
        "Automated repetitive configuration with Node.js tooling, cutting manual effort by roughly 95% for supported workflows.",
        "Led and mentored a frontend team of five across roadmap execution, quality, and stakeholder alignment.",
        "Partnered with product, architecture, and clients through sprint planning, demos, and release cycles.",
      ],
    },
    {
      company: "Publicis Sapient",
      role: "Software Engineer",
      location: "India (client-facing)",
      client: "Marriott",
      logoSrc: "/logos/publicissapient.svg",
      start: "2018",
      end: "2020",
      highlights: [
        "Built smart TV and digital hospitality experiences with React, Redux, HTML5, CSS3, and Bootstrap.",
        "Implemented animated EPG-style interfaces and rendering optimizations that materially improved responsiveness (~40% on measured flows).",
        "Integrated major OTT experiences (Netflix, Prime Video, Hulu, and related streaming patterns).",
        "Delivered multilingual experiences with React i18n and reusable UI modules.",
        "Crafted rich motion and layout systems using CSS animations, transitions, and responsive patterns.",
      ],
    },
    {
      company: "Tech Mahindra",
      role: "Software Engineer",
      location: "India (client-facing)",
      client: "AT&T",
      logoSrc: "/logos/techmahindra.svg",
      start: "2015",
      end: "2018",
      highlights: [
        "Developed enterprise admin dashboards with React, Redux, JavaScript, HTML5, CSS3, Bootstrap, and Material UI.",
        "Established reusable components and scalable UI structure to speed delivery and reduce regressions.",
        "Applied modular CSS architecture (BEM, 7-1 patterns) for predictable styling at scale.",
        "Collaborated with UX, backend, and stakeholders on Agile delivery, debugging, testing, production support, and cross-browser quality.",
      ],
    },
  ] satisfies ExperienceItem[],
  skillGroups: [
    {
      title: "Frontend & platforms",
      items: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Angular",
        "Redux",
        "HTML5",
        "CSS3 / SCSS",
        "Bootstrap",
        "Material UI",
        "Responsive UI",
        "WCAG-minded accessibility",
        "SPA architecture",
        "Design systems & component libraries",
        "Micro-frontend concepts",
        "SharePoint SPFx",
      ],
    },
    {
      title: "Performance & quality",
      items: [
        "Core Web Vitals",
        "Lighthouse optimization",
        "Lazy loading & code splitting",
        "Bundle & rendering optimization",
        "Cross-browser compatibility",
        "Jest",
        "Code review leadership",
        "Production support",
      ],
    },
    {
      title: "AI-assisted engineering",
      items: [
        "GitHub Copilot",
        "Cursor AI",
        "ChatGPT for development",
        "AI-assisted debugging",
        "Prompt engineering for engineering tasks",
        "Workflow automation & productivity patterns",
      ],
    },
    {
      title: "Backend, tooling & delivery",
      items: [
        "Node.js",
        "Express.js",
        "NestJS (exposure)",
        "MongoDB",
        "REST integration",
        "Webpack / Vite",
        "Monorepo concepts",
        "CI/CD & Jenkins",
        "Git / GitHub",
        "Agile / Scrum",
      ],
    },
  ] satisfies SkillGroup[],
  /** Case-study style highlights — problem → outcome, signals recruiters scan for. */
  impactHighlights: [
    {
      title: "Fortune 500 UI platform at scale",
      company: "Nagarro",
      client: "McKinsey & Company",
      problem:
        "Enterprise programs needed consistent, accessible UI across many teams and releases—without slowing product velocity.",
      outcome:
        "Led React/TypeScript architecture and reusable systems so squads shipped faster with fewer regressions; WCAG-minded patterns and performance budgets baked into the delivery rhythm.",
      signals: ["React · TypeScript", "Design systems", "WCAG / a11y", "Core Web Vitals"],
    },
    {
      title: "Micro-frontends & migration under real constraints",
      company: "Nagarro",
      client: "Verizon",
      problem:
        "Large legacy surface and mixed stacks made coordinated releases risky; teams needed a path to modern React without a big-bang rewrite.",
      outcome:
        "Defined atomic, micro-frontend-friendly structure and led Vue → React migration work so teams could evolve safely while still shipping to production.",
      signals: ["Micro-frontends", "Vue → React", "Release risk", "Team enablement"],
    },
    {
      title: "SharePoint & Microsoft 365 at enterprise depth",
      company: "Mindtree",
      client: "Marriott International",
      problem:
        "Stakeholders needed reliable intranet and collaboration experiences on SharePoint Online with governance and long-term maintainability.",
      outcome:
        "Delivered SPFx solutions, REST integrations, and Power Platform–aware workflows; supported production with clear ownership and iteration.",
      signals: ["SPFx", "SharePoint Online", "REST APIs", "Production support"],
    },
  ] satisfies ImpactHighlight[],
  /** Quantified outcomes (from public resume / experience — same story as Experience). */
  proofOutcomes: [
    {
      metric: "~30%",
      label: "Page load improvement on targeted ecommerce initiatives after perf work (lazy loading, images, bundles).",
      where: "Verizon · Publicis Sapient",
    },
    {
      metric: "~40%",
      label: "Responsiveness improvement on measured smart-TV / hospitality flows after rendering and animation tuning.",
      where: "Marriott · Publicis Sapient",
    },
    {
      metric: "~95%",
      label: "Reduction in manual configuration effort for supported workflows via Node.js automation.",
      where: "Verizon · Publicis Sapient",
    },
    {
      metric: "5",
      label: "Frontend engineers led as squad anchor across roadmap, quality, and stakeholder alignment.",
      where: "Enterprise programs · Verizon era",
    },
  ] satisfies ProofOutcome[],
  /** How this site is tuned — honest, no fake Lighthouse scores. */
  performanceNote: {
    intro:
      "This portfolio is intentionally lightweight: static-friendly App Router pages, `next/font` subsetting, and motion gated by `prefers-reduced-motion` where it matters.",
    howMeasured:
      "I validate with Lighthouse and the Performance panel in Chrome DevTools on production builds—not a one-off marketing screenshot. Targets: stable LCP, low CLS, and no unnecessary main-thread work for first paint.",
    bullets: [
      "Static generation for primary routes; client islands only where interaction needs them.",
      "Semantic landmarks, skip link, and keyboard-first patterns (⌘K palette) without blocking initial render.",
      "JSON-LD, sitemap, and robots for discovery—same hygiene I apply to customer-facing properties.",
    ],
  } satisfies PerformanceNote,
  dailyTools: [
    {
      name: "GitHub Copilot",
      oneLiner:
        "Inline suggestions for tests, refactors, and boilerplate—speeds delivery when paired with strict review and ownership.",
    },
    {
      name: "Cursor",
      oneLiner:
        "Repo-wide reasoning and edits for migrations and debugging; I treat it as an accelerator, not a substitute for architecture judgment.",
    },
    {
      name: "ChatGPT",
      oneLiner:
        "Drafting edge-case checklists, API exploration, and doc synthesis—then I verify in code and against production constraints.",
    },
  ] satisfies DailyTool[],
  contactCta: {
    emailSubject: "[Your role title] — Hiring: Kumar Ankur",
    emailBody:
      "Hi Kumar,\n\nI'm reaching out about a [ROLE] opportunity and would like to connect.\n\nBest,",
    primaryButtonLabel: "Email about a role",
  } satisfies ContactCta,
  writing: [
    {
      title: "Integrate custom zoom in and zoom out in React Native Maps",
      subtitle:
        "Practical notes on react-native-maps when you need custom zoom behavior beyond the stock examples.",
      url: "https://medium.com/@akakankur81/integrate-custom-zoom-in-and-zoom-out-feature-in-react-native-maps-31867e0a546d",
      tags: ["React Native", "Maps", "Mobile"],
      readingMinutes: 5,
    },
    {
      title: "Phone authentication in React using Firebase and Firebase UI",
      subtitle: "Step-by-step phone auth with Firebase UI—passwordless flows and solid UX defaults.",
      url: "https://medium.com/@akakankur81/phone-authentication-in-react-js-application-using-firebase-and-firebase-ui-146fd1a975d3",
      tags: ["React", "Firebase", "Auth"],
      readingMinutes: 3,
    },
    {
      title: "Handwritten text animation using Adobe Illustrator",
      subtitle: "From Illustrator paths to SVG + CSS animation—motion that reads well on the web.",
      url: "https://medium.com/@akakankur81/create-handwritten-text-animation-using-adobe-illustrator-ccdea7691d8d",
      tags: ["Animation", "SVG", "UI craft"],
      readingMinutes: 3,
    },
  ] satisfies WritingItem[],
  featuredProject: {
    name: "Aashvi Automotive",
    url: "https://www.aashviautomotive.in/",
    tagline: "Production marketing site for a multibrand two-wheeler workshop—real customers, real constraints.",
    description:
      "End-to-end site I designed and shipped for my own workshop: clear service positioning, fast mobile browsing, and trust signals for local search. This is the kind of work I enjoy—tight scope, honest UX, and iterative improvements grounded in how the business actually runs.",
    highlights: [
      "Complete services + credibility narrative with straightforward contact paths tuned for mobile-first discovery.",
      "Typography, spacing, and navigation tuned for quick decisions on small screens.",
      "Ongoing iteration based on real customer questions and shop operations—not a throwaway template.",
    ],
    stack: ["Responsive UI", "Mobile-first UX", "Performance-aware delivery", "SEO-friendly structure"],
  },
  /** Append { quote, author, context } for more verbatim LinkedIn recommendations. */
  recommendations: [
    {
      quote:
        "Ankur is by far one of the best JavaScript developers I’ve had the pleasure of working with. He has a unique approach of starting from the fundamentals and diligently working his way to the root of any problem when debugging. This methodical approach ensures that no issue goes unresolved. Beyond his technical skills, Ankur creates an exceptionally amicable and collaborative team environment. He is approachable, always willing to lend a hand, and makes sure everyone feels supported. Additionally, his passion for exploring new ideas and finding innovative ways to enhance functionality is evident in his work and in the projects he undertakes. I would give my highest recommendation to Ankur.",
      author: "Vaibhav Gera",
      context: "Colleague recommendation (LinkedIn)",
    },
    {
      quote:
        "I have had the privilege of working under Ankur and have been consistently impressed by his technical expertise, leadership skills, and dedication towards delivering top-notch quality coding solutions. He is very supportive and collaborative that brings out the best in the team. I highly recommend Ankur for any leadership position in the software development industry.",
      author: "Manav Gupta",
      context: "Colleague recommendation (LinkedIn)",
    },
  ] satisfies Recommendation[],
  /**
   * Public LinkedIn profile lists two full written recommendations above.
   * These five cards summarise recurring colleague-facing themes from the same public profile
   * (skills, experience, and about) — not fabricated quotes.
   */
  linkedInPeerThemes: [
    {
      title: "Team leadership & mentoring",
      detail:
        "Leading frontend engineers, code reviews, and knowledge-sharing — consistent themes across my public experience and skills on LinkedIn.",
    },
    {
      title: "React & modern JavaScript",
      detail:
        "Deep work in React, Redux, and the broader JS ecosystem for customer-facing products; reflected in roles from Nagarro through earlier teams.",
    },
    {
      title: "Micro-frontend & modular UI",
      detail:
        "Vue-to-React migration and atomic, micro-frontend-friendly component structure called out explicitly in my current role description.",
    },
    {
      title: "Sprint delivery & client demos",
      detail:
        "Scrum participation, requirement clarification with clients, and sprint demos are recurring responsibilities in my public profile narrative.",
    },
    {
      title: "Production support & quality",
      detail:
        "Production support, A/B testing, and continuous improvement appear alongside performance and security-minded delivery in my LinkedIn story.",
    },
  ] satisfies LinkedInPeerTheme[],
  /** How this portfolio demonstrates product-grade frontend — edit as the stack evolves. */
  siteCraft: {
    intro:
      "The same UX and accessibility patterns shipping teams use—implemented here so the site is a live sample of how I build.",
    paletteHint: "Press ⌘K or Ctrl+K for quick navigation and actions—the command palette pattern used in Linear, Vercel, and Slack.",
    /** Human-readable; bump when you ship meaningful site changes. */
    lastUpdatedNote: "May 2026",
    signals: [
      {
        title: "Reading progress",
        detail:
          "A slim page-progress bar at the top reflects how far you’ve scrolled—common in long-form product and docs sites.",
      },
      {
        title: "Command palette (⌘K / Ctrl+K)",
        detail:
          "Keyboard-first navigation, fuzzy filtering, focus trap, and Escape to dismiss—mirrors internal tools in modern product orgs.",
      },
      {
        title: "Accessibility & motion",
        detail:
          "Skip link, focus-visible rings, inert on the splash dialog, live regions where needed, and prefers-reduced-motion respected for parallax, scroll reveals, and Framer Motion.",
      },
      {
        title: "Scroll & layout craft",
        detail:
          "Parallax atmosphere, spring-based section reveals, and a zig-zag experience timeline—intentional motion without blocking content.",
      },
      {
        title: "Discovery & performance posture",
        detail:
          "Semantic structure, JSON-LD Person schema, sitemap/robots, and static-friendly Next.js App Router delivery.",
      },
    ] satisfies SiteCraftSignal[],
  },
};
