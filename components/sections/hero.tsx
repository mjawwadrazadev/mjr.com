"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Typewriter } from "@/components/typewriter"
import { Zen_Dots } from "next/font/google"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
})

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  const handleScroll = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.8,
      },
    },
  }

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: shouldReduceMotion ? 0 : 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  const floatingAnimation = shouldReduceMotion
    ? {}
    : {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glow Effect */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-primary/20 rounded-full blur-[128px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <FadeIn direction="right" className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/50 border border-border mt-6 lg:mt-0 lg:-translate-y-[15px] mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              className={`text-[30px] sm:text-3xl md:text-5xl lg:text-5xl tracking-tight text-foreground mb-4 sm:mb-6 ${zenDots.className}`}
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
            >
              <span className="text-balance block">Building</span>
              <span className="text-primary light-gradient-text-primary block w-fit mx-auto lg:mx-0 mt-1 sm:mt-2 min-h-[1.1em]">
                <Typewriter strings={[
                  "Scalable Web Apps",
                  "AI-Powered Apps",
                  "B2B Marketplaces",
                  "SaaS Platforms",
                  "E-Commerce Solutions",
                  "Personal Portfolios",
                  "Robust REST APIs"
                ]} />
              </span>
              <span className="text-balance block">with MERN</span>
            </motion.h1>

            <motion.p
              className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 text-pretty"
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
            >
              Hi, I&apos;m{" "}
              <span className="text-foreground font-semibold">
                Muhammad Jawwad Raza
              </span>
              . A MERN Stack Developer with 1.5+ years of experience crafting
              performant, scalable, and user-centric web applications.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto mt-2"
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  onClick={() => handleScroll("portfolio")}
                  className="group w-full"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleScroll("contact")}
                  className="group w-full hover:bg-primary hover:text-white dark:hover:bg-primary/20 dark:hover:text-white dark:hover:border-primary transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              className="mt-10 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "TypeScript",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  variants={pillVariants}
                  whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-secondary/50 text-muted-foreground rounded-full border border-border hover:text-foreground transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </FadeIn>

          {/* Portrait Image */}
          <FadeIn
            direction="left"
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              animate={floatingAnimation}
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-2xl blur-2xl" />

              {/* Image container with border glow */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {/* Gradient border ring */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-primary/50 to-primary/20 rounded-2xl opacity-60" />

                {/* Inner container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary/50 backdrop-blur-sm border border-border">
                  <Image
                    src="/images/porfolio image.jpeg"
                    alt="Muhammad Jawwad Raza – MERN Stack Developer"
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                    className="object-cover object-top"
                    priority={false}
                    loading="lazy"
                  />

                  {/* Color Overlay & Vignette */}
                  <div
                    className="absolute inset-0 bg-primary mix-blend-color opacity-15 pointer-events-none transition-colors duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 dark:from-background/25 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
