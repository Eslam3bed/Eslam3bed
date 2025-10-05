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
      <div className="
        flex space-x-2 
        bg-white/50 dark:bg-white/10 
        p-2 rounded-2xl 
        backdrop-blur-xl 
        border border-white/20 dark:border-white/10
        shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10
      ">
        {navigationTabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            className={({ isActive }) =>
              `
                flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium 
                transition-all duration-300 relative overflow-hidden group
                ${isActive
                ? `
                    bg-gradient-to-r from-blue-600 to-blue-700 
                    dark:from-blue-500 dark:to-blue-600
                    text-white dark:text-white 
                    shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30
                  `
                : `
                    text-muted-foreground dark:text-muted-dark-foreground 
                    hover:text-blue-600 dark:hover:text-blue-400
                    hover:bg-white/60 dark:hover:bg-white/10
                  `
              }
              `
            }
          >
            {/* Animated background for hover state */}
            <div className="
              absolute inset-0 
              bg-gradient-to-r from-blue-400/20 to-blue-600/20 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
              rounded-xl
            " />

            {/* Icon */}
            <span className="relative z-10">
              {iconMap[tab.icon as keyof typeof iconMap]}
            </span>

            {/* Label */}
            <span className="relative z-10">
              {tab.label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
} 