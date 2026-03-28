"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MapPin, ExternalLink, Calendar } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Zen_Dots, JetBrains_Mono } from "next/font/google"
import { useTheme } from "next-themes"
import Lottie from "lottie-react"
import { BookingDrawer } from "@/components/booking-drawer"
import virtualMeetingLight from "../../public/lottie/Virtual Meeting2.json"
import virtualMeetingDark from "../../public/lottie/Virtual Meeting dark.json"

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
})

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
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  React.useEffect(() => {
    setMounted(true)
  }, [])

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
  const currentTheme = resolvedTheme || theme
  const activeAnimation = currentTheme === "dark" ? virtualMeetingDark : virtualMeetingLight

  return (
    <>
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-6 sm:mb-10 lg:mb-16">
          <span className={`block text-primary text-xs sm:text-sm font-bold tracking-wider uppercase ${jetBrainsMono.className}`}>
            Contact
          </span>
          <div className="inline-block mt-2 mb-4 sm:mb-6">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-tight text-foreground light-gradient-text mb-2 text-balance ${zenDots.className}`}>
              Let&apos;s Build Something Together
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing new opportunities.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <FadeIn direction="right" className="h-full">
            <div className="h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 shrink-0">
                Get in Touch
              </h3>
              <StaggerContainer className="flex-1 flex flex-col justify-between space-y-0 gap-3 sm:gap-4">
                {contactInfo.map((item) => (
                  <StaggerItem key={item.label} className="flex-1">
                    <div className="relative rounded-xl overflow-hidden group h-full bg-card border border-border transition-colors">
                      {/* Spinning Comet Border Gradient (Visible on Hover) */}
                      <div
                        className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_2.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                        style={{ background: 'conic-gradient(from 0deg, transparent 0 280deg, var(--primary) 360deg)' }}
                      />

                      {/* Inner mask to create the 2px glowing track inside the 1px physical border */}
                      <div className="absolute inset-[2px] rounded-[10px] bg-card pointer-events-none z-10 transition-colors" />

                      {/* Card Content Wrapper */}
                      <div className="relative h-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 z-20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs sm:text-sm text-muted-foreground ${jetBrainsMono.className}`}>
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
                              className={`text-sm sm:text-base text-foreground font-medium hover:text-primary transition-colors flex items-center gap-1 truncate ${jetBrainsMono.className}`}
                            >
                              <span className="truncate">{item.value}</span>
                              {item.href.startsWith("http") && (
                                <ExternalLink className="w-3 h-3 shrink-0" />
                              )}
                            </a>
                          ) : (
                            <p className={`text-sm sm:text-base text-foreground font-medium ${jetBrainsMono.className}`}>
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Lottie Animation & Meeting Link */}
          <FadeIn direction="left" className="h-full">
            <div className="h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">
                Schedule a Consultation
              </h3>
              <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col items-center justify-between h-full min-h-[400px]">
                <div className="w-full max-w-[300px] sm:max-w-[400px] mb-6">
                  {mounted && (
                    <Lottie 
                      animationData={activeAnimation} 
                      loop={true}
                      className="w-full drop-shadow-2xl"
                    />
                  )}
                </div>
                
                <div className="w-full space-y-4">
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Ready to take your business to the next level? Book a direct meeting with me to discuss your project requirements and strategy.
                  </p>
                  
                  {shouldReduceMotion ? (
                    <Button
                      size="lg"
                      className="w-full group h-12 text-base font-semibold shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-shadow duration-300"
                      onClick={() => setIsDrawerOpen(true)}
                    >
                      Book a meeting
                      <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    </Button>
                  ) : (
                    <MotionButton
                      size="lg"
                      className="w-full group h-12 text-base font-semibold shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsDrawerOpen(true)}
                    >
                      Book a meeting
                      <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    </MotionButton>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <BookingDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}
