"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Plus, Minus } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Agriculture, Environment & Climate",
    description: "Comprehensive solutions to address climate change and promote sustainable agricultural practices across Africa. We partner with organizations to implement regenerative farming, conservation strategies, and climate resilience programs.",
    href: "/services#agriculture",
  },
  {
    id: "02",
    title: "Research & Development",
    description: "Customer ecosystem analysis, innovation roadmaps, and process optimization for continuous improvement. Our research-driven approach ensures data-backed decisions and strategic insights.",
    href: "/services#research",
  },
  {
    id: "03",
    title: "Training & Capacity Development",
    description: "Corporate governance, agriculture training, finance administration, and expert-led team building programs designed to elevate organizational capabilities and leadership potential.",
    href: "/services#training",
  },
  {
    id: "04",
    title: "Finance & Administration",
    description: "Fund management, financial administration, donor fund management, and organizational health checks. We bring financial clarity and operational excellence to every engagement.",
    href: "/services#finance",
  },
  {
    id: "05",
    title: "Monitoring & Evaluation",
    description: "Indicator development, stakeholder engagement, M&E system design, and impact measurement. Track progress and demonstrate results with our comprehensive evaluation frameworks.",
    href: "/services#monitoring",
  },
]

function ServiceAccordion({ service, isOpen, onClick }: { service: typeof services[0], isOpen: boolean, onClick: () => void }) {
  return (
    <motion.div
      className="border-t border-warm-white/10 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between py-6 lg:py-8">
        <div className="flex items-start gap-6 lg:gap-12">
          <span className="font-serif text-sm text-warm-white/20">{service.id}</span>
          <div className="flex-1">
            <h3 className="font-serif text-xl lg:text-3xl text-warm-white transition-colors duration-300 hover:text-gold">
              {service.title}
            </h3>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-warm-white/50">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gold transition-colors duration-300 hover:text-gold-light"
                onClick={(e) => e.stopPropagation()}
              >
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </div>
        </div>
        <button className="mt-1 p-2 text-warm-white/30 transition-colors duration-300 hover:text-warm-white">
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="bg-[#111111] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left column - sticky header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="eyebrow mb-6 text-gold"
              >
                Our Services
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="headline-md text-warm-white"
              >
                Comprehensive solutions for
                <span className="italic"> Africa&apos;s growth</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-3 border border-warm-white/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-warm-white transition-all duration-300 hover:bg-warm-white hover:text-charcoal"
                >
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right column - accordion */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-b border-warm-white/10"
            >
              {services.map((service, index) => (
                <ServiceAccordion
                  key={service.id}
                  service={service}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
