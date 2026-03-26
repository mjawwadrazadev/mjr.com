"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"

export function CustomCursor() {
  const { resolvedTheme } = useTheme()
  const isLightMode = resolvedTheme === "light"
  
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    },
    [cursorX, cursorY]
  )

  useEffect(() => {
    // Check for touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia("(pointer: coarse)").matches
      )
    }

    checkTouchDevice()

    if (isTouchDevice) return

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add hover detection for interactive elements
    const handleElementMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer")

      setIsHovering(!!isInteractive)
    }

    window.addEventListener("mousemove", moveCursor)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleElementMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleElementMouseOver)
    }
  }, [moveCursor, isTouchDevice])

  // Don't render on touch devices or when using reduced motion
  if (isTouchDevice) return null

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] ${!isLightMode ? 'mix-blend-difference' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: 1,
          opacity: isVisible ? 1 : 0,
          borderColor: "var(--primary)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background: isLightMode 
            ? "radial-gradient(circle, rgba(15, 23, 42, 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Global style to hide default cursor on desktop */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}
