"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Check } from "lucide-react"

const services = [
  {
    id: "agriculture",
    number: "01",
    title: "Agriculture, Environment & Climate",
    description: "Comprehensive solutions to address climate change and promote sustainable agricultural practices across the African continent. We help organizations build resilience and drive positive environmental impact.",
    image: "/images/service-agriculture.jpg",
    subServices: [
      "Climate Change Adaptation strategies",
      "Capacity Building for NGOs and government",
      "Research and Innovation in carbon sequestration",
      "Support for Farmers and Pastoralists",
    ],
  },
  {
    id: "research",
    number: "02",
    title: "Research & Development",
    description: "Driving innovation through comprehensive research services that help organizations stay ahead of the curve. Our data-driven approach ensures informed decision-making.",
    image: "/images/service-research.jpg",
    subServices: [
      "Customer Ecosystem Analysis",
      "Innovation Roadmaps development",
      "Process Optimization strategies",
      "Continuous Learning implementation",
    ],
  },
  {
    id: "training",
    number: "03",
    title: "Training & Capacity Development",
    description: "Empowering teams with the knowledge and skills needed to excel in today's competitive landscape. We design tailored programs for lasting organizational growth.",
    image: "/images/service-training.jpg",
    subServices: [
      "Corporate Governance training",
      "Agriculture & Agribusiness programs",
      "Finance & Administration workshops",
      "Team Building and Leadership",
    ],
  },
  {
    id: "finance",
    number: "04",
    title: "Finance & Administration",
    description: "Robust financial management and administrative support to ensure organizational health and sustainability. We bring clarity and efficiency to your operations.",
    image: "/images/service-finance.jpg",
    subServices: [
      "Fund Management services",
      "Financial Administration support",
      "Donor Fund Management",
      "Organizational Health Checks",
    ],
  },
  {
    id: "monitoring",
    number: "05",
    title: "Monitoring & Evaluation",
    description: "Data-driven insights to measure impact and ensure programs achieve their intended outcomes. Track progress and demonstrate results with precision.",
    image: "/images/service-monitoring.jpg",
    subServices: [
      "Indicator Development frameworks",
      "Stakeholder Engagement strategies",
      "M&E System Design",
      "Impact Measurement",
    ],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-0"
    >
      {/* Image */}
      <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px] overflow-hidden img-zoom ${isEven ? "" : "lg:order-2"}`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
        <span className="absolute bottom-8 left-8 font-serif text-8xl text-warm-white/10">
          {service.number}
        </span>
      </div>
      
      {/* Content */}
      <div className={`flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-20 ${isEven ? "bg-[#0a0a0a]" : "bg-[#111111]"}`}>
        <p className="eyebrow mb-4 text-gold">{service.number}</p>
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
          {service.title}
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed text-charcoal/60">
          {service.description}
        </p>
        <ul className="mt-8 space-y-4">
          {service.subServices.map((subService) => (
            <li key={subService} className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
              <span className="text-sm text-charcoal/70">{subService}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-charcoal transition-colors duration-300 hover:text-gold link-hover"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const heroRef = useRef(null)
  const ctaRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
    <>
      <Navigation variant="dark" />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[60vh] bg-charcoal flex items-end pb-20 lg:pb-32 pt-32">
          <div className="absolute inset-0">
            <Image
              src="/images/services-hero.jpg"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
          </div>
          
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6 text-gold"
            >
              What We Offer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-xl text-warm-white max-w-4xl"
            >
              Comprehensive
              <br />
              <span className="italic">consultancy services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg font-light text-warm-white/60"
            >
              Tailored solutions designed to address the unique challenges 
              facing African organizations and businesses.
            </motion.p>
          </div>
        </section>

        {/* Services List */}
        <section>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="bg-[#0d0d0d] py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="eyebrow mb-6 text-gold"
              >
                Get Started
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="headline-lg text-warm-white"
              >
                Ready to transform
                <br />
                <span className="italic">your organization?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 text-lg font-light leading-relaxed text-warm-white/50 max-w-xl mx-auto"
              >
                Let&apos;s discuss how our services can help you achieve your goals 
                and drive sustainable growth across Africa.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="mt-12 group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-charcoal transition-all duration-300 hover:bg-gold-light"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
