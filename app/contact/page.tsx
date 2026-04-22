import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Book a Meeting with Muhammad Jawwad Raza - Web Developer",
  description:
    "Book a meeting with Muhammad Jawwad Raza - a Remote Next.js & Cloudflare full-stack developer. Schedule a free 15-minute intro call or a 30-minute project consultation. Available for freelance globally.",
  keywords: [
    "Hire Muhammad Jawwad Raza",
    "Book a Meeting Web Developer",
    "Contact Next.js Developer",
    "Hire Cloudflare Developer",
    "Freelance Full Stack Developer",
    "Remote Developer Consultation",
    "Schedule Developer Meeting",
    "Web Development Inquiry",
  ],
  alternates: {
    canonical: "https://mjawwadraza.com/",
  },
  openGraph: {
    title: "Contact & Book a Meeting | Muhammad Jawwad Raza",
    description:
      "Schedule a free 15-min or 30-min consultation with Muhammad Jawwad Raza - Remote Next.js, MERN & Cloudflare developer available for freelance projects.",
    url: "https://mjawwadraza.com/contact",
    siteName: "MJR Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Muhammad Jawwad Raza" }],
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
