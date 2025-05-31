import { NavLink } from 'react-router-dom'
import { User, Briefcase, FolderOpen, Sparkles } from 'lucide-react'
import { navigationTabs } from '@/data'

const iconMap = {
  User: <User className="h-4 w-4" />,
  Briefcase: <Briefcase className="h-4 w-4" />,
  FolderOpen: <FolderOpen className="h-4 w-4" />,
  Sparkles: <Sparkles className="h-4 w-4" />,
}

export const Navigation = () => {
  return (
    <nav className="mt-6">
      <div className="flex space-x-1 bg-muted/50 dark:bg-muted-dark/50 p-1 rounded-lg backdrop-blur-sm">
        {navigationTabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                ? 'bg-primary text-primary-foreground dark:bg-primary-dark dark:text-primary-dark-foreground shadow-md shadow-primary/25 dark:shadow-primary-dark/25'
                : 'text-muted-foreground dark:text-muted-dark-foreground hover:text-foreground dark:hover:text-foreground-dark hover:bg-background/50 dark:hover:bg-background-dark/50'
              }`
            }
          >
            {iconMap[tab.icon as keyof typeof iconMap]}
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
} 