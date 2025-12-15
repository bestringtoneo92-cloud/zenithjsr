"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Shield, CheckCircle } from "lucide-react"

const certifications = [
  {
    id: 1,
    name: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/iso-9001-2015-certification-badge.jpg",
    icon: Award,
  },
  {
    id: 2,
    name: "ISO 14001:2015",
    description: "Environmental Management",
    image: "/placeholder.svg?height=300&width=300",
    icon: Shield,
  },
  {
    id: 3,
    name: "ISO 45001:2018",
    description: "Occupational Health & Safety",
    image: "/placeholder.svg?height=300&width=300",
    icon: CheckCircle,
  },
  {
    id: 4,
    name: "SA 8000:2014",
    description: "Social Accountability",
    image: "/placeholder.svg?height=300&width=300",
    icon: Award,
  },
]

export default function Certifications() {
  return (
    <section id="certification-section"
    //  className="py-24 bg-gradient-to-b from-background to-muted/30"
     className="py-24 bg-gradient-to-r from-primary/40 via-background to-primary/40"

 
 
    
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            OUR <span className="text-primary">CERTIFICATIONS</span>
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Certified excellence in quality, safety, and environmental management
          </p>
        </motion.div>

 
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{cert.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                
              </motion.div>
            )
            
          })}

        </div>
{/* 
    <div className="flex justify-center mt-20">
          <img
            src="/images/certficate.png"   // <-- replace with your real image
            alt="Company Certifications"
            className="max-w-xl w-full rounded-2xl shadow-2xl border border-border"
          />
        </div> */}

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-20">
  <img
    src="/images/certficate.png"
    alt="Company Certifications"
    className="w-full max-h-[80vh] object-contain mx-auto "
  />
</div>
      </div>
    </section>
  )
}
