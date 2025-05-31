import { useState } from 'react'
import { Briefcase, Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProjectModal } from '@/components/common/ProjectModal'
import { workExperience, Project } from '@/data'

export const JourneyPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
} 