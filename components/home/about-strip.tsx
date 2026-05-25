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
    <section ref={ref} className="bg-[#0a0a0a] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6 text-gold"
            >
              About Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-lg text-warm-white"
            >
              The journey behind
              <br />
              <span className="italic">Focus Africa</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-4"
            >
              <p className="text-base lg:text-lg font-light leading-relaxed text-warm-white/60">
                Founded in 2016, Focus Africa Leadership was established with a vision to drive 
                sustainable growth, innovation, and empowerment across Africa&apos;s unique business 
                landscape.
              </p>
              <p className="text-base lg:text-lg font-light leading-relaxed text-warm-white/60">
                We believe in the potential of every individual and organization to achieve greatness. 
                With experienced professionals, we deliver unparalleled results and create lasting impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.1em] text-warm-white transition-colors duration-300 hover:text-gold link-hover"
              >
                Learn Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl img-zoom">
              <Image
                src="/images/about-preview.jpg"
                alt="Focus Africa Leadership team in discussion"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border border-gold/30 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
