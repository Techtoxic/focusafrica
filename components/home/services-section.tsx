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
      className="border-t border-charcoal/10 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between py-6 lg:py-8">
        <div className="flex items-start gap-5 lg:gap-10 flex-1 min-w-0">
          <span className="font-serif text-sm text-charcoal/20 pt-1 shrink-0">{service.id}</span>
          <div className="flex-1 min-w-0">
            <h3 className={`font-serif text-xl lg:text-2xl xl:text-3xl transition-colors duration-300 font-light ${isOpen ? 'text-gold' : 'text-charcoal group-hover:text-charcoal/70'}`}>
              {service.title}
            </h3>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-charcoal/60">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gold transition-colors duration-300 hover:text-gold-light"
                onClick={(e) => e.stopPropagation()}
              >
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </div>
        </div>
        <button className={`mt-1 ml-4 p-1.5 shrink-0 transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-charcoal/25 group-hover:text-charcoal/50'}`}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
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
    <section ref={ref} className="bg-warm-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left column — sticky header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-8 bg-gold" />
                <p className="eyebrow text-gold">Our Services</p>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="headline-md text-charcoal"
              >
                Comprehensive solutions for Africa&apos;s growth
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base font-light leading-relaxed text-charcoal/55"
              >
                Five practice areas, one unified mission: sustainable impact across the continent.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-3 border border-charcoal/25 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-warm-white"
                >
                  View All Services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-b border-charcoal/10"
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
