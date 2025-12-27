"use client"

import { useEffect, useState } from "react"

const clients = [
  { name: "NINL", logo: "/valuable_client/VALUABLE_CLIENTS18.jpg" },
  { name: "JAMIPOL", logo: "/valuable_client/VALUABLE_CLIENTS17.jpg" },
  { name: "Gillanders Arbuthnot", logo: "/valuable_client/VALUABLE_CLIENTS16.jpg" },
  { name: "Ditsum", logo: "/valuable_client/18.jpg" },
  { name: "Danieli Corus", logo: "/valuable_client/VALUABLE_CLIENTS15.jpg" },

  { name: "Paul Wurth", logo: "/valuable_client/VALUABLE_CLIENTS14.jpg" },
  { name: "Ditsum", logo: "/valuable_client/VALUABLE_CLIENTS13.jpg" },







  { name: "Tata Steel Jamshedpur", logo: "/valuable_client/VALUABLE_CLIENTS1.jpg" },
  { name: "Tata Steel Kalinganagar", logo: "/valuable_client/VALUABLE_CLIENTS11.jpg" },
  { name: "TRF Limited", logo: "/valuable_client/VALUABLE_CLIENTS12.jpg" },
  { name: "L&T Construction", logo: "/valuable_client/VALUABLE_CLIENTS19.jpeg" },
  { name: "Nuvoco Jaipur", logo: "/valuable_client/VALUABLE_CLIENTS9.jpg" },
  { name: "JUSCO", logo: "/valuable_client/VALUABLE_CLIENTS7.jpg" },
  { name: "Tata Metaliks", logo: "/valuable_client/VALUABLE_CLIENTS6.jpg" },


  { name: "Tata Steel Tube Division", logo: "/valuable_client/VALUABLE_CLIENTS19.jpg" },
  { name: "Tata Steel MeraMandali", logo: "/valuable_client/VALUABLE_CLIENTS4.jpg" },
  { name: "Tata Steel Gamaharia", logo: "/valuable_client/VALUABLE_CLIENTS5.jpg" },


  // { name: "Nuvoco Jaipur", logo: "/valuable_client/VALUABLE_CLIENTS9.jpg" },
  { name: "Jindal Steel & Power", logo: "/valuable_client/VALUABLE_CLIENTS2.jpg" },

  { name: "NINL", logo: "/valuable_client/VALUABLE_CLIENTS3.jpg" },
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
          {/* <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide">VALUABLE CLIENTS</h2> */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-wide relative inline-block">
            VALUABLE CLIENTS
            <span className="absolute left-1/2 -bottom-3 h-1 w-120 -translate-x-1/2 rounded-full bg-orange-500"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`p-6 bg-background rounded-2xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center ${isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"
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
