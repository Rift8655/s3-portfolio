"use client"

import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "CloudLogic",
      role: "Network Engineer",
      duration: "Nov 2024 – Mar 2025",
      highlights: [
        "Designed and deployed secure network infrastructure",
        "Managed cloud-based solutions and optimization",
        "Implemented network security protocols",
      ],
    },
    {
      company: "Benolives",
      role: "Software Developer",
      duration: "Jul 2024 – Apr 2025",
      highlights: [
        "Developed full-stack web applications using React and Node.js",
        "Designed and implemented RESTful APIs",
        "Collaborated with cross-functional teams on product features",
      ],
    },
    {
      company: "Secureline Technologies",
      role: "Pre-Sales Support",
      duration: "Mar 2024 – Feb 2025",
      highlights: [
        "Provided technical support for security solutions",
        "Conducted product demonstrations and consultations",
        "Assisted in closing enterprise deals",
      ],
    },
    {
      company: "Codezuka Developers",
      role: "Software Developer",
      duration: "Mar 2022 – Oct 2022",
      highlights: [
        "Built responsive web applications",
        "Implemented database solutions",
        "Optimized application performance",
      ],
    },
    {
      company: "Squarefoot Real Estate Ventures Ltd",
      role: "IT Administrator",
      duration: "Aug 2021 – Oct 2022",
      highlights: [
        "Managed IT infrastructure and systems",
        "Provided technical support to staff",
        "Implemented security measures",
      ],
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-dark dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg mt-1">
                  <Briefcase size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-primary font-semibold mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-foreground dark:text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
