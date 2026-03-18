"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Linkedin, MapPin, Send, ExternalLink } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mjawwadraza.dev@gmail.com",
    href: "mailto:mjawwadraza.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 307-3450411",
    href: "tel:+923073450411",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muhammad Jawwad Raza",
    href: "https://www.linkedin.com/in/muhammad-jawwad-raza-77444b242",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
  },
]

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  const MotionButton = shouldReduceMotion ? Button : motion.create(Button)

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            {"Let's Work Together"}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing new opportunities.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <FadeIn direction="left" className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                Get in Touch
              </h3>
              <StaggerContainer className="space-y-3 sm:space-y-4">
                {contactInfo.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm sm:text-base text-foreground font-medium hover:text-primary transition-colors flex items-center gap-1 truncate"
                          >
                            <span className="truncate">{item.value}</span>
                            {item.href.startsWith("http") && (
                              <ExternalLink className="w-3 h-3 shrink-0" />
                            )}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base text-foreground font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right">
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-10 sm:h-11 text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-10 sm:h-11 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="subject" className="text-sm">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base resize-none"
                  />
                </div>
                {shouldReduceMotion ? (
                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <MotionButton
                    type="submit"
                    size="lg"
                    className="w-full group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MotionButton>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
