import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeBackground } from "@/components/theme-background"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pascal Muchiri - Software Developer & Cybersecurity Professional",
  description:
    "Portfolio of Pascal Muchiri, a software developer and cybersecurity professional specializing in secure, scalable systems.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <ThemeProvider>
          <ThemeBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
