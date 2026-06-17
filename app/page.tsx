import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ClientsMarquee } from "@/components/home/clients-marquee"
import { AboutStrip } from "@/components/home/about-strip"
import { ServicesSection } from "@/components/home/services-section"
import { ProcessSection } from "@/components/home/process-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTABanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        {/* Page-wide faded grid backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 text-ink/[0.05] pattern-grid-page"
        />
        <HeroSection />
        <StatsSection />
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
