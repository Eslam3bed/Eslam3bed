import { useState, useEffect } from 'react'

/**
 * Custom hook to detect if user is located in the USA
 * Uses free IP geolocation API to determine country
 * 
 * @returns {boolean | null} - true if USA, false if not USA, null while loading
 */
export const useUserLocation = (): boolean | null => {
  const [isUSA, setIsUSA] = useState<boolean | null>(null)

  useEffect(() => {
    // Using ipapi.co free tier (no API key required)
    // Alternative: could use ip-api.com/json or other free services
    fetch('https://ipapi.co/json/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch location')
        }
        return response.json()
      })
      .then((data) => {
        // Check if country code is US
        setIsUSA(data.country_code === 'US')
      })
      .catch((error) => {
        // On error, default to showing the tab (fail open)
        console.warn('Failed to detect user location:', error)
        setIsUSA(false)
      })
  }, [])

  return isUSA
}

