"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 mt-16">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-8 animate-float">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 glow">
            <div className="w-full h-full rounded-full bg-background dark:bg-background flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">PM</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground">
          Software Development & <span className="text-foreground">Cybersecurity</span> Expertise
        </h1>

        <p className="text-xl md:text-2xl text-foreground dark:text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          I build secure, scalable systems and software solutions that enhance business efficiency.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all glow"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Contact Me
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-primary" />
        </div>
      </div>
    </section>
  )
}
