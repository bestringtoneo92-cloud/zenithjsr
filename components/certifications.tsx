"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Shield, CheckCircle } from "lucide-react"

const certifications = [
  {
    id: 1,
    name: "TROPHY BY 2023-25",
    image: "/certiications/c6.pdf",

  },
  {
    id: 2,
    name: "BEST SAFETY MEASURES",
    image: "/certiications/c7.pdf",

  },
  {
    id: 3,
    name: "YEAR 2019 - 2020",
    image: "/certiications/c8.pdf",

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



{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
  {certifications.map((cert, index) => (
    <motion.div
      key={cert.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group bg-card rounded-lg overflow-hidden shadow-lg border border-border w-full max-w-md
        ${index === 0 && certifications.length === 3 ? "lg:col-start-2" : ""}
      `}
    >
      <div className="h-[493px] bg-muted flex items-center justify-center">
        <iframe
          src={`${cert.image}#toolbar=0&navpanes=0&zoom=page-width`}
          title={cert.name}
          className="w-full h-full"
        />
      </div>
    </motion.div>
  ))}
</div> */}


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
  {certifications.map((cert, index) => (
    <motion.div
      key={cert.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden shadow-lg border border-border w-full max-w-md"
    >
      <div className="h-[629px] bg-muted">
        <iframe
          src={`${cert.image}#toolbar=0&navpanes=0`}
          title={cert.name}
          className="w-full h-full"
        />
      </div>
    </motion.div>
  ))}
</div>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-20">
          <img
            src="/certiications/c9.jpg"
            alt="Company Certifications"
            className="w-full max-h-[50vh] object-contain mx-auto "
          />
        </div>



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
