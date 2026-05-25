"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowDown } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex min-h-screen flex-col justify-end pb-32 lg:pb-40"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow mb-8 text-gold"
          >
            Strategic Consultancy
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="headline-xl max-w-5xl text-warm-white"
          >
            <span className="block">Empowering Africa&apos;s</span>
            <span className="block italic">future leaders</span>
          </motion.h1>

          {/* Subtext and CTA Row */}
          <div className="mt-12 lg:mt-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md text-base lg:text-lg font-light leading-relaxed text-warm-white/60"
            >
              Strategic solutions for sustainable growth across the continent. 
              We partner with visionary organizations to unlock Africa&apos;s potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-charcoal transition-all duration-300 hover:bg-gold-light"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="hidden text-sm font-light text-warm-white/60 transition-colors duration-300 hover:text-warm-white link-hover lg:block"
              >
                Learn our story
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-40 lg:bottom-48 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-warm-white/30" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-warm-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "500+", label: "Projects Delivered" },
              { number: "28", label: "African Countries" },
              { number: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex flex-col gap-1 border-l border-warm-white/10 px-4 lg:px-8 py-6 first:border-l-0"
              >
                <span className="font-serif text-2xl lg:text-4xl text-gold">{stat.number}</span>
                <span className="text-[10px] lg:text-xs uppercase tracking-wider text-warm-white/40">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
