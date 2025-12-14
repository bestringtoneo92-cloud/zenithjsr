import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Clients from "@/components/clients"
import Equipment from "@/components/equipment"
import Projects from "@/components/projects"
import Awards from "@/components/awards"
import Recognition from "@/components/recognition"
import SocialAccountability from "@/components/social-accountability"
import CertificationsHome from "@/components/certifications-home"
import Certifications from "@/components/certifications"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Clients />
      <Equipment />
      <Projects />
      <Awards />
      <Recognition />
      <SocialAccountability />
      {/* <CertificationsHome /> */}
      <Certifications />
      <CTA />
      <Footer />
    </main>
  )
}
