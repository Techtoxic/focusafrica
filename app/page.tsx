import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutStrip } from "@/components/home/about-strip"
import { ServicesSection } from "@/components/home/services-section"
import { ProcessSection } from "@/components/home/process-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTABanner } from "@/components/home/cta-banner"
import { ClientsMarquee } from "@/components/home/clients-marquee"

export default function HomePage() {
  return (
    <>
      <Navigation variant="dark" />
      <main>
        <HeroSection />
        <ClientsMarquee />
        <AboutStrip />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
