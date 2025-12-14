"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import ContactDialog from "./contact-dialog"

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showContactDialog, setShowContactDialog] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cta-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="cta-section"
      className="relative py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-primary/20 via-background to-background overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <div className={`space-y-6 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Ready to Partner with Zenith?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Achieve zero harm to people and plants while creating value for your customers. Let our expert team deliver
            exceptional engineering solutions for your next project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group" 
             onClick={() => {
    const section = document.getElementById("projects-section")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }}
            >
               View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"   onClick={() => {
    const section = document.getElementById("projects-section")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }}>
              View Projects
            </button> */}
                  <ContactDialog open={showContactDialog} onOpenChange={setShowContactDialog} />
            
          </div>
        </div>
      </div>
    </section>
  )
}
