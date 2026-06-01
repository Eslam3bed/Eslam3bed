import quiqScreenshot from "@/assets/screenshots/quiq.png";
import puefScreenshot from "@/assets/screenshots/puef.png";
import govalidateScreenshot from "@/assets/screenshots/govalidate.png";
import antiqlensScreenshot from "@/assets/screenshots/antiqlens.png";
import vengineScreenshot from "@/assets/screenshots/vengine.png";

// Types
export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  technologies: string[];
  link?: string;
  date?: string;
  details?: string;
  screenshot?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyLink?: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string;
  projects: Project[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface VolunteerExperience {
  id: string;
  role: string;
  organization: string;
  organizationLink?: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

// Work Experience Data
export const workExperience: WorkExperience[] = [
  {
    id: "0",
    role: "Sr. Front End Engineer & DevOps (Part-Time)",
    company: "Mannar.sa",
    companyLink: "https://mannar.sa/",
    period: "Sep 2025 - Present · Part-Time",
    location: "KSA (Remote)",
    highlights: [
      "Saudi Arabia's first online legal consultation platform, delivering digital access to legal services with a secure, scalable architecture",
      "Maintained UI/UX and built the frontend architecture",
      "Ensured platform security, compliance, and performance",
      "Managed infrastructure, monitoring, and DevOps operations",
      "Built and optimized CI/CD pipelines to improve deployment speed",
      "Scaled the platform from pilot to thousands of active users",
      "Designed and developed the notification system",
      "Implemented SEO scripts and post-build meta tag injection for better search visibility",
    ],
    technologies:
      "TypeScript, Node.js, React.js, AWS Services, Supabase, Firebase, MongoDB, CI/CD Pipeline",
    projects: [],
  },
  {
    id: "1",
    role: "Sr. Full Stack Engineer & Team Lead",
    company: "revic.ai",
    companyLink: "https://revic.ai",
    period: "Dec 2022 - Sep 2025",
    location: "USA (Remote)",
    highlights: [
      "Data-driven AI analytics platform surfacing insights about company departments from heterogeneous integrations",
      "Built data ingestion services that stream from a variety of integration tools into Elasticsearch and CosmosDB, with Cognito Search for big-data retrieval",
      "Designed and shipped debugging tools that helped the team identify and resolve data-integrity issues across the pipeline",
      "Partnered with the ML team to surface high-integrity model outputs and feedback loops into the product",
      "Authored Azure Functions services that handled ingestion, enrichment, and downstream notifications at scale",
      "Built the Slack bot that served as the primary interface for clients to explore use cases and act on insights",
      "Promoted to team lead within 6 months for adaptability and ownership in a fast-growing team",
    ],
    technologies:
      "TypeScript, Python, Node.js, React.js, Azure Functions, CosmosDB, MongoDB, Elasticsearch, Cognito Search, Slack APIs",
    projects: [
      {
        id: "p1",
        name: "AI Data Analytics Platform",
        role: "Tech Lead",
        description:
          "Comprehensive data analytics platform with AI insights and Slack integration",
        technologies: ["TypeScript", "Azure Functions", "React", "CosmosDB"],
        details:
          "Built scalable data pipeline processing millions of records with AI-driven insights",
      },
    ],
  },
  {
    id: "2",
    role: "Sr. Front End Developer",
    company: "WeArt.io",
    companyLink: "https://weart.io/about.html",
    period: "Feb 2022 - Dec 2022",
    location: "Berlin, Germany (Remote)",
    highlights: [
      "Development Agency focused on making quality products",
      "Recovered a real estate project by implementing a refactoring plan to reduce technical debt",
      "Reduced maintenance costs and time needed to introduce new functionalities",
      "Built & developed different features & responsive UI components",
      "Improved product performance and user experience",
    ],
    technologies:
      "TypeScript, Node.js, Next.js, AWS Fargate, Jenkins, Docker, MySQL, GraphQL",
    projects: [
      {
        id: "p2",
        name: "Real Estate Platform Overhaul",
        role: "Senior Developer",
        description:
          "Complete refactoring and modernization of real estate platform",
        technologies: ["Next.js", "GraphQL", "AWS", "Docker"],
        details:
          "Successfully reduced technical debt and improved performance by 60%",
      },
    ],
  },
  {
    id: "3",
    role: "Full Stack Web Developer & Team Lead → CTO",
    company: "LeadCart.io",
    companyLink:
      "https://web.archive.org/web/20211129084118/https://leadcart.io/",
    period: "Aug 2018 - Jan 2021",
    location: "Delaware, USA (Remote)",
    highlights: [
      "Cart Solution Startup focused on boosting conversions for customer sales using targeted funnels",
      "Built custom components design system with React.js to fulfill product design & functional requirements",
      "Created utility packages for reusable functionalities across product services",
      "Handled DevOps using automation tools like GitHub Actions, achieved 99.9% uptime across product lifespan",
      "Promoted to Team Lead within one year, then CTO the following year due to commitment and technical expertise",
      "Managed technical support and served as interface for product community on Facebook & LeadCart knowledge base",
      "Led hiring and team growth to 5+ members, conducted assessments and interviews, onboarded new team members",
      "Built standalone affiliate system to track promoter commissions - expanded from idea to production in one month",
      "Developed service to track customer activities, purchases, cart events, and lead capturing",
      "Designed and developed payment integration facade for multiple third-party payment gateways",
    ],
    technologies:
      "Node.js, React.js, AWS, GitHub Actions, Netlify, Next.js, TypeScript, MongoDB, PostgreSQL",
    projects: [
      {
        id: "p3",
        name: "LeadCart E-commerce Platform",
        role: "CTO & Tech Lead",
        description:
          "Complete e-commerce solution with affiliate system and payment integrations",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        link: "https://web.archive.org/web/20211129084118/https://leadcart.io/",
        details:
          "Built comprehensive platform serving 50K+ users with 99.9% uptime and multiple payment gateways",
      },
      {
        id: "p3b",
        name: "Affiliate Tracking System",
        role: "Lead Developer",
        description:
          "Standalone affiliate system for tracking promoter commissions",
        technologies: ["Node.js", "React", "MongoDB"],
        details:
          "Delivered complete affiliate system from concept to production in just one month",
      },
    ],
  },
  {
    id: "4",
    role: "FullStack Engineer & Team Lead",
    company: "Zaino",
    companyLink: "https://zaino.app/",
    period: "May 2016 - Sep 2019",
    location: "Nazareth, Palestine",
    highlights: [
      "Platform to enhance Google AdWords customer experience with templates and optimizations",
      "Designed & built mobile-friendly web app for Zaino clients to manage campaigns and design/launch banners",
      "Built API and Google Ads integration services for creating, updating, and querying campaign reports",
      "Developed admin console to control app preferences, manage ad fees, create audience segments, and manage notifications",
      "Built customer support dashboard with Socket.io for better customer communication",
    ],
    technologies:
      "Node.js, React.js, AWS, PostgreSQL, Google Ads API, Socket.io",
    projects: [
      {
        id: "p4",
        name: "AdWords Campaign Manager",
        role: "Full-Stack Developer",
        description:
          "Comprehensive Google Ads campaign management platform with real-time support",
        technologies: ["React", "Socket.io", "Node.js", "Google Ads API"],
        link: "https://zaino.app/",
        details:
          "Complete platform for Google Ads management with real-time customer support and analytics",
      },
    ],
  },
  {
    id: "5",
    role: "Front End Web Developer",
    company: "Freelancer",
    companyLink: "https://www.upwork.com/freelancers/eslam3bed",
    period: "May 2016 - Oct 2018",
    location: "Remote",
    highlights: [
      "Worked on different types of applications including web applications and Chrome extensions",
      "Built 'Tawasol' web application for a local IT company using native front-end technologies",
      "Developed Dropshipping consultant Chrome extension for e-commerce optimization",
      "Created lead magnet kit for local client to boost marketing conversions",
    ],
    technologies:
      "JavaScript, HTML5, CSS3, Chrome Extensions API, Native Web Technologies",
    projects: [
      {
        id: "p5",
        name: "Tawasol Web Application",
        role: "Front-End Developer",
        description: "Custom web application for local IT company",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        details:
          "Built comprehensive web application using native front-end technologies",
      },
      {
        id: "p5b",
        name: "Dropshipping Chrome Extension",
        role: "Developer",
        description:
          "Chrome extension for dropshipping consultation and optimization",
        technologies: ["JavaScript", "Chrome API"],
        details:
          "Developed browser extension to help users optimize their dropshipping businesses",
      },
    ],
  },
];

// Volunteer Experience Data
export const volunteerExperience: VolunteerExperience[] = [];

// Selected Projects Data
export const selectedProjects: Project[] = [
  {
    id: "sp-govalidate",
    name: "GoValidate",
    role: "Solo Builder · Full-Stack + LLM Orchestration",
    description:
      "AI-native startup validation platform that turns a rough idea into an evidence-backed verdict on demand, competition, risk, and next steps",
    technologies: [
      "Next.js 15",
      "NestJS",
      "TypeScript",
      "BullMQ",
      "MongoDB",
      "Qdrant",
      "OpenAI",
      "Anthropic",
      "LangChain",
      "Docker",
    ],
    date: "2025 – Present",
    link: "https://govalidate.dev",
    screenshot: govalidateScreenshot,
    details:
      "Designed and shipped the platform end-to-end: BullMQ-orchestrated multi-agent pipeline that mines Reddit signals, generates and scores ideas with multi-provider LLMs (OpenAI + Anthropic via LangChain), persists per-job artifacts, and runs hybrid vector + keyword search over Qdrant embeddings. Owns infra (Docker Compose, Caddy), source-credibility scoring, and the Next.js admin/console.",
  },
  {
    id: "sp-vengine",
    name: "VEngine",
    role: "Solo Builder · Data Pipelines + AI",
    description:
      "Video knowledge engine — a 4-phase pipeline (ingestion, processing, dendrogram, search index) that transcribes, summarizes, embeds and clusters video into a searchable, clip-level knowledge graph",
    technologies: [
      "NestJS",
      "BullMQ",
      "MongoDB",
      "Redis",
      "Deepgram",
      "Google STT",
      "Gemini",
      "OpenAI",
      "UMAP",
      "GCS",
      "Cloud Run",
    ],
    date: "2026",
    screenshot: vengineScreenshot,
    details:
      "BullMQ pipeline: FFmpeg audio extraction → chunking → parallel Deepgram/Google STT → assembly → Gemini/GPT-4o summarization → topic + section extraction → sliding-window embeddings → knowledge-graph build → UMAP + agglomerative dendrogram for hierarchical retrieval. Swappable providers across STT, LLM and embeddings; SSE progress streaming and per-user graphs. Deployed to Google Cloud Run.",
  },
  {
    id: "sp-quiq",
    name: "QuiQ",
    role: "Lead Full-Stack Engineer · DevOps",
    description:
      "Internal review, auditing and quality-control platform for SAT content — feedback, activity tracking, role management and migration tooling",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Auth0",
      "Zod",
      "Netlify",
    ],
    date: "Jan 2025 – Present",
    link: "https://quiq.netlify.app/",
    screenshot: quiqScreenshot,
    details:
      "Owned QuiQ end-to-end: migrated the backend from Netlify Functions to a long-lived Express API for predictable load distribution, built feedback + activity-tracking, role-based access control (super-admin/admin/user), an invitation flow, and the migration tooling that fed content into Puef. Handled the DevOps side (CI, environments, monitoring) and led the engineering work across the staging and production environments.",
  },
  {
    id: "sp-puef",
    name: "Puef.ai",
    role: "Contributor · LLM Endpoints + Frontend",
    description:
      "AI-driven SAT learning platform that adapts planning, review scheduling and content to each learner",
    technologies: [
      "Python",
      "Flask",
      "LangChain",
      "OpenAI",
      "Anthropic",
      "Gemini",
      "Deepseek",
      "MongoDB",
      "React",
      "TypeScript",
    ],
    date: "Jan 2025 – Present",
    link: "https://puef.ai",
    screenshot: puefScreenshot,
    details:
      "Recent work focused on hardening the LLM endpoints — generation endpoints and the 'fixer' flows that detect and repair invalid or unclear model outputs. Contributed across the multi-provider LangChain layer (OpenAI / Anthropic / Gemini / Deepseek) and the React frontend, plus integration with the QuiQ review pipeline.",
  },
  {
    id: "sp-story-teller",
    name: "Story-Teller",
    role: "Solo Builder · LLM Orchestration",
    description:
      "Turns a written story into a narrated video — scene breakdown, image generation, voice and music — through a single multi-agent flow",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "Vite",
      "TypeScript",
      "OpenAI",
      "DALL-E 3",
      "ElevenLabs",
      "MongoDB",
      "Docker",
    ],
    date: "2025",
    details:
      "Orchestrates GPT-4o for refinement and scene breakdown, DALL-E 3 for per-scene imagery, and ElevenLabs for narration, composing the assets into a final video. Containerized end-to-end with a TypeScript frontend and an Express + MongoDB backend.",
  },
  {
    id: "sp-shorts-gen",
    name: "Shorts-Gen",
    role: "Solo Builder · Video AI",
    description:
      "AI-assisted pipeline that turns long-form video into stylized 30-second shorts for social channels",
    technologies: ["Python", "FFmpeg", "OpenAI", "Style Transfer", "CLI"],
    date: "2025",
    details:
      "ChatGPT identifies the most interesting segments, FFmpeg clips and re-encodes them, and a style-transfer pass applies a chosen cartoon look. CLI-first, GPU-aware, optimized for TikTok/Reels/Shorts aspect ratios.",
  },
  {
    id: "sp-denture",
    name: "Denture Mesh + Content Engine",
    role: "Contributor · Mesh Processing + LLM",
    description:
      "Toolkit for dental mesh capture, annotation and AI-generated educational content for practitioners and patients",
    technologies: ["Python", "Open3D", "NumPy", "OpenAI", "LangChain"],
    date: "2025",
    details:
      "Mesh annotation pipeline over depth-camera captures (Open3D / NumPy), plus an LLM-backed content generation layer. Collaborated with a small team on the mesh tooling while owning the AI content side.",
  },
  {
    id: "sp-antiqlens",
    name: "Treasure Hunt (Antiqlens)",
    role: "Lead Developer",
    description:
      "Real-time multiplayer web game designed for 1,000+ concurrent users on a scalable WebSocket architecture",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebSocket"],
    date: "Sep 2023 – Jan 2024",
    link: "https://antiqlens.netlify.app",
    screenshot: antiqlensScreenshot,
    details:
      "Led system design, real-time communication and performance optimization for a multiplayer game supporting 1,000+ concurrent users.",
  },
  {
    id: "sp-imtiaz",
    name: "Imtiaz Farm",
    role: "Front-End Engineer",
    description:
      "High-volume campaign management platform handling hundreds of thousands of notifications across multiple channels",
    technologies: ["React", "TypeScript", "Next.js", "Node.js"],
    date: "Jan 2024 – Jul 2024",
    details:
      "Built and optimized dashboards and workflows for high-scale campaign creation and monitoring.",
  },
];

