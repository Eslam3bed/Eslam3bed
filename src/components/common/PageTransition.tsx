import React from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()

  return (
    <div
      key={location.pathname}
      className="
        motion-preset-fade
        motion-duration-500
        w-full
      "
    >
      {children}
    </div>
  )
} 