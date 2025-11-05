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
    role: "Sr. Front End Engineer & DevOps",
    company: "Mannar.sa",
    companyLink: "https://mannar.sa/",
    period: "Sep 2025 - Present",
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
      "Data-driven company using AI and data analysis to provide key insights about company departments",
      "Built Slack bot interface to assess client's use cases and deliver high-end front-end solutions",
      "Worked with ML team to provide high-integrity results and built debugging tools for data integrity",
      "Developed various functionalities using Azure functions and worked with Cognito search and Elasticsearch for big data solutions",
      "Built data ingestion services to stream data from various integration tools",
      "Promoted to team lead after 6 months due to adaptability and performance in the fast-growing team",
    ],
    technologies:
      "TypeScript, Node.js, React.js, Azure Cloud Services, CosmosDB, MongoDB, Elasticsearch, Cognito Search",
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
export const volunteerExperience: VolunteerExperience[] = [
  {
    id: "v1",
    role: "Quality Assurance & Mentor",
    organization: "Gaza Sky Geeks / Mercy Corps",
    organizationLink: "https://gazaskygeeks.com/",
    period: "Jun 2018 - Oct 2018",
    location: "Gaza, Palestine",
    description:
      "A program of Mercy Corps, a leading global humanitarian agency working on some of the world's toughest challenges.",
    achievements: [
      "Mentored new graduates for the GSG code academy",
      "Conducted quality assurance and code reviews for newly trained developers",
      "Helped onboard junior developers into the tech ecosystem",
      "Provided guidance on best practices and industry standards",
    ],
  },
];

// Selected Projects Data
export const selectedProjects: Project[] = [
  {
    id: "sp1",
    name: "Treasure Hunt",
    role: "Lead Developer",
    description:
      "Interactive web application with real-time multiplayer functionality and complex game mechanics",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    date: "2023",
    details:
      "Real-time multiplayer game supporting 1000+ concurrent users with WebSocket architecture",
  },
  {
    id: "sp2",
    name: "Quick",
    role: "Full-Stack Developer",
    description:
      "High-performance web application focused on speed and user experience optimization",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    date: "2022",
    details:
      "Lightning-fast application with 95+ Lighthouse score and sub-second load times",
  },
  {
    id: "sp3",
    name: "Manar",
    role: "Technical Lead",
    description:
      "Educational platform with advanced content management and user engagement features",
    technologies: ["React", "Express.js", "MongoDB", "AWS"],
    date: "2021",
    details:
      "Educational platform serving 10K+ students with interactive learning modules",
  },
  {
    id: "sp4",
    name: "Zaki",
    role: "Senior Developer",
    description:
      "E-commerce solution with integrated payment systems and inventory management",
    technologies: ["React", "Node.js", "Stripe", "Redis"],
    date: "2020",
    details:
      "Complete e-commerce solution processing $100K+ monthly transactions",
  },
];

// Skills Categories Data - Updated to match your existing website technologies
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "Code",
    description: "Creating stunning user interfaces and experiences",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux",
      "Remix.js",
      "HTML5",
      "CSS3",
      "SASS",
      "Responsive Design",
      "SEO Optimization",
    ],
  },
  {
    category: "Backend & APIs",
    icon: "Database",
    description: "Building robust server-side solutions",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "GraphQL",
      "JWT",
      "Socket.io",
      "Microservices",
      "API Design",
      "Notification Systems",
      "Firebase",
    ],
  },
  {
    category: "Databases & Big Data",
    icon: "Database",
    description: "Data storage and processing solutions",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "CosmosDB",
      "Supabase",
      "Firebase",
      "Elasticsearch",
      "Kafka",
      "Data Ingestion",
      "Big Data Processing",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    description: "Scalable infrastructure and deployment",
    skills: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Jenkins",
      "Infrastructure Management",
      "Platform Scaling",
      "Monitoring & Logging",
      "Security & Compliance",
      "Vercel",
      "Netlify",
    ],
  },
  {
    category: "Tools & Testing",
    icon: "Wrench",
    description: "Development tools and quality assurance",
    skills: [
      "Git",
      "VS Code",
      "Jest",
      "Unit Testing",
      "Integration Testing",
      "Code Reviews",
      "Figma",
      "Adobe XD",
      "InVision",
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
  // {
  //   id: "featured-work",
  //   label: "Featured Work",
  //   icon: "FolderOpen",
  //   path: "/featured-work",
  // },
  {
    id: "what-i-can-do",
    label: "What I Can Do",
    icon: "Sparkles",
    path: "/what-i-can-do",
  },
];
