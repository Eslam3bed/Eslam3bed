import { useState } from 'react'
import { Calendar, ExternalLink, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProjectModal } from '@/components/common/ProjectModal'
import { selectedProjects, Project } from '@/data'

export const FeaturedWorkPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
} 