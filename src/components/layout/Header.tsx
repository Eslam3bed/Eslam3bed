import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onToggleTheme: () => void
}

export const Header = ({ onToggleTheme }: HeaderProps) => {
  return (
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
          onClick={onToggleTheme}
          className="h-9 w-9"
          title="Toggle theme"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </div>
  )
} 