// Skills Categories Data - Updated to match your existing website technologies
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Code",
    description: "Interfaces for technical products",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux",
      "Remix.js",
      "Vite",
      "Responsive design",
      "SEO optimization",
    ],
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    description: "Services, APIs and real-time systems",
    skills: [
      "Node.js",
      "Python",
      "TypeScript",
      "NestJS",
      "Express.js",
      "Flask",
      "REST APIs",
      "GraphQL",
      "Socket.io",
      "JWT / OAuth",
      "Microservices",
      "Notification systems",
    ],
  },
  {
    category: "Cloud, DevOps & Infra",
    icon: "Cloud",
    description: "Shipping and operating production systems",
    skills: [
      "AWS",
      "Azure",
      "Google Cloud (Cloud Run, GCS)",
      "Docker",
      "Docker Compose",
      "CI/CD pipelines",
      "GitHub Actions",
      "Jenkins",
      "Railway",
      "Netlify",
      "Vercel",
      "Caddy",
      "Monitoring & logging",
      "Security & compliance",
    ],
  },
  {
    category: "AI / LLM Orchestration",
    icon: "Sparkles",
    description: "Building AI-native products end-to-end",
    skills: [
      "Multi-provider LLM (OpenAI, Anthropic, Gemini, Deepseek)",
      "LangChain",
      "Prompt engineering",
      "Retrieval-augmented generation (RAG)",
      "Vector search (Qdrant, Pinecone)",
      "Embeddings",
      "Agentic / multi-step pipelines",
      "BullMQ job orchestration",
      "Speech-to-text (Deepgram, Google STT)",
      "Image + voice generation (DALL-E, ElevenLabs)",
    ],
  },
  {
    category: "Data Engineering",
    icon: "Database",
    description: "Ingestion pipelines and storage",
    skills: [
      "Python (pandas, NumPy)",
      "Data ingestion pipelines",
      "BullMQ / queue-based orchestration",
      "Kafka",
      "Elasticsearch",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "CosmosDB",
      "Qdrant",
      "Cognito Search",
    ],
  },
  {
    category: "Tooling & Practices",
    icon: "Wrench",
    description: "How the work gets shipped",
    skills: [
      "Git",
      "Jest / Pytest",
      "Code reviews",
      "Unit + integration testing",
      "Internal tooling & dashboards",
      "Figma",
      "Technical mentoring",
    ],
  },
];

// Calculate years of experience dynamically from 2017
export const calculateExperience = (): number => {
  const startYear = 2017;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Navigation tabs configuration
export const navigationTabs = [
  { id: "about", label: "About Me", icon: "User", path: "/" },
  { id: "journey", label: "Journey", icon: "Briefcase", path: "/journey" },
  {
    id: "featured-work",
    label: "Featured Work",
    icon: "FolderOpen",
    path: "/featured-work",
  },
  {
    id: "what-i-can-do",
    label: "What I Can Do",
    icon: "Sparkles",
    path: "/what-i-can-do",
  },
];
