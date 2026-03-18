"use client"

import { Code2, Layers, Rocket, Shield } from "lucide-react"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "@/components/motion-wrapper"

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, readable, and well-documented code following industry best practices.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Building applications with scalability in mind, from database design to API structure.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description:
      "Optimizing applications for speed and efficiency using modern techniques and tools.",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description:
      "Implementing robust authentication, authorization, and data protection strategies.",
  },
]

const frontendTech = [
  "React.js",
  "Next.js",
  "Nuxt.js",
  "Redux",
  "Tailwind CSS",
  "Material UI",
  "HTML5",
  "CSS3",
]

const backendTech = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "RESTful APIs",
  "JWT Auth",
  "OAuth",
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Passionate MERN Stack Developer
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full" />
        </FadeIn>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start mb-16 sm:mb-20">
          <FadeIn direction="left" className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              With{" "}
              <span className="text-foreground font-semibold">
                1.5+ years of professional experience
              </span>
              , I specialize in building full-stack web applications using the
              MERN stack. My focus is on creating scalable, performant, and
              user-centric solutions that solve real-world problems.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I have worked on diverse projects including{" "}
              <span className="text-foreground font-semibold">
                e-commerce platforms
              </span>
              ,{" "}
              <span className="text-foreground font-semibold">
                SaaS applications
              </span>
              , and{" "}
              <span className="text-foreground font-semibold">
                education platforms
              </span>
              . I am passionate about clean architecture, code quality, and
              delivering exceptional user experiences.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Based in{" "}
              <span className="text-foreground font-semibold">Pakistan</span>, I
              collaborate with teams and clients worldwide, bringing dedication
              and expertise to every project.
            </p>
          </FadeIn>

          {/* Tech Stack */}
          <FadeIn direction="right" className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-6 sm:w-8 h-0.5 bg-primary" />
                Frontend Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-secondary text-foreground rounded-md border border-border hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-6 sm:w-8 h-0.5 bg-primary" />
                Backend Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-secondary text-foreground rounded-md border border-border hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <ScaleOnHover className="h-full">
                <div className="p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
