"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0a0c] py-16 lg:py-24 border-t border-white/5">
      {/* Ambient gold glow — UI Pro Max accent glow spec */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_30%_50%,rgba(184,134,11,0.07),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(184,134,11,0.05),transparent)] pointer-events-none" />

      {/* Decorative editorial numeral */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden" aria-hidden>
        <span className="font-serif text-[20vw] font-normal text-white/[0.025] leading-none">FAL</span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="h-px w-8 bg-[#B8860B]" />
            <p className="eyebrow text-[#B8860B]">Get Started</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="headline-xl text-[#EDEDEF]"
          >
            Ready to transform<br />
            <span className="italic text-[#B8860B]">your organization?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg font-light leading-relaxed text-[#8A8F98] max-w-xl"
          >
            Partner with us to bring your vision to life and create lasting impact across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group glow-gold inline-flex items-center gap-3 rounded-xl bg-[#B8860B] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#050506] transition-all duration-300 hover:bg-[#D4A949] touch-target"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#8A8F98] transition-all duration-300 hover:border-white/20 hover:text-[#EDEDEF] touch-target"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
