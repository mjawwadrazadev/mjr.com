import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TabManager } from "@/components/tab-manager"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://mjawwadraza.com/"),
  title: {
    default: "Muhammad Jawwad Raza | Full-Stack MERN & Next.js Developer",
    template: "%s | Muhammad Jawwad Raza",
  },
  description:
    "Full-Stack MERN & Next.js Developer specializing in scalable web applications, B2B SaaS platforms, and AI integrations. Available for remote engineering roles & contract projects.",
  keywords: [
    "Muhammad Jawwad Raza",
    "Full Stack MERN Developer",
    "Next.js SaaS Engineer",
    "Hire React Node.js Developer",
    "AI Agent Integration Specialist",
    "Cloudflare Workers Developer",
    "Remote Web Developer Pakistan",
    "MERN Stack Developer",
    "Freelance Web Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Muhammad Jawwad Raza", url: "https://mjawwadraza.com/" }],
  creator: "Muhammad Jawwad Raza",
  alternates: {
    canonical: "https://mjawwadraza.com/",
  },
  openGraph: {
    title: "Muhammad Jawwad Raza | Full-Stack MERN & Next.js Developer",
    description:
      "Full-Stack MERN & Next.js Developer specializing in scalable web applications, B2B SaaS platforms, and AI integrations.",
    type: "website",
    locale: "en_US",
    url: "https://mjawwadraza.com/",
    siteName: "Muhammad Jawwad Raza Portfolio",
    images: [
      {
        url: "https://mjawwadraza.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Jawwad Raza - MERN Stack & Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Jawwad Raza | Full-Stack MERN & Next.js Developer",
    description:
      "Full-Stack MERN & Next.js Developer specializing in scalable web applications, B2B SaaS platforms, and AI integrations.",
    creator: "@mjawwadraza",
    images: ["https://mjawwadraza.com/og-image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      <head>
        {/* Anti-ReferenceError Shim for Cloudflare/OpenNext */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof globalThis.__name==='undefined'){globalThis.__name=(f)=>f;}`
          }}
        />
        {/* Multi-Entity JSON-LD Structured Data for GEO/AEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "@id": "https://mjawwadraza.com/#profilepage",
                "url": "https://mjawwadraza.com/",
                "name": "Muhammad Jawwad Raza - MERN Stack & Next.js Developer Portfolio",
                "mainEntity": {
                  "@id": "https://mjawwadraza.com/#person"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://mjawwadraza.com/#person",
                "name": "Muhammad Jawwad Raza",
                "alternateName": ["Jawwad Raza", "MJR"],
                "jobTitle": "Full-Stack MERN & Next.js Engineer",
                "description": "Full-Stack Developer with 2+ years of experience specializing in React, Next.js, Node.js, Express, MongoDB, Cloudflare Workers, and AI Agent integrations.",
                "url": "https://mjawwadraza.com/",
                "image": "https://mjawwadraza.com/og-image.jpg",
                "email": "mjawwadraza.dev@gmail.com",
                "telephone": "+923073450411",
                "nationality": "Pakistani",
                "worksFor": {
                  "@type": "Organization",
                  "name": "xdstudios.io"
                },
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "University of Sahiwal",
                  "sameAs": "https://uosahiwal.edu.pk/"
                },
                "sameAs": [
                  "https://github.com/mjawwadraza",
                  "https://www.linkedin.com/in/muhammad-jawwad-raza-77444b242",
                  "https://instagram.com/mjawwad_raza",
                  "https://cal.com/muhammad-jawwad-raza"
                ],
                "knowsAbout": [
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Cloudflare Workers",
                  "RESTful APIs",
                  "AI Automation",
                  "n8n",
                  "Puppeteer Web Automation",
                  "Tailwind CSS"
                ],
                "knowsLanguage": ["English", "Urdu"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Software Engineering Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Full-Stack MERN & Next.js Web Development",
                        "description": "Custom B2B SaaS, e-commerce, and high-performance marketplace web application development."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI Integration & Automation Engineering",
                        "description": "Integrating LLMs, OpenAI APIs, Puppeteer browser automation, and n8n workflows into web applications."
                      }
                    }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://mjawwadraza.com/#website",
                "url": "https://mjawwadraza.com/",
                "name": "Muhammad Jawwad Raza Portfolio",
                "publisher": {
                  "@id": "https://mjawwadraza.com/#person"
                }
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-foreground selection:bg-primary/30`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TabManager />
          <div className="overflow-x-hidden min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
