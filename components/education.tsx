"use client"

import { Award, BookOpen } from "lucide-react"

export default function Education() {
  const education = [
    {
      type: "Diploma",
      title: "Diploma in ICT",
      institution: "Daystar University",
      icon: BookOpen,
    },
  ]

  const certifications = [
    { name: "Fortinet NSE 1–2", vendor: "Fortinet" },
    { name: "Sophos SC01–CSP01", vendor: "Sophos" },
    { name: "Bitdefender GravityZone MSP", vendor: "Bitdefender" },
    { name: "Check Point Harmony", vendor: "Check Point" },
    { name: "Kaspersky Cloud Sales Specialist", vendor: "Kaspersky" },
  ]

  return (
    <section id="education" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
          Education & <span className="text-foreground">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="glass-dark dark:glass-dark p-6 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-1">{edu.type}</p>
                  <h4 className="text-lg font-bold mb-1">{edu.title}</h4>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-secondary" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-dark dark:glass-dark p-4 rounded-lg">
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.vendor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
