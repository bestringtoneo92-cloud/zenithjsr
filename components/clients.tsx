"use client"

import { useEffect, useState } from "react"

const clients = [
  { name: "Tata Steel Jamshedpur", logo: "/tata-steel-jamshedpur-logo.jpg" },
  { name: "Tata Steel Kalinganagar", logo: "/tata-steel-kalinganagar-logo.jpg" },
  { name: "Tata Steel Tube Division", logo: "/tata-steel-tube-division-logo.jpg" },
  { name: "Tata Steel MeraMandali", logo: "/tata-steel-meramandali-logo.jpg" },
  { name: "Tata Steel Gamaharia", logo: "/tata-steel-gamaharia-logo.jpg" },
  { name: "Tata Metaliks", logo: "/tata-metaliks-logo.jpg" },
  { name: "JUSCO", logo: "/jusco-logo-quality-services-for-life.jpg" },
  { name: "Nuvoco Jamshedpur", logo: "/nuvoco-jamshedpur-logo.jpg" },
  { name: "Nuvoco Jaipur", logo: "/nuvoco-jaipur-logo.jpg" },
  { name: "L&T Construction", logo: "/letter-L-nature.png" },
  { name: "Jindal Steel & Power", logo: "/jindal-steel-power-logo.jpg" },
  { name: "TRF Limited", logo: "/trf-limited-logo.jpg" },
  { name: "Ditsum", logo: "/ditsum-logo-yellow-black.jpg" },
  { name: "Paul Wurth", logo: "/paul-wurth-logo.jpg" },
  { name: "Danieli Corus", logo: "/danieli-corus-logo.jpg" },
  { name: "Gillanders Arbuthnot", logo: "/gillanders-arbuthnot-logo.jpg" },
  { name: "JAMIPOL", logo: "/placeholder.svg?height=120&width=180" },
  { name: "NINL", logo: "/placeholder.svg?height=120&width=180" },
  { name: "SMS Group", logo: "/placeholder.svg?height=120&width=180" },
]

export default function Clients() {
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

    const element = document.getElementById("clients-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="clients-section" className="py-24 px-4 sm:px-6 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide">VALUABLE CLIENTS</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`p-6 bg-background rounded-2xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center ${
                isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"
              }`}
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="w-full h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
