"use client"

import Image from "next/image"

export default function About() {
  const vendors = [
    { name: "Fortinet", logo: "/fortinet-logo.png" },
    { name: "Sophos", logo: "/sophos-logo.png" },
    { name: "Bitdefender", logo: "/bitdefender-logo.png" },
    { name: "Check Point", logo: "/check-point-logo.jpg" },
    { name: "Kaspersky", logo: "/kaspersky-logo.png" },
  ]

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden glow">
              <Image src="/professional-developer-portrait.png" alt="Pascal Muchiri" fill className="object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in software development, cybersecurity, and cloud infrastructure. My experience spans backend
              API design, cloud deployment, and endpoint protection. I'm passionate about building secure, scalable
              systems that help businesses thrive in the digital age.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Trusted By Industry Leaders</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {vendors.map((vendor) => (
                  <div
                    key={vendor.name}
                    className="glass-dark dark:glass-dark p-4 rounded-lg flex items-center justify-center h-20"
                  >
                    <Image
                      src={vendor.logo || "/placeholder.svg"}
                      alt={vendor.name}
                      width={100}
                      height={30}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
