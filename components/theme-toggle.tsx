"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-11 h-11 rounded-full border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm" />
    )
  }

  const currentTheme = resolvedTheme || theme

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative w-11 h-11 rounded-full border-primary/20 bg-background/40 backdrop-blur-lg hover:border-primary/60 hover:bg-primary/15 transition-all duration-500 shadow-lg group overflow-hidden"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="flex items-center justify-center h-full w-full"
        >
          {currentTheme === "dark" ? (
            <Moon className="h-[1.3rem] w-[1.3rem] text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          ) : (
            <Sun className="h-[1.3rem] w-[1.3rem] text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Decorative inner glow ring */}
      <div className="absolute inset-[-1px] rounded-full ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500" />
    </Button>
  )
}
