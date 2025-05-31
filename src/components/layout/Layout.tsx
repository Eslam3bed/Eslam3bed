import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { useDarkMode } from '@/hooks'

export const Layout = () => {
  const { toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 dark:from-background-dark dark:via-background-dark dark:to-muted-dark/30">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-border dark:border-border-dark">
        <div className="container mx-auto px-4 py-4">
          <Header onToggleTheme={toggleDarkMode} />
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-44 pb-8">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
} 