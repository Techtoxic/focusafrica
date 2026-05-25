"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-charcoal">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-35"
        />
        {/* Gradient: heavier at bottom so text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/95" />
      </motion.div>

      {/* Thin gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/40 z-20" />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex min-h-screen flex-col justify-end pb-20 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-gold" />
            <p className="eyebrow text-gold">Strategic Consultancy</p>
          </motion.div>

          {/* Main Headline — italic only on the last line for impact */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="headline-xl text-warm-white"
          >
            <span className="block font-light">Empowering</span>
            <span className="block font-light">Africa&apos;s</span>
            <span className="block italic text-gold/90">future leaders</span>
          </motion.h1>

          {/* Subtext and CTA Row */}
          <div className="mt-10 lg:mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="max-w-sm text-base lg:text-lg font-light leading-relaxed text-warm-white/55 tracking-wide"
            >
              Strategic solutions for sustainable growth across the continent. 
              We partner with visionary organizations to unlock Africa&apos;s potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap items-center gap-5"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:bg-gold-light"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="text-sm font-light text-warm-white/50 transition-colors duration-300 hover:text-warm-white link-hover"
              >
                Our story
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
