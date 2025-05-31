import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { useDarkMode } from '@/hooks'

export const Layout = () => {
  const { toggleDarkMode } = useDarkMode()

  return (
    <div className="
      min-h-screen 
      bg-gradient-to-br from-background via-blue-50/30 to-muted/30 
      dark:from-background-dark dark:via-blue-950/20 dark:to-muted-dark/30
      relative
      overflow-x-hidden
    ">
      {/* Subtle background element */}
      <div className="
        absolute inset-0 
        bg-gradient-to-r from-blue-500/5 via-transparent to-blue-400/5 
        dark:from-blue-600/10 dark:via-transparent dark:to-blue-500/10
        pointer-events-none
      " />

      {/* Fixed Header with glass effect */}
      <header className="
        fixed top-0 left-0 right-0 z-20 
        bg-white/70 dark:bg-background-dark/70 
        backdrop-blur-2xl 
        border-b border-white/20 dark:border-white/10
        shadow-lg shadow-blue-500/5 dark:shadow-blue-400/5
      ">
        <div className="container mx-auto px-4 py-4">
          <Header onToggleTheme={toggleDarkMode} />
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-44 pb-8 relative z-10">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
} 