"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Integrate Mailjet API
      // For now, just simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
          Get In <span className="text-foreground">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-dark dark:glass-dark p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-white">Southern Tower, Two Rivers Complex, Limuru Rd, Nairobi</p>
                </div>
              </div>
            </div>

            <div className="glass-dark dark:glass-dark p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+254743871999" className="text-white hover:text-primary transition-colors">
                    +254 743 871999
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-dark dark:glass-dark p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:pascalmuchiri@gmail.com" className="text-white hover:text-primary transition-colors">
                    pascalmuchiri@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/pascal-muchiri-76b145254"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors"
              >
                <Linkedin size={24} className="text-primary" />
              </a>
              <a
                href="https://github.com/kemosabixv/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors"
              >
                <Github size={24} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-secondary text-center font-semibold">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-destructive text-center font-semibold">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
