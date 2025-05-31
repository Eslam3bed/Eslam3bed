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

// Work Experience Data
export const workExperience: WorkExperience[] = [
  {
    id: "1",
    role: "Senior Full-Stack Engineer & Team Lead",
    company: "Revic.ai",
    period: "2023 - Present",
    location: "Remote",
    highlights: [
      "Promoted to Team Lead within 6 months for driving technical excellence",
      "Built Slack bot interface and high-integrity debugging tools for data accuracy",
      "Collaborated with ML team to deliver precise AI-driven insights",
      "Developed scalable data ingestion services using Azure Functions and Elasticsearch",
    ],
    technologies: "TypeScript, React, Node.js, Azure, Elasticsearch, Cognito",
    projects: [
      {
        id: "p1",
        name: "AI Data Pipeline",
        role: "Tech Lead",
        description: "Scalable data ingestion system with ML integration",
        technologies: ["Azure Functions", "Elasticsearch", "TypeScript"],
        details:
          "Built a robust data pipeline processing 10M+ records daily with 99.9% accuracy",
      },
    ],
  },
  {
    id: "2",
    role: "Senior Front-End Developer",
    company: "WeArt.io",
    period: "2022 - 2023",
    location: "Remote",
    highlights: [
      "Revamped real estate project implementing refactoring plan to reduce technical debt",
      "Enhanced product performance and developed responsive UI components",
      "Worked with Next.js, GraphQL, and AWS to deliver quality solutions",
    ],
    technologies: "Next.js, GraphQL, AWS, React, TypeScript",
    projects: [
      {
        id: "p2",
        name: "Real Estate Platform",
        role: "Senior Developer",
        description: "Complete platform overhaul with modern architecture",
        technologies: ["Next.js", "GraphQL", "AWS"],
        details:
          "Reduced load times by 60% and improved user engagement by 40%",
      },
    ],
  },
  {
    id: "3",
    role: "Team Lead and CTO",
    company: "LeadCart.io",
    period: "2020 - 2022",
    location: "Remote",
    highlights: [
      "Designed and implemented custom component library for the product",
      "Delivered robust affiliate system within one month, from ideation to production",
      "Achieved 99.9% uptime by automating DevOps processes with GitHub Actions",
      "Grew the team, conducted interviews, and mentored junior developers",
    ],
    technologies: "React, Node.js, MongoDB, GitHub Actions",
    projects: [
      {
        id: "p3",
        name: "LeadCart Platform",
        role: "CTO & Tech Lead",
        description: "Complete e-commerce solution with affiliate system",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://leadcart.io",
        details: "Built from scratch serving 50K+ users with 99.9% uptime",
      },
    ],
  },
  {
    id: "4",
    role: "Full-Stack Engineer",
    company: "Zaino",
    period: "2019 - 2020",
    location: "Remote",
    highlights: [
      "Built mobile-friendly web app and Google Ads integration for campaign management",
      "Designed customer support dashboard with real-time capabilities using Socket.io",
      "Developed APIs and admin tools for audience segmentation and notification management",
    ],
    technologies: "React, Node.js, Socket.io, MongoDB",
    projects: [
      {
        id: "p4",
        name: "Campaign Manager",
        role: "Full-Stack Developer",
        description:
          "Real-time campaign management with Google Ads integration",
        technologies: ["React", "Socket.io", "Node.js"],
        details: "Real-time dashboard processing 1M+ events daily",
      },
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

// Skills Categories Data
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "Code",
    description: "Creating stunning user interfaces",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Remix.js",
      "HTML5",
      "CSS3",
      "SASS",
    ],
  },
  {
    category: "Backend & APIs",
    icon: "Database",
    description: "Building robust server-side solutions",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "JWT",
      "Socket.io",
      "GraphQL",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    description: "Scalable infrastructure and deployment",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Vercel",
      "Netlify",
      "Firebase",
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "Wrench",
    description: "Development and design tools",
    skills: [
      "Git",
      "Jest",
      "Figma",
      "Adobe XD",
      "VS Code",
      "Elasticsearch",
      "Kafka",
      "CosmosDB",
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
