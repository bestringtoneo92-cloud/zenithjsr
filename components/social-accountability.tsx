"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const socialImages = [
  {
    id: 1,
    image: "/social/social1.jpg",
    alt: "Community Development",
  },
  {
    id: 2,
    image: "/social/social2.jpg",

    alt: "Safety Training",
  },
  {
    id: 3,
    image: "/social/social3.jpg",

    alt: "Environmental Care",
  },
  {
    id: 4,
    image: "/social/social4.jpg",

    alt: "Healthcare Support",
  },
  {
    id: 5,
    image: "/social/social17.jpg",

    alt: "Skill Development",
  },
  {
    id: 6,
    image: "/social/social6.jpg",

    alt: "Employee Welfare",
  },
  {
    id: 7,
    image: "/social/social7.jpg",

    alt: "CSR Activities",
  },
  {
    id: 8,
    image: "/social/social8.jpg",

    alt: "Community Outreach",
  },
  {
    id: 9,
    image: "/social/social9.jpg",

    alt: "Worker Rights",
  },
  {
    id: 10,
    image: "/social/social10.jpg",

    alt: "Diversity & Inclusion",
  },
    {
    id: 11,
    image: "/social/social11.jpg",

    alt: "Diversity & Inclusion",
  },
    {
    id: 12,
    image: "/social/social12.jpg",

    alt: "Diversity & Inclusion",
  },
    {
    id: 13,
    image: "/social/social13.jpg",

    alt: "Diversity & Inclusion",
  },
    {
    id: 14,
    image: "/social/social14.jpg",

    alt: "Diversity & Inclusion",
  },
    {
    id: 15,
    image: "/social/social15.jpg",

    alt: "Diversity & Inclusion",
  },

]

export default function SocialAccountability() {
  return (
    <section id="social-section" className="py-24 bg-muted/100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            <span className="text-primary">SOCIAL</span> ACCOUNTABILITY
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Committed to creating a positive impact on society through responsible business practices and community
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {socialImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
