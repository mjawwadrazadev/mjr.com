import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ResumeSection } from "@/components/sections/resume"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Resume | Hire Muhammad Jawwad Raza - Next.js & Web Developer CV",
  description:
    "Professional resume of Muhammad Jawwad Raza. Experienced in Next.js, React, Node.js, MongoDB, TypeScript, and Cloudflare Workers. Available for remote freelance and full-time opportunities worldwide.",
  keywords: [
    "Muhammad Jawwad Raza CV",
    "MERN Developer Resume",
    "Hire Next.js Developer",
    "Hire Cloudflare Developer",
    "Remote Full Stack Developer",
    "Web Developer Resume",
    "React Developer for Hire",
    "TypeScript Developer Resume",
    "Freelance Developer Pakistan",
  ],
  alternates: {
    canonical: "https://mjawwadraza.com/",
  },
  openGraph: {
    title: "Resume | Hire Muhammad Jawwad Raza",
    description:
      "Professional developer CV: Next.js, React, Node.js, MongoDB, TypeScript & Cloudflare. Open to remote opportunities.",
    url: "https://mjawwadraza.com/resume",
    siteName: "MJR Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Muhammad Jawwad Raza Developer Resume" }],
    type: "profile",
  },
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ResumeSection />
      </div>
      <Footer />
    </main>
  )
}
