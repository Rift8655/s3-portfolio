"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "SnugnBean Restaurant SPA",
      description: "Restaurant booking and management platform with real-time reservations and inventory tracking.",
      tech: ["React", "Node.js", "TailwindCSS", "MongoDB"],
      vendors: [],
      link: "https://snugnbean.co.ke",
      image: "/restaurant-booking-app-interface.png",
    },
    {
      title: "SnugnBean POS",
      description: "Custom point-of-sale system designed for hospitality businesses with advanced reporting.",
      tech: ["Laravel", "React", "MySQL", "Docker"],
      vendors: [],
      link: "#",
      image: "/pos-system-dashboard.jpg",
    },
    {
      title: "VivaBreez POS",
      description: "Retail and inventory management POS system with multi-location support.",
      tech: ["C#", "ASP.NET", "SQL Server", "Azure"],
      vendors: [],
      link: "#",
      image: "/retail-pos-interface.jpg",
    },
    {
      title: "Squarefoot WordPress Website",
      description: "Corporate real estate website with property listings and client management.",
      tech: ["WordPress", "PHP", "JavaScript", "MySQL"],
      vendors: [],
      link: "#",
      image: "/real-estate-website-hero.png",
    },
    {
      title: "Upeo Ltd WordPress Website",
      description: "Professional business portfolio site with service showcase and contact integration.",
      tech: ["WordPress", "PHP", "TailwindCSS"],
      vendors: [],
      link: "#",
      image: "/business-portfolio-website.jpg",
    },
    {
      title: "Benolives B2C API",
      description: "API for license management and product delivery for Kaspersky products.",
      tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
      vendors: [],
      link: "#",
      image: "/api-dashboard-interface.jpg",
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
          Featured <span className="text-foreground">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-dark dark:glass-dark rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white text-sm mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Vendors */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.vendors.map((vendor) => (
                    <span key={vendor} className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded font-medium">
                      {vendor}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    View Demo <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
