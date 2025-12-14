"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function About() {
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

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="relative py-24 px-4 sm:px-6 lg:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-6 ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div>
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
                Decades of Engineering Excellence
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Established in 1983, Zenith Engineering Company is an ISO-certified vendor and a leading contractor
                specializing in Mechanical Maintenance, Fabrication, Installation, Erection, and Commissioning of heavy
                equipment.
              </p>
              <p>
                With over four decades of proven expertise and excellence, we were honored with the Best Contractor
                Award in 2010, a testament to our commitment to quality, safety, and customer satisfaction.
              </p>
              <p>
                Our team of expert engineers and technicians work tirelessly to deliver exceptional results across major
                industries including Steel, Power, and Cement.
              </p>
            </div>

            {/* ISO Certifications */}
            <div className="pt-4 space-y-3">
              <p className="font-semibold text-foreground">Certifications:</p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-background rounded-lg border border-border">
                  <p className="text-sm font-semibold  text-orange-500">ISO 9001:2015</p>
                </div>
                <div className="px-4 py-2 bg-background rounded-lg border border-border">
                  <p className="text-sm font-semibold text-orange-500">ISO 45001:2018</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`${isVisible ? "animate-fadeInUp stagger-2" : "opacity-0"}`}>
<div className="relative h-[28rem] rounded-2xl overflow-hidden shadow-2xl border border-border">
       
<Image
  src="/images/Aboutus1.jpg"
  alt="Manufacturing facility"
  fill
  priority
  className="object-cover"
/>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
