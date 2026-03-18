"use client"

import { Linkedin, Mail, ExternalLink } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const socialLinks = [
  {
    href: "mailto:mjawwadraza.dev@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/muhammad-jawwad-raza-77444b242",
    icon: Linkedin,
    label: "LinkedIn",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const shouldReduceMotion = useReducedMotion()

  return (
    <footer className="py-6 sm:py-8 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <span>&copy; {currentYear}</span>
            <span className="text-foreground font-medium">
              Muhammad Jawwad Raza
            </span>
            <span className="hidden xs:inline">•</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return shouldReduceMotion ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ) : (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
