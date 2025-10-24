"use client"

import { Code2, Cloud, Shield, Zap, Network, GitBranch } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["PHP (Laravel)", "C#", "ASP.NET", "JavaScript", "React", "TailwindCSS"],
    },
    {
      title: "Cloud & Virtualization",
      icon: Cloud,
      skills: ["AWS", "ESXi", "Azure", "Docker"],
    },
    {
      title: "Firewall & Security",
      icon: Shield,
      skills: ["Fortinet", "Sophos", "Bitdefender", "Check Point", "Kaspersky"],
    },
    {
      title: "CI/CD & Automation",
      icon: Zap,
      skills: ["GitHub Actions", "Azure DevOps", "PowerShell", "Bash"],
    },
    {
      title: "Networking",
      icon: Network,
      skills: ["Routing", "Switching", "SD-WAN", "Network Security"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
          Technical <span className="text-foreground">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="glass-dark dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary/20 text-white text-sm rounded-full font-medium hover:bg-secondary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
