"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage or system preference
    const stored = localStorage.getItem("theme") as "light" | "dark" | null
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle("dark", stored === "dark")
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(isDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", isDark)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark"
      localStorage.setItem("theme", newTheme)
      document.documentElement.classList.toggle("dark", newTheme === "dark")
      return newTheme
    })
  }

  if (!mounted) return <>{children}</>

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    return { theme: "dark" as const, toggleTheme: () => {} }
  }
  return context
}
