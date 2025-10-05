import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { useDarkMode } from '@/hooks'
import LiquidEther from '../LiquidEther'
import { useMemo } from 'react'

export const Layout = () => {
  const { toggleDarkMode } = useDarkMode()

  // Memoize LiquidEther props to prevent unnecessary re-renders
  const liquidEtherProps = useMemo(() => ({
    className: "w-full  sticky top-0 left-0 -z-10 pointer-events-none",
    colors: ['#5227FF', '#FF9FFC', '#B19EEF'],
    mouseForce: 20,
    cursorSize: 100,
    isViscous: false,
    viscous: 30,
    iterationsViscous: 32,
    iterationsPoisson: 32,
    resolution: 0.5,
    isBounce: false,
    autoDemo: true,
    autoSpeed: 0.5,
    autoIntensity: 2.2,
    takeoverDuration: 0.25,
    autoResumeDelay: 3000,
    autoRampDuration: 0.6
  }), []) // Empty dependency array ensures this only runs once on mount

  return (
    <div className="
      min-h-screen 
      via-blue-50/30 to-muted/30 
      dark:from-background-dark dark:via-blue-950/20 dark:to-muted-dark/30
      relative
      overflow-x-hidden
    ">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther {...liquidEtherProps} />
      </div>

      {/* Subtle background element */}
      {/* <div className="
        absolute inset-0 z-1
        bg-gradient-to-r from-blue-500/5 via-transparent to-blue-400/5 
        dark:from-blue-600/10 dark:via-transparent dark:to-blue-500/10
        pointer-events-none
      " /> */}

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