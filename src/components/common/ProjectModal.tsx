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
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="
          fixed right-0 top-0 h-full w-full max-w-lg 
          bg-white/90 dark:bg-background-dark/90 
          backdrop-blur-sm
          border-l border-white/20 dark:border-white/10 
          shadow-2xl shadow-blue-500/10 dark:shadow-blue-400/10
          animate-slide-in-right overflow-y-auto
          motion-preset-slide-left
          motion-duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glass overlay effect */}
        <div className="
          absolute inset-0 
          bg-gradient-to-br from-white/30 via-white/5 to-transparent 
          dark:from-white/10 dark:via-white/5 dark:to-transparent
          pointer-events-none
        " />

        <div className="p-6 space-y-6 relative z-10">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">{project.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{project.role}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="
                hover:bg-blue-50 dark:hover:bg-blue-950/50
                transition-all duration-300
                hover:scale-110
              "
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="
              bg-blue-50/50 dark:bg-blue-950/30 
              p-4 rounded-2xl
              border border-blue-200/30 dark:border-blue-800/30
              backdrop-blur-sm
            ">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Description</h4>
              <p className="text-muted-foreground dark:text-muted-dark-foreground">{project.description}</p>
            </div>

            {project.details && (
              <div className="
                bg-white/60 dark:bg-white/10 
                p-4 rounded-2xl
                border border-white/30 dark:border-white/10
                backdrop-blur-sm
              ">
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Key Details</h4>
                <p className="text-muted-foreground dark:text-muted-dark-foreground">{project.details}</p>
              </div>
            )}

            <div className="
              bg-gradient-to-r from-blue-50/60 to-white/60 
              dark:from-blue-950/30 dark:to-white/10 
              p-4 rounded-2xl
              border border-white/30 dark:border-white/10
              backdrop-blur-sm
            ">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 
                      bg-white/80 dark:bg-white/20 
                      text-blue-700 dark:text-blue-300 
                      rounded-full text-sm font-medium
                      border border-blue-200/50 dark:border-blue-700/50
                      backdrop-blur-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <Button
                asChild
                className="
                  w-full 
                  bg-gradient-to-r from-blue-600 to-blue-700 
                  hover:from-blue-700 hover:to-blue-800 
                  dark:from-blue-500 dark:to-blue-600 
                  dark:hover:from-blue-600 dark:hover:to-blue-700
                  text-white dark:text-white
                  shadow-lg shadow-blue-500/25
                  hover:shadow-xl hover:shadow-blue-500/30
                  border-0
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:scale-105
                "
              >
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