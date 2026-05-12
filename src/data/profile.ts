export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  client?: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Recommendation = {
  quote: string;
  author: string;
  context: string;
};

export type WritingItem = {
  title: string;
  subtitle: string;
  url: string;
  tags: string[];
  readingMinutes: number;
};

export const profile = {
  name: "Kumar Ankur",
  /** Primary line under name in hero */
  role: "Senior Frontend Engineer · Frontend Architect",
  /** Sub-line for credibility scanning */
  roleAccent: "AI-enabled UI engineering · 10+ years in production",
  location: "Bangalore, India",
  headline:
    "I architect scalable enterprise web platforms—React/TypeScript systems, reusable component ecosystems, accessibility and performance at scale—while leading teams and shipping for Fortune 500 environments.",
  expertiseChips: [
    "10+ years shipping enterprise customer UIs",
    "Fortune 500 delivery: McKinsey, Verizon, Marriott, AT&T",
    "AI-assisted engineering: Copilot, Cursor, ChatGPT in daily workflow",
    "Leadership: interviews, mentoring, architecture & code quality",
  ],
  heroCallouts: {
    focus: "Enterprise platforms · Fortune 500 programs",
    proof: "10+ years in production frontend systems",
  },
  summary: [
    "Senior frontend engineer with 10+ years architecting high-performance, enterprise-grade web applications and frontend platforms using React, TypeScript, JavaScript, Angular, Redux, and modern delivery practices. I specialize in frontend architecture, reusable component systems, WCAG-minded accessibility, Core Web Vitals and Lighthouse-driven performance, enterprise UI platforms, SharePoint SPFx, and AI-assisted software development.",
    "I have repeatedly delivered at scale for global organizations—McKinsey & Company (current), Verizon, Marriott, and AT&T—across ecommerce, telecom, hospitality, and collaboration domains. I am comfortable owning architecture discussions, raising the quality bar through reviews, and mentoring engineers while partnering with product, UX, and backend teams.",
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
      company: "Publicis Sapient",
      role: "Senior Software Engineer",
      location: "India (client-facing)",
      client: "Verizon",
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
};
