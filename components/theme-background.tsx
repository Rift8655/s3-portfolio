"use client"

import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"
import Balatro from "./balatro"
import Aurora from "./aurora"

export function ThemeBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 h-screen w-screen bg-black" />
  }

  return (
    <>
      <div className={`fixed inset-0 -z-20 h-screen w-screen ${theme === "dark" ? "bg-black" : "bg-white"}`} />
      {theme === "dark" && (
        <div key="dark-aurora" className="fixed inset-0 -z-10 h-screen w-screen">
          <Aurora
            colorStops={["#5227FF", "#7cff67", "#5227FF"]}
            amplitude={1.0}
            blend={0.5}
          />
        </div>
      )}
      {theme === "light" && (
        <div key="light-balatro" className="fixed inset-0 -z-10 h-screen w-screen">
          <Balatro
            spinRotation={-2.0}
            spinSpeed={7.0}
            offset={[0.0, 0.0]}
            color1="#FFFFFF"
            color2="#FFFAFA"
            color3="#D1D1D1"
            contrast={3.5}
            lighting={0.4}
            spinAmount={0.25}
            pixelFilter={745.0}
            spinEase={1.0}
            isRotate={false}
            mouseInteraction={false}
          />
        </div>
      )}
    </>
  )
}
