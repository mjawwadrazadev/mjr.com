"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ResumeSection } from "@/components/sections/resume"
import { Footer } from "@/components/footer"

// Lazy load heavy sections
const PortfolioSection = dynamic(
  () =>
    import("@/components/sections/portfolio").then((mod) => ({
      default: mod.PortfolioSection,
    })),
  {
    loading: () => <SectionSkeleton />,
  }
)

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact").then((mod) => ({
      default: mod.ContactSection,
    })),
  {
    loading: () => <SectionSkeleton />,
  }
)

const CustomCursor = dynamic(
  () =>
    import("@/components/custom-cursor").then((mod) => ({
      default: mod.CustomCursor,
    })),
  {
    ssr: false,
  }
)

function SectionSkeleton() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <Suspense fallback={<SectionSkeleton />}>
        <PortfolioSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
      <Footer />
    </main>
  )
}
