"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground dark:text-muted-foreground">© 2025 Pascal Muchiri — All Rights Reserved.</p>
            <p className="text-sm text-muted-foreground mt-1">Building secure, scalable systems.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="text-primary group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  )
}
