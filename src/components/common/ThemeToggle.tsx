import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDarkMode } from '@/hooks'

interface ThemeToggleProps {
  className?: string
}

/**
 * Example component demonstrating usage of the useDarkMode hook
 * Can be used anywhere in the app to toggle dark mode
 */
export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className={`h-9 w-9 ${className}`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 