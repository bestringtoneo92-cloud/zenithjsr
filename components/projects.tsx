"use client"

import { useEffect, useState } from "react"

const projects = [
  {
    category: "Iron Making",
    title: "Blast Furnace Revival Project",
    description: "Complete Revival of Blast Furnace at NINL",
    location: "NINL",
    image: "/blast-furnace-industrial-equipment.jpg",
  },


    {
    category: "Iron Making",
    title: "Stave Cooler Removal & Fixing",
    description: "Expert stave cooler removal and fixing service at Tata Steel, Jamshedpur",
    location: "Tata Steel JamshedpURur",
    image: "/11.jpg",
  },
  

  {
    category: "Iron Making",
    title: "Grinding Mill Overhauling",
    description: "Complete grinding mill changing and maintenance operations",
    location: "Tata Steel Jamshedpur and Meramandali",
    image: "/WhatsApp Image 2025-12-19 at 09.38.52.jpeg",
  },
  {
    category: "Coke Making",
    title: "Cooling Chamber Installation",
    description: "Advanced cooling system installation at coke plant",
    location: "Tata Steel Jamshedpur",
    image: "/industrial-cooling-system.jpg",
  },
  {
    category: "Cement Plant",
    title: "Installation of Material Handling System",
    description: "Civil sealing platform construction project",
    location: "NUVOCO Vistas",
    image: "/cement-plant-construction.jpg",
  },
  {
    category: "Tube Division",
    title: "Equipment Dismantling",
    description: "Hydroforming equipment dismantling and relocation",
    location: "Tata Steel Tube Division",
    image: "/WhatsApp Image 2025-12-18 at 21.21.19.jpeg",
  },
  {
    category: "Special Projects",
    title: "Hot Blast Valve Replacement",
    description: "Complex valve and compensator system installation",
    location: "Tata Steel Jamshedpur and Meramandali",
    image: "/WhatsApp Image 2025-12-18 at 21.21.20.jpeg",
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
    <section id="projects-section" className="relative py-24 px-4 sm:px-6 lg:px-12
  bg-gradient-to-r from-primary/80 via-primary/900 to-primary/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div>  <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Portfolio</span></div>
          {/* <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Major Projects & Executions
          </h2> */}
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-foreground mt-4 z-10">
            Major Projects & Executions
            <span className="absolute left-0 bottom-1 w-full h-10 bg-orange-500/70 z-[-1] rotate-[-1deg] rounded-sm"></span>
          </h2>


        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"
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
