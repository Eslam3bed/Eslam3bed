import { useState, useEffect } from 'react'
import {
  Github, Linkedin, Mail, ExternalLink, Moon, Sun, User,
  Briefcase, FolderOpen, Wrench, Calendar, MapPin,
  ArrowRight, X, Globe, Star, Code, Database, Cloud,
  Sparkles, Zap, Layers
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Types
interface Project {
  id: string
  name: string
  role: string
  description: string
  technologies: string[]
  link?: string
  date?: string
  details?: string
}

interface WorkExperience {
  id: string
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
  technologies: string
  projects: Project[]
}

function App() {
  const [isDark, setIsDark] = useState(false)
  const [activeTab, setActiveTab] = useState('about')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Calculate years of experience dynamically from 2017
  const calculateExperience = () => {
    const startYear = 2017
    const currentYear = new Date().getFullYear()
    return currentYear - startYear
  }

  const yearsOfExperience = calculateExperience()

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDark(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const workExperience: WorkExperience[] = [
    {
      id: '1',
      role: "Senior Full-Stack Engineer & Team Lead",
      company: "Revic.ai",
      period: "2023 - Present",
      location: "Remote",
      highlights: [
        "Promoted to Team Lead within 6 months for driving technical excellence",
        "Built Slack bot interface and high-integrity debugging tools for data accuracy",
        "Collaborated with ML team to deliver precise AI-driven insights",
        "Developed scalable data ingestion services using Azure Functions and Elasticsearch"
      ],
      technologies: "TypeScript, React, Node.js, Azure, Elasticsearch, Cognito",
      projects: [
        {
          id: 'p1',
          name: 'AI Data Pipeline',
          role: 'Tech Lead',
          description: 'Scalable data ingestion system with ML integration',
          technologies: ['Azure Functions', 'Elasticsearch', 'TypeScript'],
          details: 'Built a robust data pipeline processing 10M+ records daily with 99.9% accuracy'
        }
      ]
    },
    {
      id: '2',
      role: "Senior Front-End Developer",
      company: "WeArt.io",
      period: "2022 - 2023",
      location: "Remote",
      highlights: [
        "Revamped real estate project implementing refactoring plan to reduce technical debt",
        "Enhanced product performance and developed responsive UI components",
        "Worked with Next.js, GraphQL, and AWS to deliver quality solutions"
      ],
      technologies: "Next.js, GraphQL, AWS, React, TypeScript",
      projects: [
        {
          id: 'p2',
          name: 'Real Estate Platform',
          role: 'Senior Developer',
          description: 'Complete platform overhaul with modern architecture',
          technologies: ['Next.js', 'GraphQL', 'AWS'],
          details: 'Reduced load times by 60% and improved user engagement by 40%'
        }
      ]
    },
    {
      id: '3',
      role: "Team Lead and CTO",
      company: "LeadCart.io",
      period: "2020 - 2022",
      location: "Remote",
      highlights: [
        "Designed and implemented custom component library for the product",
        "Delivered robust affiliate system within one month, from ideation to production",
        "Achieved 99.9% uptime by automating DevOps processes with GitHub Actions",
        "Grew the team, conducted interviews, and mentored junior developers"
      ],
      technologies: "React, Node.js, MongoDB, GitHub Actions",
      projects: [
        {
          id: 'p3',
          name: 'LeadCart Platform',
          role: 'CTO & Tech Lead',
          description: 'Complete e-commerce solution with affiliate system',
          technologies: ['React', 'Node.js', 'MongoDB'],
          link: 'https://leadcart.io',
          details: 'Built from scratch serving 50K+ users with 99.9% uptime'
        }
      ]
    },
    {
      id: '4',
      role: "Full-Stack Engineer",
      company: "Zaino",
      period: "2019 - 2020",
      location: "Remote",
      highlights: [
        "Built mobile-friendly web app and Google Ads integration for campaign management",
        "Designed customer support dashboard with real-time capabilities using Socket.io",
        "Developed APIs and admin tools for audience segmentation and notification management"
      ],
      technologies: "React, Node.js, Socket.io, MongoDB",
      projects: [
        {
          id: 'p4',
          name: 'Campaign Manager',
          role: 'Full-Stack Developer',
          description: 'Real-time campaign management with Google Ads integration',
          technologies: ['React', 'Socket.io', 'Node.js'],
          details: 'Real-time dashboard processing 1M+ events daily'
        }
      ]
    }
  ]

  const selectedProjects: Project[] = [
    {
      id: 'sp1',
      name: 'Treasure Hunt',
      role: 'Lead Developer',
      description: 'Interactive web application with real-time multiplayer functionality and complex game mechanics',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      date: '2023',
      details: 'Real-time multiplayer game supporting 1000+ concurrent users with WebSocket architecture'
    },
    {
      id: 'sp2',
      name: 'Quick',
      role: 'Full-Stack Developer',
      description: 'High-performance web application focused on speed and user experience optimization',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      date: '2022',
      details: 'Lightning-fast application with 95+ Lighthouse score and sub-second load times'
    },
    {
      id: 'sp3',
      name: 'Manar',
      role: 'Technical Lead',
      description: 'Educational platform with advanced content management and user engagement features',
      technologies: ['React', 'Express.js', 'MongoDB', 'AWS'],
      date: '2021',
      details: 'Educational platform serving 10K+ students with interactive learning modules'
    },
    {
      id: 'sp4',
      name: 'Zaki',
      role: 'Senior Developer',
      description: 'E-commerce solution with integrated payment systems and inventory management',
      technologies: ['React', 'Node.js', 'Stripe', 'Redis'],
      date: '2020',
      details: 'Complete e-commerce solution processing $100K+ monthly transactions'
    }
  ]

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Code className="h-5 w-5" />,
      description: "Creating stunning user interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Remix.js", "HTML5", "CSS3", "SASS"]
    },
    {
      category: "Backend & APIs",
      icon: <Database className="h-5 w-5" />,
      description: "Building robust server-side solutions",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "JWT", "Socket.io", "GraphQL"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      description: "Scalable infrastructure and deployment",
      skills: ["AWS", "Azure", "Docker", "GitHub Actions", "Jenkins", "Vercel", "Netlify", "Firebase"]
    },
    {
      category: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5" />,
      description: "Development and design tools",
      skills: ["Git", "Jest", "Figma", "Adobe XD", "VS Code", "Elasticsearch", "Kafka", "CosmosDB"]
    }
  ]

  const tabs = [
    { id: 'about', label: 'About Me', icon: <User className="h-4 w-4" /> },
    { id: 'experience', label: 'Journey', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'projects', label: 'Featured Work', icon: <FolderOpen className="h-4 w-4" /> },
    { id: 'skills', label: 'What I Can Do', icon: <Sparkles className="h-4 w-4" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 dark:from-background-dark dark:via-background-dark dark:to-muted-dark/30">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-border dark:border-border-dark">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Avatar and Name */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-foreground dark:from-primary-dark dark:to-foreground-dark p-0.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-secondary dark:from-muted-dark dark:to-secondary-dark flex items-center justify-center text-lg font-bold text-muted-foreground dark:text-muted-dark-foreground grayscale hover:grayscale-0 transition-all duration-300">
                    EA
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background dark:border-background-dark animate-pulse-slow"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground dark:from-foreground-dark dark:to-muted-dark-foreground bg-clip-text text-transparent">
                  Eslam Abed
                </h1>
                <p className="text-sm text-muted-foreground dark:text-muted-dark-foreground">Full-Stack Developer</p>
              </div>
            </div>

            {/* Social Links & Theme Toggle */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="icon" asChild className="group">
                  <a href="https://github.com/Eslam3bed" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <Github className="h-4 w-4 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="group">
                  <a href="https://www.linkedin.com/in/eslam3bed/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <Linkedin className="h-4 w-4 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="group">
                  <a href="mailto:e.eslam3bed@gmail.com" title="Email">
                    <Mail className="h-4 w-4 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors" />
                  </a>
                </Button>
              </div>
              <div className="w-px h-6 bg-border dark:bg-border-dark mx-2"></div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
                title="Toggle theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <nav className="mt-6">
            <div className="flex space-x-1 bg-muted/50 dark:bg-muted-dark/50 p-1 rounded-lg backdrop-blur-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                    ? 'bg-primary text-primary-foreground dark:bg-primary-dark dark:text-primary-dark-foreground shadow-md shadow-primary/25 dark:shadow-primary-dark/25'
                    : 'text-muted-foreground dark:text-muted-dark-foreground hover:text-foreground dark:hover:text-foreground-dark hover:bg-background/50 dark:hover:bg-background-dark/50'
                    }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-8">
        <div className="container mx-auto px-4">

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="animate-fade-in space-y-8">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground dark:from-foreground-dark dark:via-muted-dark-foreground dark:to-foreground-dark bg-clip-text text-transparent">
                    Hi, I'm Eslam Abed
                  </span>
                  <span className="wave inline-block animate-pulse-slow ml-2">👋</span>
                </h2>
                <div className="flex items-center justify-center space-x-2 text-accent-foreground dark:text-accent-dark-foreground font-semibold">
                  <Zap className="h-5 w-5" />
                  <span>{yearsOfExperience}+ Years of Excellence</span>
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              <Card className="max-w-4xl mx-auto border-border dark:border-border-dark shadow-xl shadow-primary/5 dark:shadow-primary-dark/5 bg-card dark:bg-card-dark">
                <CardContent className="p-8 space-y-6">
                  <div className="text-lg text-muted-foreground dark:text-muted-dark-foreground leading-relaxed space-y-4">
                    <p>
                      A passionate and accomplished <span className="text-foreground dark:text-foreground-dark font-semibold">Full-Stack Web Developer</span> with a proven track record of delivering scalable, data-driven, and high-impact solutions.
                    </p>

                    <div className="bg-gradient-to-r from-muted to-secondary dark:from-muted-dark dark:to-secondary-dark p-6 rounded-lg border border-border dark:border-border-dark">
                      <h3 className="font-semibold text-foreground dark:text-foreground-dark mb-3 flex items-center">
                        <User className="h-5 w-5 mr-2 text-foreground dark:text-foreground-dark" />
                        About Me
                      </h3>
                      <p>
                        I specialize in creating and maintaining robust, end-to-end applications and mobile-friendly websites, with a strong focus on delivering rich user experiences. Throughout my career, I've collaborated with cross-functional teams to tackle complex challenges and provide innovative solutions, ensuring successful project delivery.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-secondary to-muted dark:from-secondary-dark dark:to-muted-dark p-6 rounded-lg border border-border dark:border-border-dark">
                      <h3 className="font-semibold text-foreground dark:text-foreground-dark mb-3 flex items-center">
                        <Layers className="h-5 w-5 mr-2 text-foreground dark:text-foreground-dark" />
                        Expertise
                      </h3>
                      <p>
                        My expertise spans front-end development, big data solutions, and DevOps integration, with a proven track record of leading teams, mentoring developers, and driving product growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 pt-6">
                    <Button className="bg-primary hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-primary-foreground dark:text-primary-dark-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      Let's Connect
                    </Button>
                    <Button variant="outline" className="border-border dark:border-border-dark hover:bg-muted dark:hover:bg-muted-dark">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">My Professional Journey</h2>
                <p className="text-muted-foreground dark:text-muted-dark-foreground">A timeline of growth, innovation, and impact</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-muted-foreground to-border dark:from-primary-dark dark:via-muted-dark-foreground dark:to-border-dark"></div>

                  {workExperience.map((job) => (
                    <div key={job.id} className="relative mb-12 last:mb-0">
                      {/* Timeline dot */}
                      <div className="absolute left-6 w-5 h-5 bg-primary dark:bg-primary-dark rounded-full border-4 border-background dark:border-background-dark shadow-lg shadow-primary/25 dark:shadow-primary-dark/25 z-10"></div>

                      {/* Content */}
                      <div className="ml-20">
                        <Card className="border-border dark:border-border-dark hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary-dark/5 transition-all duration-300 bg-card dark:bg-card-dark">
                          <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                              <div className="space-y-2">
                                <CardTitle className="text-xl text-foreground dark:text-foreground-dark">{job.role}</CardTitle>
                                <div className="flex items-center space-x-2 text-muted-foreground dark:text-muted-dark-foreground">
                                  <Briefcase className="h-4 w-4" />
                                  <span className="font-medium">{job.company}</span>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground dark:text-muted-dark-foreground">
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{job.period}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{job.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <ul className="space-y-2">
                                {job.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <ArrowRight className="h-4 w-4 text-primary dark:text-primary-dark mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground dark:text-muted-dark-foreground">{highlight}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="bg-muted/50 dark:bg-muted-dark/50 p-4 rounded-lg">
                                <p className="text-sm">
                                  <span className="font-medium text-foreground dark:text-foreground-dark">Technologies: </span>
                                  <span className="text-muted-foreground dark:text-muted-dark-foreground">{job.technologies}</span>
                                </p>
                              </div>

                              {/* Projects */}
                              {job.projects.length > 0 && (
                                <div className="space-y-2">
                                  <h4 className="font-medium text-sm text-foreground dark:text-foreground-dark">Key Projects:</h4>
                                  <div className="grid gap-2">
                                    {job.projects.map((project) => (
                                      <button
                                        key={project.id}
                                        onClick={() => setSelectedProject(project)}
                                        className="text-left p-3 bg-muted/30 dark:bg-muted-dark/30 rounded-lg border border-border dark:border-border-dark hover:shadow-md transition-all duration-200 group"
                                      >
                                        <div className="flex items-center justify-between">
                                          <span className="font-medium text-foreground dark:text-foreground-dark group-hover:text-primary dark:group-hover:text-primary-dark">
                                            {project.name}
                                          </span>
                                          <ExternalLink className="h-4 w-4 text-muted-foreground dark:text-muted-dark-foreground group-hover:text-primary dark:group-hover:text-primary-dark" />
                                        </div>
                                        <p className="text-sm text-muted-foreground dark:text-muted-dark-foreground mt-1">{project.description}</p>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground dark:text-muted-dark-foreground">Showcasing innovation and technical excellence</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {selectedProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="border-border dark:border-border-dark hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary-dark/5 transition-all duration-300 cursor-pointer group bg-card dark:bg-card-dark"
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-xl text-foreground dark:text-foreground-dark group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                            {project.name}
                          </CardTitle>
                          <CardDescription className="font-medium">{project.role}</CardDescription>
                          {project.date && (
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground dark:text-muted-dark-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{project.date}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          {project.link && (
                            <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                              <a href={project.link} target="_blank" rel="noopener noreferrer" title="View Project">
                                <Globe className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          <ExternalLink className="h-4 w-4 text-muted-foreground dark:text-muted-dark-foreground group-hover:text-primary dark:group-hover:text-primary-dark transition-colors" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground dark:text-muted-dark-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted dark:bg-muted-dark text-foreground dark:text-foreground-dark rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What I Can Do</h2>
                <p className="text-muted-foreground dark:text-muted-dark-foreground">Comprehensive expertise across the technology stack</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {skillCategories.map((category, index) => (
                  <Card key={index} className="border-border dark:border-border-dark hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary-dark/5 transition-all duration-300 bg-card dark:bg-card-dark">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-muted dark:bg-muted-dark rounded-lg text-foreground dark:text-foreground-dark">
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.category}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {category.skills.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center space-x-2 p-2 bg-gradient-to-r from-muted to-secondary dark:from-muted-dark dark:to-secondary-dark rounded-lg border border-border dark:border-border-dark hover:shadow-md transition-all duration-200"
                          >
                            <Star className="h-3 w-3 text-accent-foreground dark:text-accent-dark-foreground" />
                            <span className="text-sm font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Project Detail Side Panel */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-background dark:bg-background-dark border-l border-border dark:border-border-dark shadow-2xl animate-slide-in-right overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">{selectedProject.name}</h3>
                  <p className="text-muted-foreground dark:text-muted-dark-foreground">{selectedProject.role}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground dark:text-muted-dark-foreground">{selectedProject.description}</p>
                </div>

                {selectedProject.details && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Details</h4>
                    <p className="text-muted-foreground dark:text-muted-dark-foreground">{selectedProject.details}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted dark:bg-muted-dark text-foreground dark:text-foreground-dark rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.link && (
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-primary-foreground dark:text-primary-dark-foreground">
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
