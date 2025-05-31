import { X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Project } from '@/data'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="fixed right-0 top-0 h-full w-full max-w-lg bg-background dark:bg-background-dark border-l border-border dark:border-border-dark shadow-2xl animate-slide-in-right overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">{project.name}</h3>
              <p className="text-muted-foreground dark:text-muted-dark-foreground">{project.role}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-muted-foreground dark:text-muted-dark-foreground">{project.description}</p>
            </div>

            {project.details && (
              <div>
                <h4 className="font-semibold mb-2">Key Details</h4>
                <p className="text-muted-foreground dark:text-muted-dark-foreground">{project.details}</p>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted dark:bg-muted-dark text-foreground dark:text-foreground-dark rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <Button asChild className="w-full bg-primary hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-primary-foreground dark:text-primary-dark-foreground">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 