"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"
import { Zen_Dots } from "next/font/google"

const zenDots = Zen_Dots({ 
  weight: '400',
  subsets: ['latin'],
})

const projects = [
  {
    title: "Surge",
    subtitle: "B2B Renewable Energy Marketplace",
    description:
      "A comprehensive B2B marketplace connecting renewable energy providers with businesses. Features lead distribution, installation tracking, and real-time analytics.",
    image: "/images/surge.png",
    link: "https://usesurge.com/",
    tech: ["Next.js", "App Router", "Server Components", "MongoDB", "Node.js"],
    highlights: [
      "Lead distribution system",
      "Installation tracking",
      "Real-time analytics dashboard",
    ],
  },
  {
    title: "Tangle Social",
    subtitle: "Creator Collaboration Platform",
    description:
      "A social platform designed for content creators to connect, collaborate, and grow together. Built with SSR for optimal SEO and performance.",
    image: "/images/tangle social.png",
    link: "https://tanglesocial.app/",
    tech: ["Nuxt.js", "SSR", "MongoDB", "Express.js", "Tailwind CSS"],
    highlights: [
      "Creator matching algorithm",
      "Collaboration workflows",
      "SEO-optimized content",
    ],
  },
  {
    title: "Dr. Jaffer Khan",
    subtitle: "World-Renowned Plastic Surgeon in Dubai",
    description:
      "A prestige medical portfolio for Dr. Jaffer Khan, showcasing 25+ years of excellence in aesthetic surgery. Built with a focus on high-end medical branding and patient-centric UX.",
    image: "/images/drjaffar.png",
    link: "https://drjafferkhan.brandcaredigital.me/",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    highlights: [
      "25+ years of clinical excellence",
      "Bespoke patient-first approach",
      "B2C Medical Branding",
    ],
  },
  {
    title: "Caterbox",
    subtitle: "Effortless Catering Marketplace",
    description:
      "A specialized marketplace connecting top-tier restaurants and caterers with hosts. Optimized for seamless order management and high-volume catering logistics.",
    image: "/images/caterbox2.png",
    link: "https://caterbox.app/",
    tech: ["React", "Emotion", "React Router", "Stripe", "OpenStreetMap", "Nginx"],
    highlights: [
      "Verified vendor marketplace",
      "Smart order customization",
      "Integrated Stripe payments",
    ],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 sm:mb-20">
          <span className="block text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
            Portfolio
          </span>
          <div className="inline-block mt-2 mb-4">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-tight text-foreground light-gradient-text mb-2 ${zenDots.className}`}>
              Featured Projects
            </h2>
          </div>
        </FadeIn>

        {/* Projects List with Alternating Layout */}
        <StaggerContainer className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>

                {/* Project Image */}
                <div className="w-full lg:w-[60%] group">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative aspect-video overflow-hidden rounded-2xl border border-border bg-secondary/30 shadow-2xl cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-background/80 p-3 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-[40%] space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground light-gradient-text group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Button
                        size="icon"
                        variant="outline"
                        asChild
                        className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-primary font-medium tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Key Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-xs font-medium bg-secondary/50 text-muted-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
