import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PortfolioSection } from "@/components/sections/portfolio"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Portfolio | Muhammad Jawwad Raza - Next.js, MERN & Cloudflare Projects",
  description:
    "Explore real-world projects built by Muhammad Jawwad Raza using Next.js, React, Node.js, MongoDB, and Cloudflare Workers. Includes SaaS platforms, B2B marketplaces, AI-powered apps, and e-commerce solutions.",
  keywords: [
    // - Brand
    "Muhammad Jawwad Raza Portfolio",
    "MJR Developer Projects",

    // - Tech stack (exact match searches)
    "Next.js Developer Portfolio",
    "React Developer Portfolio",
    "MERN Stack Projects",
    "Node.js Developer Projects",
    "MongoDB Projects",
    "TypeScript Developer",
    "Nuxt.js Developer",
    "Cloudflare Workers Projects",
    "Tailwind CSS Developer",
    "Server Components Next.js",

    // - Project types (intent-based)
    "B2B Marketplace Development",
    "B2B SaaS Developer",
    "Creator Platform Development",
    "Social Platform Developer",
    "Medical Website Developer",
    "Catering App Developer",
    "Stripe Payment Integration",
    "E-Commerce Developer",
    "Marketplace App Developer",

    // - Industry verticals
    "Renewable Energy Marketplace",
    "Creator Collaboration Platform",
    "Medical Branding Website",
    "Food Catering Marketplace",
    "Real-time Analytics Dashboard",
    "Lead Distribution System",

    // - Hire intent
    "Hire Full Stack Developer",
    "Hire React Next.js Developer",
    "Hire MERN Stack Developer",
    "Freelance Web Developer Portfolio",
    "Remote Developer for Hire",
    "Best Web Developer Pakistan",
    "Full Stack Developer Case Study",
  ],
  alternates: {
    canonical: "https://mjawwadraza.com/",
  },
  openGraph: {
    title: "Projects Portfolio | Muhammad Jawwad Raza",
    description:
      "Full-stack projects: SaaS, AI-powered apps, B2B marketplaces, and e-commerce - built with Next.js, Cloudflare Workers & MERN stack.",
    url: "https://mjawwadraza.com/portfolio",
    siteName: "MJR Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MJR Projects Portfolio" }],
    type: "website",
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  )
}
