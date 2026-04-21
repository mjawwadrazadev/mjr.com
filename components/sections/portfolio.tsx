"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"
import { Zen_Dots, JetBrains_Mono } from "next/font/google"

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '700', '800'],
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
    tech: ["Nuxt.js", "SSR", "MongoDB", "Socket.io", "Express.js", "Tailwind CSS"],
    highlights: [
      "Creator matching algorithm",
      "Collaboration workflows",
      "SEO-optimized content",
      "Live chat Feature"
    ],
  },
  /* {
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
  }, */
  {
    title: "Caterbox",
    subtitle: "Effortless Catering Marketplace",
    description:
      "A specialized marketplace connecting top-tier restaurants and caterers with hosts. Optimized for seamless order management and high-volume catering logistics.",
    image: "/images/caterbox2.png",
    link: "#",
    tech: ["React", "Emotion", "React Router", "Stripe", "Doordash API", "OpenStreetMap", "Nginx"],
    highlights: [
      "Verified vendor marketplace",
      "Smart order customization",
      "Integrated Stripe payments",
    ],
  },
  // {
  //   title: "Think Furniture",
  //   subtitle: "Premium E-commerce Furniture Marketplace",
  //   description:
  //     "A high-performance commercial furniture platform featuring advanced product filtering, dynamic inspiration galleries, and a streamlined multi-step checkout workflow.",
  //   image: "/images/think-furniture.png",
  //   link: "https://thinkfurniture.com/",
  //   tech: ["React 19", "Vite", "React Router 7", "Tailwind CSS", "SEO Engine"],
  //   highlights: [
  //     "Dynamic B2B Furniture Catalog",
  //     "Interactive Inspiration Galleries",
  //     "Automated Sitemap & SEO Management",
  //   ],
  // },
  {
    title: "PMS Automation",
    subtitle: "Enterprise Browser & Logistics Dashboard",
    description:
      "A sophisticated business automation system integrating GoLogin and Puppeteer. Manages multi-profile browser synchronization, automated shipment logistics, and complex financial reporting.",
    image: "/images/pms.png",
    link: "#",
    tech: ["Next.js 16", "Puppeteer", "SMSPVA API", "GoLogin API", "MongoDB", "ApexCharts"],
    objectFit: "contain",
    highlights: [
      "Deep Browser Profile Syncing",
      "Automated Shipment Tracking",
      "Real-time Data Visualization",
    ],
  },
  {
    title: "Opportunist",
    subtitle: "Global Career Intelligence & Discovery Engine",
    description:
      "A sophisticated professional ecosystem designed to unify disparate global opportunities—ranging from internships and volunteer roles to technical competitions—into a single actionable feed. It features a personalized impact dashboard with real-time analytics to help users track their growth and professional milestones.",
    image: "/images/opportunist.png",
    link: "https://opportunist.app/",
    tech: [
      "MERN Ecosystem",
      "Node.js & Express.js",
      "MongoDB Atlas",
      "JWT Authentication",
      "Stripe Payments",
      "Cloudify CI/CD",
    ],
    highlights: [
      "Unified Opportunity Aggregation",
      "Real-time Personal Analytics",
      "Secure JWT Architecture",
    ],
  },
  {
    title: "Habbits Food",
    subtitle: "Enterprise Food Commerce & Global Distribution",
    description:
      "A high-performance B2B and B2C marketplace engineered for the food industry. It streamlines global procurement through automated distributor onboarding, interactive digital catalogs, and a unified administrative command center for real-time logistics tracking.",
    image: "/images/habbits.png",
    link: "https://habitts.pk/",
    tech: [
      "Leopard courier integration",
      "Node.js & Express.js",
      "MongoDB Atlas",
      "Framer Motion",
      "Lenis Smooth Scroll",
    ],
    highlights: [
      "Hybrid B2X Infrastructure",
      "Optimized Digital Catalog",
      "Enterprise Management Dashboard",
    ],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-10 sm:mb-16">
          <span className={`block text-primary text-xs sm:text-sm font-bold tracking-wider uppercase ${jetBrainsMono.className}`}>
            Portfolio
          </span>
          <div className="inline-block mt-2 mb-4">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-tight text-foreground light-gradient-text mb-2 py-1 leading-normal ${zenDots.className}`}>
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
                <FadeIn
                  direction={index % 2 === 0 ? "right" : "left"}
                  className="w-full lg:w-[60%] group"
                  duration={1.0}
                >
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block relative aspect-video overflow-hidden rounded-2xl border border-border ${(project as any).objectFit === 'contain' ? 'bg-[#f8fafc]' : 'bg-secondary/30'} shadow-2xl cursor-pointer`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`${(project as any).objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-top transition-transform duration-700 group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-background/80 p-3 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">
                          <ExternalLink className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className={`relative aspect-video overflow-hidden rounded-2xl border border-border ${(project as any).objectFit === 'contain' ? 'bg-[#f8fafc]' : 'bg-secondary/30'} shadow-2xl`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`${(project as any).objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-top transition-transform duration-700`}
                      />
                    </div>
                  )}
                </FadeIn>

                {/* Project Content */}
                <FadeIn
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="w-full lg:w-[40%] space-y-6"
                  duration={1.0}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl sm:text-3xl font-extrabold text-foreground light-gradient-text group-hover:text-primary transition-colors ${jetBrainsMono.className}`}>
                        {project.title}
                      </h3>
                      {project.link && project.link !== "#" && (
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
                      )}
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
                        className={`px-4 py-1.5 text-xs font-medium bg-secondary/50 text-muted-foreground rounded-full border border-border ${jetBrainsMono.className}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
