"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import ContactDialog from "./contact-dialog"

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showContactDialog, setShowContactDialog] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/home2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}     >


        {/* <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r    to-background/40" /> */}


        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-900/50 to-blue-900/20" />


      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-8 h-screen items-center px-4 sm:px-6 lg:px-12">
        <div className={`space-y-6 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="mb-8">
            <img src="/images/weblogo.png" alt="Zenith Engineering Company" className="h-20" />
          </div>




          <div
            className={`inline-block ${isVisible ? "animate-tagline" : "opacity-0"
              }`}
          >
            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase relative">
              Engineering Excellence Since 1983
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500/40 animate-underline" />
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white text-foreground">
            Zenith Engineering Company
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white max-w-xl leading-relaxed">
            ISO-certified leader in mechanical maintenance, fabrication, installation, and commissioning of heavy
            equipment for steel, power, and cement industries.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setShowContactDialog(true)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <p className="text-3xl font-bold text-orange-500">
                {/* 40+ */}
                <Counter end={40} suffix="+" />

              </p>
              <p className="text-sm text-white ">Years in Industry</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">
                <Counter end={2000} suffix="+" />
                {/* 1000+ */}
              </p>
              <p className="text-sm text-white">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">
                <Counter end={350} suffix="+" />

                {/* 50+ */}
              </p>
              <p className="text-sm text-white">Smart Technicians</p>
            </div>
          </div>
        </div>


        <div
          className={`hidden lg:block ${isVisible ? "animate-slideInRight" : "opacity-0"
            }`}
        >
          <div className="relative rounded-2xl overflow-hidden border-4 border-secondary/60 shadow-2xl shadow-secondary/40">
            <img
              src="/images/home2.jpg"
              alt="Zenith Engineering industrial equipment"
              className="
        w-full h-[600px] object-cover
        animate-heroImage
        transition-transform duration-[6000ms] ease-out
        hover:scale-105
      "
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-secondary" />
      </div>

      <ContactDialog open={showContactDialog} onOpenChange={setShowContactDialog} />
    </section>
  )
}
