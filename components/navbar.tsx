"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)

    // Close mobile menu first
    setIsMobileMenuOpen(false)

    if (element) {
      const headerOffset = 80 // Navbar height + some padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      // Delay scroll purely to let React state unmount without interrupting native mobile smooth scroll
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }, 100)
    }
  }

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6",
        isScrolled
          ? "py-2 sm:py-3"
          : "py-4 sm:py-6"
      )}
    >
      <nav className={cn(
        "mx-auto max-w-6xl rounded-2xl transition-all duration-300 relative overflow-hidden",
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl px-4 sm:px-6"
          : "bg-transparent px-2"
      )}>
        {/* Shimmer Effect for Liquid Glass */}
        {(isScrolled || isMobileMenuOpen) && (
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
        <div className="flex h-14 sm:h-16 items-center justify-between relative z-10">
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group relative text-[29px] sm:text-[33px] font-bold font-sans tracking-tighter transition-colors flex items-center"
            initial="initial"
            whileHover={shouldReduceMotion ? "initial" : "hover"}
            whileTap={shouldReduceMotion ? "initial" : "tap"}
          >
            <span className="relative z-10 flex overflow-visible py-1 items-center leading-none">
              {["m", "j", "r"].map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-foreground group-hover:text-primary transition-colors duration-300"
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -4 },
                    tap: { y: 2 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.05 }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className="inline-block text-primary text-[1.15em] leading-none"
                variants={{
                  initial: { scale: 1, y: 0 },
                  hover: { scale: 1.2, y: -4, rotate: 10 },
                  tap: { scale: 0.8, y: 2 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 3 * 0.05 }}
              >
                .
              </motion.span>
            </span>
            <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-xl bg-primary/40 transition-opacity duration-500 rounded-full scale-150" />
          </motion.a>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-[19px] font-medium transition-colors relative py-2",
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-white/5"
            aria-label="Toggle menu"
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={shouldReduceMotion ? false : { rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={shouldReduceMotion ? {} : { rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={shouldReduceMotion ? false : { rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={shouldReduceMotion ? {} : { rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <motion.div
                className="flex flex-col gap-1 pt-2 pb-6"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "px-4 py-3 text-[17px] font-medium rounded-xl transition-all duration-200",
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/10 pl-6"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
