"use client"

import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export function ThemeBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800" />
  }

  return (
    <div
      className={`fixed inset-0 -z-10 h-screen w-screen transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-br from-slate-50 to-slate-100"
          : "bg-gradient-to-br from-slate-900 to-slate-800"
      }`}
    />
  )
}
