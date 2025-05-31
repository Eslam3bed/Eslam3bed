/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: "#e2e8f0",
          dark: "#475569"
        },
        input: {
          DEFAULT: "#e2e8f0",
          dark: "#475569"
        },
        ring: {
          DEFAULT: "#0f172a",
          dark: "#f8fafc"
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#0f172a"
        },
        foreground: {
          DEFAULT: "#0f172a",
          dark: "#f8fafc"
        },
        primary: {
          DEFAULT: "#0f172a",
          foreground: "#ffffff",
          dark: "#f8fafc",
          "dark-foreground": "#0f172a"
        },
        secondary: {
          DEFAULT: "#f8fafc",
          foreground: "#0f172a",
          dark: "#334155",
          "dark-foreground": "#f8fafc"
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
          dark: "#ef4444",
          "dark-foreground": "#f8fafc"
        },
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#64748b",
          dark: "#334155",
          "dark-foreground": "#94a3b8"
        },
        accent: {
          DEFAULT: "#22c55e",
          foreground: "#0f172a",
          dark: "#22c55e",
          "dark-foreground": "#f8fafc"
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
          dark: "#1e293b",
          "dark-foreground": "#f8fafc"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
          dark: "#1e293b",
          "dark-foreground": "#f8fafc"
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} 