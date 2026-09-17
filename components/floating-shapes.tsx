"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface ShapeProps {
  delay?: number
  duration?: number
  size?: number
  color?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
}

function FloatingShape({
  delay = 0,
  duration = 6,
  size = 60,
  color = "#00ffff",
  top,
  left,
  right,
  bottom,
}: ShapeProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.2, 0.6, 0.3, 0.6],
        rotateX: [0, 360, 0, 360],
        rotateY: [0, 180, 360, 180],
        rotateZ: [0, 90, 180, 270],
        scale: [0.8, 1.05, 0.9, 1],
        y: [0, -25, 0, -18, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}33, ${color}aa)`,
        borderRadius: "24%",
        backdropFilter: "blur(12px)",
        border: `1px solid ${color}66`,
        boxShadow: `0 0 30px ${color}44`,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="pointer-events-none hidden dark:md:block z-0"
    />
  )
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingShape top="12%" left="8%" size={75} color="#00ffff" delay={0} duration={7} />
      <FloatingShape top="55%" right="10%" size={65} color="#ff00ff" delay={1} duration={8} />
      <FloatingShape top="25%" right="22%" size={45} color="#eab308" delay={2} duration={6} />
      <FloatingShape bottom="18%" left="15%" size={70} color="#22c55e" delay={1.5} duration={7.5} />
    </div>
  )
}
