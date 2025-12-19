"use client"

import { useEffect, useState } from "react"
import { Trophy, Award, Star } from "lucide-react"

// const awards = [
//   {
//     title: "Best Contractor Award",
//     organization: "Tata Steel Limited",
//     year: "2022-23",
//     icon: Trophy,
//   },
//   {
//     title: "Overall Best Contractor",
//     organization: "Tata Steel Tubes",
//     year: "2021-22",
//     icon: Award,
//   },
//   {
//     title: "Best Performer Award",
//     organization: "Tata Steel Gamaharia",
//     year: "2020-21",
//     icon: Star,
//   },
//   {
//     title: "Safety Excellence Award",
//     organization: "Tata Steel Kalinganagar",
//     year: "2022",
//     icon: Trophy,
//   },
// ]



const awards = [
  { 
    title: "BEST CONTARACTOR AWARD IN 2010 BY TATA STEEL LTD",
    image: "/award/award1.jpeg",
  },
  {
    title: "FELICITATED BY CHAMBER OF COMMERCE, JAMSHEDPUR",
    image: "/award/award2.jpg",
  },
  {
    title: "RECOGNIZED BY TATA STEEL FOR CONSISTENT EXCELLENCE IN ETHICAL PRACTICES",
    image: "/award/award3.jpeg",
  },
  {
    title: "BEST PERFORMER AWARD - 2018 BY CHIEF A-F, TSJ",
    image: "/award/award4.jpg",
  },

   {
    title: "TROPHY BY 2023-25 CHAMBER OF COMMERCE",
    image: "/certiications/CHAMBER_OF_COMMERCE.jpg",
  },

  {
    title: "BEST SAFETY MEASURES BY ED, JSPL",
    image: "/certiications/c2.jpg",
  },


    {
    title: "BEST SAFE CONTRACTOR OF THE YEAR 2019 - 2020 BY ED, JSPL",
    image: "/certiications/c3.jpg",
  },

    {
    title: "BEST CONTRACTOR AWARD - 2017 BY VP, NVCL",
    image: "/certiications/c4.jpg",
  },







    
]


export default function Awards() {
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

    const element = document.getElementById("awards-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="awards-section"
      className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-wide">OUR AWARDS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized for excellence in engineering, safety, and service delivery across major industrial projects
          </p>
        </div>

         



 

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`relative h-80 rounded-2xl overflow-hidden border border-border shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 ${isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"
                }`}
            >
              {/* Background Image */}
              <img
                src={award.image}
                alt={award.title}
                className="absolute inset-0 w-full h-full "
              />

              {/* Dark gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-sm font-semibold tracking-wide uppercase leading-snug">
                  {award.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
