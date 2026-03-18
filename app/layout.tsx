import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Muhammad Jawwad Raza | MERN Stack Developer",
  description:
    "MERN Stack Developer with 1.5+ years of experience building scalable full-stack web applications. Specializing in React.js, Next.js, Node.js, and MongoDB.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Web Developer",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Jawwad Raza" }],
  openGraph: {
    title: "Muhammad Jawwad Raza | MERN Stack Developer",
    description:
      "Building Scalable Full-Stack Web Applications with MERN",
    type: "website",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="overflow-x-hidden min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
