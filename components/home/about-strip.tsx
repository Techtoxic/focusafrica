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
    <section ref={ref} className="bg-[#F0EBE2] py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden img-zoom">
              <Image
                src="/images/about-preview.jpg"
                alt="Focus Africa Leadership team"
                fill
                className="object-cover"
              />
            </div>
            {/* Offset decorative frames */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 border border-gold/40" />
            <div className="absolute -top-4 -left-4 h-20 w-20 border border-charcoal/10" />
            {/* Year badge */}
            <div className="absolute top-8 -right-4 lg:-right-8 bg-charcoal px-5 py-4">
              <span className="block font-serif text-3xl text-gold font-light leading-none">2016</span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-warm-white/40 mt-1">Founded</span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="h-px w-10 bg-gold" />
              <p className="eyebrow text-gold">About Us</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="headline-lg text-charcoal"
            >
              The journey behind<br />
              <span className="italic text-gold">Focus Africa</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-5"
            >
              <p className="text-base lg:text-lg font-light leading-relaxed text-charcoal/65">
                Founded with a vision to drive sustainable growth, innovation, and empowerment 
                across Africa&apos;s unique business landscape — from Nairobi to the whole continent.
              </p>
              <p className="text-base lg:text-lg font-light leading-relaxed text-charcoal/65">
                We believe in the potential of every individual and organization to achieve greatness. 
                With experienced professionals, we deliver unparalleled results and lasting impact.
              </p>
            </motion.div>

            {/* Divider stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 pt-8 border-t border-charcoal/10 grid grid-cols-2 gap-8"
            >
              <div>
                <span className="block font-serif text-4xl text-charcoal font-light">28</span>
                <span className="mt-1.5 block text-[10px] uppercase tracking-[0.2em] text-charcoal/40">African countries</span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-charcoal font-light">500+</span>
                <span className="mt-1.5 block text-[10px] uppercase tracking-[0.2em] text-charcoal/40">Projects delivered</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-3 border border-charcoal/30 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-warm-white"
              >
                Our Full Story
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
