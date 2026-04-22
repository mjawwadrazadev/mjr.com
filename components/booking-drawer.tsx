"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Clock, Calendar, Zap, CalendarCheck, ArrowLeft } from "lucide-react"

interface BookingDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const meetingTypes = [
  {
    id: "15min",
    title: "Quick Chat",
    description: "A brief 15-minute intro call to discuss your idea or project.",
    duration: "15 min",
    url: "https://cal.com/muhammad-jawwad-raza/15min",
    icon: Zap,
    gradient: "from-primary/15 via-primary/5 to-transparent",
    badge: "bg-primary/20 text-primary border-primary/30",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    border: "border-primary/20 hover:border-primary/50",
  },
  {
    id: "30min",
    title: "Project Deep Dive",
    description: "30 minutes to explore your requirements, tech stack & strategy.",
    duration: "30 min",
    url: "https://cal.com/muhammad-jawwad-raza/30min",
    icon: Calendar,
    gradient: "from-primary/10 via-primary/5 to-transparent",
    badge: "bg-primary/15 text-primary border-primary/25",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    border: "border-border hover:border-primary/40",
  },
  {
    id: "secret",
    title: "Custom Consultation",
    description: "Flexible session for complex projects, audits, or ongoing work.",
    duration: "Custom",
    url: "https://cal.com/muhammad-jawwad-raza/secret",
    icon: Clock,
    gradient: "from-primary/8 via-primary/3 to-transparent",
    badge: "bg-primary/10 text-primary border-primary/20",
    iconBg: "bg-primary/8",
    iconColor: "text-primary",
    border: "border-border hover:border-primary/30",
  },
]

export function BookingDrawer({ isOpen, onClose }: BookingDrawerProps) {
  const [selectedMeeting, setSelectedMeeting] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setTimeout(() => setSelectedMeeting(null), 400)
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - z-[100] covers navbar too */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Drawer - z-[101] above backdrop */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 z-[101] flex h-full w-full flex-col bg-background sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-l-2xl border-l border-border shadow-[-8px_0_60px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 shrink-0">
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:border-primary/40"
                aria-label="Close"
              >
                <X className="h-3.5 w-3.5" />
              </button>

              {/* Show title only on calendar screen */}
              {selectedMeeting && (
                <div className="flex items-center gap-2">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                  <span className="text-base font-bold text-foreground">Book a Meeting</span>
                </div>
              )}

              {/* Spacer to balance layout */}
              <div className="w-8" />
            </div>

            {/* Body - vertically centered */}
            <div className="flex flex-1 flex-col overflow-y-auto">
              {!selectedMeeting ? (
                <div className="flex flex-1 flex-col justify-center px-6 py-8 gap-5">

                  {/* Intro */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <CalendarCheck className="h-10 w-10 text-primary" />
                      <h2 className="text-4xl font-bold tracking-tight text-foreground">
                        Book a Meeting
                      </h2>
                    </div>
                    <p className="text-sm text-primary font-medium mb-3">
                      with Muhammad Jawwad Raza
                    </p>

                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Select the meeting that best fits what you have in mind.
                      All sessions are via Google Meet.
                    </p>
                  </div>

                  {/* Meeting cards */}
                  <div className="flex flex-col gap-3">
                    {meetingTypes.map((meeting, index) => (
                      <motion.button
                        key={meeting.id}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.07, type: "spring", stiffness: 280, damping: 28 }}
                        onClick={() => setSelectedMeeting(meeting.id)}
                        className={`group relative w-full overflow-hidden rounded-xl border ${meeting.border} bg-card text-left transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]`}
                      >
                        {/* Hover gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${meeting.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        <div className="relative flex items-center gap-4 p-4 sm:p-5">
                          {/* Icon */}
                          <div className={`shrink-0 flex h-11 w-11 items-center justify-center rounded-xl ${meeting.iconBg} border border-primary/15 transition-colors group-hover:border-primary/30`}>
                            <meeting.icon className={`h-5 w-5 ${meeting.iconColor}`} />
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground text-sm mb-0.5">
                              {meeting.title}
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {meeting.description}
                            </p>
                          </div>

                          {/* Duration badge */}
                          <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide ${meeting.badge}`}>
                            {meeting.duration}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Footer */}
                  <p className="text-center text-xs text-muted-foreground/60">
                    Powered by{" "}
                    <a
                      href="https://cal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/70 hover:text-primary transition-colors"
                    >
                      Cal.com
                    </a>
                    {" · "}Times shown in your local timezone
                  </p>
                </div>
              ) : (
                /* Cal.com Iframe */
                <div className="flex flex-col flex-1">
                  {/* Bold back bar */}
                  <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border bg-card/50 shrink-0">
                    <button
                      onClick={() => setSelectedMeeting(null)}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back to options</span>
                    </button>
                    <div className="h-4 w-px bg-border" />
                    <span className="text-sm font-semibold text-foreground">
                      {meetingTypes.find((m) => m.id === selectedMeeting)?.title}
                    </span>
                    <span className="ml-auto rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary border-primary/20">
                      {meetingTypes.find((m) => m.id === selectedMeeting)?.duration}
                    </span>
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      <span className="text-xs">Loading calendar...</span>
                    </div>
                    <iframe
                      key={selectedMeeting}
                      src={meetingTypes.find((m) => m.id === selectedMeeting)?.url}
                      className="relative z-10 h-full w-full border-0 bg-transparent"
                      title="Book a meeting with Muhammad Jawwad Raza"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
