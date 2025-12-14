"use client"

import { useEffect, useState } from "react"
import { Shield, Award, Leaf, Users } from "lucide-react"

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: Award,
    badge: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management System",
    icon: Leaf,
    badge: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "ISO 45001:2018",
    description: "Occupational Health & Safety",
    icon: Shield,
    badge: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "SA 8000:2014",
    description: "Social Accountability Standard",
    icon: Users,
    badge: "/placeholder.svg?height=100&width=100",
  },
]

export default function CertificationsHome() {
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

    const element = document.getElementById("certifications-home-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications-home-section" className="py-24 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide">CERTIFICATIONS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Certified by international standards for quality, safety, environment, and social accountability
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div
                key={index}
                className={`bg-muted/30 rounded-2xl border-2 border-border p-8 hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group ${
                  isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"
                }`}
              >
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}