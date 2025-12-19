"use client"

import { useEffect, useState } from "react"

const awards = [
  {
    image: "/award&recogition/award&recogition2.jpeg",
    title: "AWARDED BY TATA STEEL MD FOR BEST SAFETY PRACTICES",
    year: "2019",
  },
  {
    image: "/award&recogition/award&recogition3.jpg",
    title: "BEST SUPERVISOR ",
    year: "2010",
  },
  {
    image: "/award&recogition/award&recogition4.jpg",
    title: "APPRECIATION BY CHIEF, TSJ ",
    year: "2018",
  },
  {
    image: "/award&recogition/award&recogition5.jpg",
    title: "REWARD FOR EXCELLENCE JOB",
    year: "2019-2020",
  },
  {
    image: "/award&recogition/award&recogition6.jpg",
    title: "RECOGNISED FOR EXCELLENCE ",
    year: "2017",
  },
  {
    image: "/award&recogition/award&recogition7.jpg",
    title: "APPRECIATION FOR QUALITY JOB",
    year: "2016",
  },
]

export default function Recognition() {
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

    const element = document.getElementById("recognition-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="recognition-section" className="py-24 px-4 sm:px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Rewards & Recognition</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Industry-Leading Achievements
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognized by leading organizations for excellence in engineering, safety, and project execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`group bg-background rounded-xl border border-border overflow-hidden hover:border-secondary hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 cursor-pointer ${
                isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"
              }`}
            >
              {/* Award Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={award.image || "/placeholder.svg"}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                {/* <span className="absolute bottom-3 right-3 px-3 py-1 bg-secondary/90 text-background text-xs font-bold rounded-full">
                  {award.year}
                </span> */}
              </div>

              {/* Award Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {award.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Star Rating */}
        <div
          className={`mt-16 p-8 bg-background rounded-xl border border-border text-center ${
            isVisible ? "animate-fadeInUp stagger-4" : "opacity-0"
          }`}
        >
          <p className="text-5xl font-bold text-secondary mb-2">★★★★</p>
          <p className="text-lg font-semibold text-foreground mb-2">TATA STEEL Contractor Safety Management Standard</p>
          <p className="text-muted-foreground">Consistent performance and commitment to safety excellence</p>
        </div>
      </div>
    </section>
  )
}
