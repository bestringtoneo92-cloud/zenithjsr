"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const equipmentItems = [
  {
    id: 1,
    image: "/images/EQUIPMENTS4.jpg",
    alt: "Hydraulic Equipment",
  },
  {
    id: 2,
    image: "/heavy-duty-crane-and-lifting-equipment.jpg",
    alt: "Lifting Equipment",
  },
  {
    id: 3,
    image: "/images/EQUIPMENTS2.jpg",
    alt: "Welding Equipment",
  },
  {
    id: 4,
    image: "/images/EQUIPMENTS3.jpg",
    alt: "Mechanical Tools",
  },
]

export default function Equipment() {
  return (
    <section  id="suppliers-section" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            WE ARE ALSO SUPPLIERS OF <span className="text-primary">EQUIPMENTS</span>
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipmentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
