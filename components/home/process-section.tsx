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
    description: "Hands-on execution support to ensure strategies translate into measurable results.",
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
    <section ref={ref} className="bg-[#0a0a0a] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6 text-gold"
            >
              How We Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-lg text-warm-white max-w-xl"
            >
              Our proven
              <span className="italic"> process</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-base font-light leading-relaxed text-warm-white/50"
          >
            A systematic approach refined over years of working with organizations across the African continent.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-[#0a0a0a] p-8 lg:p-10 group"
            >
              <span className="font-serif text-6xl lg:text-7xl text-warm-white/5 group-hover:text-gold/20 transition-colors duration-500">
                {step.number}
              </span>
              
              <h3 className="mt-6 font-serif text-xl lg:text-2xl text-warm-white">
                {step.title}
              </h3>
              
              <p className="mt-4 text-sm font-light leading-relaxed text-warm-white/40">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
