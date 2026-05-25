"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin with a deep understanding of your unique challenges, goals, and vision for success.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team crafts tailored strategic approaches designed specifically for your organization.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Hands-on execution support ensures strategies translate into measurable, real-world results.",
  },
  {
    number: "04",
    title: "Growth",
    description: "Continuous optimization and scaling to maximize impact and long-term sustainable success.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-charcoal py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gold" />
              <p className="eyebrow text-gold">How We Work</p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-lg text-warm-white max-w-xl"
            >
              Our proven process
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-base font-light leading-relaxed text-warm-white/50 lg:text-right"
          >
            A systematic approach refined over years of working with organizations across the African continent.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-white/6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
              className="bg-charcoal p-8 lg:p-10 group relative overflow-hidden"
            >
              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500" />
              
              {/* Number — large faded, shifts colour on hover */}
              <span className="font-serif text-7xl lg:text-8xl font-light text-warm-white/5 group-hover:text-gold/15 transition-colors duration-500 leading-none block">
                {step.number}
              </span>
              
              <h3 className="mt-4 font-serif text-xl lg:text-2xl text-warm-white font-light group-hover:text-gold transition-colors duration-400">
                {step.title}
              </h3>
              
              <div className="mt-3 h-px w-8 bg-gold/30 group-hover:w-12 group-hover:bg-gold/60 transition-all duration-500" />
              
              <p className="mt-4 text-sm font-light leading-relaxed text-warm-white/45 group-hover:text-warm-white/60 transition-colors duration-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
