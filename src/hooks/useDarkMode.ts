import { useState, useEffect, useCallback } from "react";

interface UseDarkModeReturn {
  isDark: boolean;
  toggleDarkMode: () => void;
}

/**
 * Custom hook for managing dark mode with system preference support
 * Follows Tailwind CSS recommended approach for dark mode implementation
 *
 * Features:
 * - Automatically detects system preference on first visit
 * - Persists user choice in localStorage
 * - Listens for system theme changes when no user preference is set
 * - Prevents FOUC (Flash of Unstyled Content)
 * - Returns current dark mode state for conditional rendering
 *
 * @returns {UseDarkModeReturn} Object containing current state and toggle function
 */
export const useDarkMode = (): UseDarkModeReturn => {
  const [isDark, setIsDark] = useState(false);

  // Apply dark mode class to document element
  const applyDarkMode = useCallback((darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setIsDark(darkMode);
  }, []);

  // Check if user prefers dark mode based on system settings
  const getSystemPreference = useCallback(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }, []);

  // Update theme based on localStorage and system preference
  const updateTheme = useCallback(() => {
    // Tailwind CSS recommended logic
    const shouldBeDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && getSystemPreference());

    applyDarkMode(shouldBeDark);
  }, [applyDarkMode, getSystemPreference]);

  // Toggle between light and dark mode
  const toggleDarkMode = useCallback(() => {
    if (localStorage.theme === "dark") {
      // Switch to light mode
      localStorage.theme = "light";
      applyDarkMode(false);
    } else {
      // Switch to dark mode
      localStorage.theme = "dark";
      applyDarkMode(true);
    }
  }, [applyDarkMode]);

  useEffect(() => {
    // Set initial theme
    updateTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      // Only follow system preference if user hasn't set a manual preference
      if (!("theme" in localStorage)) {
        updateTheme();
      }
    };

    // Add event listener for system theme changes
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Cleanup event listener
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [updateTheme]);

  return {
    isDark,
    toggleDarkMode,
  };
};

// Export default for easier importing
export default useDarkMode;
