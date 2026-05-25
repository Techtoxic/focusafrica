"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function AboutStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#0f0f0f] py-16 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image — left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden img-zoom">
              <Image
                src="/images/about-preview.jpg"
                alt="Focus Africa Leadership team in discussion"
                fill
                className="object-cover"
              />
              {/* Subtle gold overlay on image bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gold/20 to-transparent" />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-5 -right-5 h-28 w-28 border border-gold/25" />
            <div className="absolute -top-5 -left-5 h-16 w-16 border border-warm-white/8" />
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gold" />
              <p className="eyebrow text-gold">About Us</p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-lg text-warm-white"
            >
              The journey behind<br />
              <span className="italic text-gold/80">Focus Africa</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-5"
            >
              <p className="text-base lg:text-lg font-light leading-relaxed text-warm-white/65">
                Founded in 2016, Focus Africa Leadership was established with a vision to drive 
                sustainable growth, innovation, and empowerment across Africa&apos;s unique business 
                landscape.
              </p>
              <p className="text-base lg:text-lg font-light leading-relaxed text-warm-white/65">
                We believe in the potential of every individual and organization to achieve greatness. 
                With experienced professionals, we deliver unparalleled results and create lasting impact.
              </p>
            </motion.div>

            {/* Inline stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 pt-8 border-t border-warm-white/8 flex gap-10"
            >
              <div>
                <span className="block font-serif text-3xl text-gold font-light">2016</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-warm-white/35">Founded</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-gold font-light">Nairobi</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-warm-white/35">Headquartered</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.12em] text-warm-white transition-colors duration-300 hover:text-gold link-hover"
              >
                Learn Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
