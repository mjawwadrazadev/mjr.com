"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
  { name: "Home", href: "#home", section: "home" },
  { name: "About", href: "#about", section: "about" },
  { name: "Resume", href: "#resume", section: "resume" },
  { name: "Portfolio", href: "#portfolio", section: "portfolio" },
  { name: "Contact", href: "#contact", section: "contact" },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      // More sensitive trigger for immediate pill effect
      setIsScrolled(window.scrollY > 20)

      if (isHomePage) {
        const scrollPosition = window.scrollY + 100
        for (const item of navItems) {
          const el = document.getElementById(item.section)
          if (el) {
            const { offsetTop, offsetHeight } = el
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(item.section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) {
      const section = pathname.replace("/", "")
      setActiveSection(section || "home")
    }
  }, [pathname, isHomePage])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (isHomePage) {
      const el = document.getElementById(section)
      if (el) {
        const offsetPosition = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      }
    } else {
      if (section === "home") router.push("/")
      else router.push(`/#${section}`)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (isHomePage) window.scrollTo({ top: 0, behavior: "smooth" })
    else router.push("/")
  }

  if (!mounted) return null // Prevent hydration flash

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 sm:px-6",
        isScrolled && "sm:py-3"
      )}
    >
      <nav className={cn(
        "mx-auto max-w-6xl rounded-2xl relative transition-all duration-300",
        isScrolled || isMobileMenuOpen ? "liquidGlass-wrapper shadow-2xl" : "bg-transparent"
      )}>
        {/* Liquid Glass background layers */}
        {(isScrolled || isMobileMenuOpen) && (
          <>
            <div className="liquidGlass-effect" />
            <div className="liquidGlass-tint" />
            <div className="liquidGlass-shine" />
            {/* Shimmer Effect for Liquid Glass */}
            <motion.div
              className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}

        <div className="relative z-20 px-4 sm:px-6 py-2">
          <div className="flex h-12 sm:h-14 items-center justify-between">
            <motion.a
              href="/"
              onClick={handleLogoClick}
              className="group relative text-2xl sm:text-3xl font-bold font-sans tracking-tighter"
            >
              <span className="relative z-10 flex items-center leading-none text-foreground group-hover:text-primary transition-colors">
                mjr<span className="text-primary text-[1.15em]">.</span>
              </span>
            </motion.a>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={isHomePage ? item.href : `/#${item.section}`}
                    onClick={(e) => handleNavClick(e, item.section)}
                    className={cn(
                      "text-lg font-medium transition-colors relative py-1",
                      activeSection === item.section ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {activeSection === item.section && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-none dark:shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              <ThemeToggle />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden border-t border-white/10 mt-2"
              >
                <div className="flex flex-col gap-2 py-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={isHomePage ? item.href : `/#${item.section}`}
                      onClick={(e) => handleNavClick(e, item.section)}
                      className={cn(
                        "px-4 py-2 text-base font-medium rounded-lg transition-colors",
                        activeSection === item.section ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Distortion SVG Filter */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="glass-distortion">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        </svg>
      </nav>
    </motion.header>
  )
}
