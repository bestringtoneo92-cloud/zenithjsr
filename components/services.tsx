"use client"

import { useEffect, useState } from "react"
import { Wrench, Box, Settings, Zap, Shield, Users } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Mechanical Maintenance",
    description: "Expert maintenance of heavy equipment and machinery systems",
        bg: "/images/home2.jpg",

  },
  {
    icon: Box,
    title: "Fabrication",
    description: "Precision fabrication of custom metal components and assemblies",
        bg: "/images/home2.jpg",

  },
  {
    icon: Settings,
    title: "Installation & Erection",
    description: "Professional installation and erection of complex equipment",
        bg: "/images/home2.jpg",

  },
  {
    icon: Zap,
    title: "Commissioning",
    description: "Complete commissioning and testing services",
        bg: "/images/home2.jpg",

  },
  {
    icon: Shield,
    title: "Safety Management",
    description: "Industry-leading safety standards and protocols",
        bg: "/images/home2.jpg",

  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained engineers and technical professionals",
        bg: "/images/home2.jpg",

  },
]

export default function Services() {
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

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (

    <section
  id="services-section"
  className="relative py-24 px-4 sm:px-6 lg:px-12 overflow-hidden
             bg-[url('/images/home1.jpg')] bg-cover bg-center"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-background/80 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
        Our Services
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
        Comprehensive Engineering Solutions
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden border border-border
              hover:border-primary transition-all duration-300
              hover:shadow-lg hover:shadow-primary/10 group cursor-pointer
              ${isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"}
            `}
          >
            {/* Card Background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105
                         group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: `url(${service.bg})` }}
            />

            {/* Card Overlay */}
            <div className="absolute inset-0 bg-background/75 group-hover:bg-background/60 transition-colors" />

            {/* Card Content */}
            <div className="relative z-10 p-8">
              <div className="mb-4 inline-flex p-3 bg-primary/20 rounded-lg backdrop-blur">
                <Icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  </div>
</section>


//   <section
//   id="services-section"
//   className="relative py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
// >
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 -z-10 bg-cover bg-center"
//     style={{
//       backgroundImage: "url(/images/home2.jpg)",
//     }}
//   >
//     {/* Overlay */}
//     <div className="absolute inset-0 bg-background/80" />
//   </div>

//   {/* Content */}
//   <div className="max-w-6xl mx-auto">
//     <div className="text-center mb-16">
//       <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
//         Our Services
//       </span>
//       <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
//         Comprehensive Engineering Solutions
//       </h2>
//     </div>

//     <div className="grid md:grid-cols-3 gap-8">
//       {services.map((service, index) => {
//         const Icon = service.icon
//         return (
//           <div
//   key={index}
//   className={`relative rounded-xl overflow-hidden border border-border
//     hover:border-primary transition-all duration-300
//     hover:shadow-lg hover:shadow-primary/10 group cursor-pointer
//     ${isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"}
//   `}
// >
//   {/* Card Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
//     style={{ backgroundImage: `url(${service.bg})` }}
//   />

//   {/* Card Overlay */}
//   <div className="absolute inset-0 bg-background/75 group-hover:bg-background/60 transition-colors" />

//   {/* Card Content */}
//   <div className="relative z-10 p-8">
//     <div className="mb-4 inline-flex p-3 bg-primary/20 rounded-lg backdrop-blur">
//       <Icon className="w-6 h-6 text-primary" />
//     </div>

//     <h3 className="text-xl font-bold text-foreground mb-3">
//       {service.title}
//     </h3>

//     <p className="text-muted-foreground leading-relaxed">
//       {service.description}
//     </p>
//   </div>
// </div>

  
//         )
//       })}
//     </div>
//   </div>
// </section>

  )
}




  //   <section id="services-section" className="py-24 px-4 sm:px-6 lg:px-12 bg-background">
  //     {/* <div className="max-w-6xl mx-auto"> */}
  //     <div
  //       className="absolute inset-0 -z-10 bg-cover bg-center"
  //       style={{
  //         backgroundImage: "url(/images/home2.jpg)",
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //       }}
  //     >
  //       <div className="absolute inset-0 bg-background/80">
  //       <div className="text-center mb-16" >
  //         <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Our Services</span>
  //         <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
  //           Comprehensive Engineering Solutions
  //         </h2>
  //  </div>

  //       <div className="grid md:grid-cols-3 gap-8">
  //         {services.map((service, index) => {
  //           const Icon = service.icon
  //           return (
  //             <div
  //               key={index}
  //               className={`p-8 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer ${
  //                 isVisible ? `animate-fadeInUp stagger-${(index % 4) + 1}` : "opacity-0"
  //               }`}
  //             >
  //               <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
  //                 <Icon className="w-6 h-6 text-primary" />
  //               </div>
  //               <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
  //               <p className="text-muted-foreground leading-relaxed">{service.description}</p>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     </div>
  //         </div> 
  //   </section>