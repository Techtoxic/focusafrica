"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#111111] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-8 text-gold"
          >
            Get Started
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline-lg text-warm-white"
          >
            Ready to transform
            <br />
            <span className="italic">your organization?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg font-light leading-relaxed text-warm-white/50 max-w-2xl mx-auto"
          >
            Partner with us to bring your vision to life and create lasting impact across Africa.
            Let&apos;s start a conversation about your goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-charcoal transition-all duration-300 hover:bg-gold-light"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-light text-warm-white/60 transition-colors duration-300 hover:text-warm-white"
            >
              Explore our services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
