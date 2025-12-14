"use client"

import { useEffect, useState } from "react"

const projects = [
  {
    category: "Iron Making",
    title: "Blast Furnace Revival Project",
    description: "Complete stave cooler and expansion bellow changing at NINL",
    location: "NINL",
    image: "/blast-furnace-industrial-equipment.jpg",
  },
  {
    category: "Iron Making",
    title: "Grinding Mill Overhauling",
    description: "Complete grinding mill changing and maintenance operations",
    location: "Tata Steel Meramandali",
    image: "/grinding-mill-machinery.jpg",
  },
  {
    category: "Coke Making",
    title: "Fin Fan Installation",
    description: "Advanced cooling system installation at coke plant",
    location: "Tata Steel Jamshedpur",
    image: "/industrial-cooling-system.jpg",
  },
  {
    category: "Cement Plant",
    title: "Platform Construction",
    description: "Civil sealing platform construction project",
    location: "NUVOCO Vistas",
    image: "/cement-plant-construction.jpg",
  },
  {
    category: "Tube Division",
    title: "Equipment Dismantling",
    description: "Hydroforming equipment dismantling and relocation",
    location: "Tata Steel Tube Division",
    image: "/industrial-equipment-dismantling.jpg",
  },
  {
    category: "Special Projects",
    title: "Hot Blast Valve Replacement",
    description: "Complex valve and compensator system installation",
    location: "Tata Steel Meramandali",
    image: "/industrial-valve-equipment.jpg",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects-section" className="py-24 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Major Projects & Executions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
                {/* <div className="absolute " /> */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-secondary/20 backdrop-blur text-white text-xs font-semibold rounded-full border border-secondary/30">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <p className="text-xs text-secondary font-semibold">📍 {project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
