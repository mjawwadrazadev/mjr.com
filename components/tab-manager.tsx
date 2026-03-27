"use client"

import { useEffect, useRef } from "react"

const MESSAGES = [
  "Come back to the future! 🚀",
  "Don't miss the projects! ✨",
  "Let's build something! 💻",
  "Missed you already! 👋",
  "Check out my stack! 💎",
]

const ICONS = [
  "/favicon-m.svg",
  "/favicon-j.svg",
  "/favicon-r.svg",
]

export function TabManager() {
  const originalTitle = useRef("")
  const titleIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const iconIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // 1. Handle Tab Title logic
    const timeoutId = setTimeout(() => {
      originalTitle.current = document.title
    }, 1500)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let index = 0
        document.title = MESSAGES[index]
        
        titleIntervalRef.current = setInterval(() => {
          index = (index + 1) % MESSAGES.length
          document.title = MESSAGES[index]
        }, 2000)
      } else {
        if (titleIntervalRef.current) {
          clearInterval(titleIntervalRef.current)
          titleIntervalRef.current = null
        }
        document.title = originalTitle.current || "Muhammad Jawwad Raza"
      }
    }

    // 2. Handle Animated Favicon logic (always looping)
    let iconIndex = 0
    iconIntervalRef.current = setInterval(() => {
      const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement
      if (favicon) {
        favicon.href = ICONS[iconIndex]
        iconIndex = (iconIndex + 1) % ICONS.length
      }
    }, 1200) // Change every 1.2s for a smooth pace

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearTimeout(timeoutId)
      if (titleIntervalRef.current) clearInterval(titleIntervalRef.current)
      if (iconIntervalRef.current) clearInterval(iconIntervalRef.current)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return null
}
