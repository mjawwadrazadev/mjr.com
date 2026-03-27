import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { TabManager } from "@/components/tab-manager"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://mjawwadraza.com/"),
  title: "Muhammad Jawwad Raza | MERN Stack Developer",
  description:
    "Remote MERN Stack Developer with 1.5+ years of experience building scalable full-stack web applications for clients worldwide. Specializing in React, Next.js, and Node.js.",
  keywords: [
    "Muhammad Jawwad Raza",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Remote React Developer",
    "Remote Next.js Developer",
    "Freelance Web Developer",
    "High Performance Web Applications",
    "Software Engineer Portfolio",
    "Tailwind CSS Expert",
    "Bespoke SaaS Development",
    "Hiring MERN Developer",
    "Enterprise Software Development",
  ],
  authors: [{ name: "Muhammad Jawwad Raza", url: "https://mjawwadraza.com/" }],
  creator: "Muhammad Jawwad Raza",
  openGraph: {
    title: "Muhammad Jawwad Raza | MERN Stack Developer",
    description: "Building Scalable Full-Stack Web Applications with MERN",
    type: "website",
    locale: "en_US",
    url: "https://mjawwadraza.com/",
    siteName: "MJR Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Jawwad Raza - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Jawwad Raza | MERN Stack Developer",
    description: "Building Scalable Full-Stack Web Applications with MERN",
    creator: "@mjawwadraza",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mjawwadraza.com/",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TabManager />
          <div className="overflow-x-hidden min-h-screen">
            {children}
          </div>
          <Analytics />
          {/* JSON-LD Structured Data for Person/Entity */}
          <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Jawwad Raza",
              "jobTitle": "MERN Stack Developer",
              "url": "https://mjawwadraza.com/",
              "sameAs": [
                "https://github.com/mjawwadraza",
                "https://linkedin.com/in/mjawwadraza",
                "https://instagram.com/mjawwad_raza"
              ],
              "description": "Remote MERN Stack Developer with 1.5+ years of experience building scalable full-stack web applications for clients worldwide.",
              "knowsAbout": [
                "Reactjs",
                "Next.js",
                "Node.js",
                "MongoDB",
                "TypeScript",
                "Remote Collaboration",
                "Full Stack Development"
              ],
              "knowsLanguage": ["English", "Urdu"],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Top Ranking CS University"
              }
            })}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  )
}
