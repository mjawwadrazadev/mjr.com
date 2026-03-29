import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/sections/about"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Muhammad Jawwad Raza — Next.js & Cloudflare Developer",
  description:
    "About Muhammad Jawwad Raza — a Remote Next.js, React & Cloudflare Workers developer with 1.5+ years of experience. Specializing in scalable web apps and AI automation for global clients.",
  keywords: [
    "Muhammad Jawwad Raza",
    "About MERN Developer",
    "Next.js Developer",
    "Cloudflare Workers Developer",
    "Remote Web Developer",
    "AI Automation Expert",
    "Full Stack Developer Pakistan",
  ],
  alternates: {
    canonical: "https://mjawwadraza.com/",
  },
  openGraph: {
    title: "About Muhammad Jawwad Raza | Next.js & Cloudflare Developer",
    description:
      "Remote Next.js, React & Cloudflare developer with 1.5+ years of experience building scalable web apps and AI automation solutions.",
    url: "https://mjawwadraza.com/about",
    siteName: "MJR Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Muhammad Jawwad Raza — Developer" }],
    type: "profile",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
