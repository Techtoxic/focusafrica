"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    /* Editorial parchment — the one moment of pure light before the footer */
    <section ref={ref} className="relative overflow-hidden bg-[#EDE4D4] py-24 lg:py-40">
      {/* Subtle top border in gold */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold/30" />

      {/* Large decorative numeral — editorial texture */}
      <div
        className="absolute right-[-2rem] lg:right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        aria-hidden
      >
        <span className="font-serif text-[18vw] lg:text-[14vw] font-light text-charcoal/4 leading-none">
          FAL
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-gold" />
            <p className="eyebrow text-gold">Get Started</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="headline-xl text-charcoal"
          >
            Ready to transform<br />
            <span className="italic text-gold">your organization?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg font-light leading-relaxed text-charcoal/55 max-w-xl"
          >
            Partner with us to bring your vision to life and create lasting impact across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-charcoal px-9 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-warm-white transition-all duration-300 hover:bg-gold hover:text-charcoal"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="text-sm font-light text-charcoal/50 transition-colors duration-300 hover:text-charcoal link-hover"
            >
              Explore services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
