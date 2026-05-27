"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function AboutStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative bg-[#050506] py-16 lg:py-24 overflow-hidden">
      {/* Ambient glow — UI Pro Max spec */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_50%,rgba(184,134,11,0.04),transparent)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Image — rounded-2xl, contained aspect ratio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Rounded image container — no excess space */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl img-zoom">
              <Image
                src="/images/about-preview.jpg"
                alt="Focus Africa Leadership team"
                fill
                className="object-cover"
              />
              {/* Vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050506]/40 via-transparent to-transparent" />
            </div>

            {/* Year badge — floated cleanly */}
            <div className="absolute bottom-4 right-4 rounded-xl bg-[#0a0a0c]/90 backdrop-blur-sm border border-white/8 px-4 py-3">
              <span className="block font-serif text-2xl text-[#B8860B] leading-none">2016</span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40 mt-1">Founded</span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-[#B8860B]" />
              <p className="eyebrow text-[#B8860B]">About Us</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="headline-lg text-[#EDEDEF]"
            >
              The journey behind<br />
              <span className="italic text-[#B8860B]">Focus Africa</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 space-y-4"
            >
              <p className="text-base lg:text-lg font-light leading-relaxed text-[#8A8F98]">
                Founded with a vision to drive sustainable growth, innovation, and empowerment 
                across Africa&apos;s unique business landscape — from Nairobi to the whole continent.
              </p>
              <p className="text-base lg:text-lg font-light leading-relaxed text-[#8A8F98]">
                With experienced professionals, we deliver unparalleled results and create 
                lasting impact for every individual and organization we partner with.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 pt-8 border-t border-white/7 grid grid-cols-2 gap-8"
            >
              <div>
                <span className="block font-serif text-4xl text-[#EDEDEF]">28</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-[#8A8F98]">African countries</span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-[#EDEDEF]">500+</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-[#8A8F98]">Projects delivered</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 border border-white/15 rounded-xl px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#EDEDEF] transition-all duration-300 hover:border-[#B8860B] hover:text-[#B8860B] touch-target"
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
