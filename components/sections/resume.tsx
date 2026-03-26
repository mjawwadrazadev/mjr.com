"use client"

import { Briefcase, GraduationCap, Languages } from "lucide-react"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "xdstudios.io",
    location: "US (Remote)",
    period: "Apr 2024 – Present",
    highlights: [
      "Developing scalable React & Node.js applications for diverse client requirements",
      "Building secure RESTful APIs with JWT & OAuth authentication",
      "Optimizing MongoDB schemas for improved query performance",
      "Collaborating on UI/UX improvements and conducting thorough code reviews",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "PNY Trainings",
    location: "Pakistan",
    period: "Sep 2023 – Dec 2023",
    highlights: [
      "Converted Figma designs to pixel-perfect React components",
      "Implemented responsive layouts using Tailwind CSS",
      "Managed application state with Redux for complex workflows",
      "Integrated RESTful APIs for dynamic data rendering",
    ],
  },
]

const education = [
  {
    degree: "BS Information Technology",
    institution: "University of Sahiwal",
    period: "2020 – 2024",
  },
  {
    degree: "Full Stack Web Development",
    institution: "PNY Trainings",
    period: "2023",
  },
]

const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Professional" },
]

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 sm:py-20 md:py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="block text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">
            Resume
          </span>
          <div className="inline-block mt-2 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground light-gradient-text mb-2 text-balance">
              Experience & Education
            </h2>
            <div className="relative w-full h-1 overflow-hidden rounded-full bg-primary/20">
              <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent animate-beam" />
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Work Experience */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                Work Experience
              </h3>
            </div>

            <StaggerContainer className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <StaggerItem
                  key={index}
                  className="relative pl-6 sm:pl-8 border-l-2 border-border"
                >
                  <div className="absolute left-0 top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary -translate-x-[6px] sm:-translate-x-[7px]" />
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground">
                        {exp.title}
                      </h4>
                      <span className="text-xs sm:text-sm text-primary font-medium px-2.5 sm:px-3 py-0.5 sm:py-1 bg-primary/10 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                      {exp.company} • {exp.location}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* Education & Languages */}
          <FadeIn direction="right" className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  Education
                </h3>
              </div>

              <StaggerContainer className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <StaggerItem key={index}>
                    <div className="relative rounded-xl overflow-hidden group bg-card border border-border transition-colors">
                      {/* Spinning Comet Border Gradient (Visible on Hover) */}
                      <div
                        className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_2.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                        style={{ background: 'conic-gradient(from 0deg, transparent 0 280deg, var(--primary) 360deg)' }}
                      />

                      {/* Inner mask to create the 2px glowing track inside the 1px physical border */}
                      <div className="absolute inset-[2px] rounded-[10px] bg-card pointer-events-none z-10 transition-colors" />

                      {/* Card Content Wrapper */}
                      <div className="relative p-3 sm:p-4 z-20">
                        <h4 className="text-sm sm:text-base text-foreground font-semibold mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-xs sm:text-sm text-primary font-medium">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Languages */}
            <div className="pt-2 border-t border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Languages
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-secondary text-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {lang.name}
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
