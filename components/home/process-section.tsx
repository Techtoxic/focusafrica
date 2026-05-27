"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep immersion in your challenges, goals, and vision — before a single strategy is formed.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Tailored strategic frameworks built for your specific context and the African landscape.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Hands-on execution support ensuring every strategy translates to measurable outcomes.",
  },
  {
    number: "04",
    title: "Growth",
    description: "Continuous optimization and scaling — building momentum that outlasts our engagement.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="grain relative bg-[#050506] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(184,134,11,0.05),transparent)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-[#B8860B]" />
              <p className="eyebrow text-[#B8860B]">How We Work</p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="headline-lg text-[#EDEDEF] max-w-lg"
            >
              Our proven <span className="italic text-[#B8860B]">process</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-base font-light leading-relaxed text-[#8A8F98] lg:text-right"
          >
            Refined over years of partnering with organizations across the continent.
          </motion.p>
        </div>

        {/* Steps grid — rounded cards per UI Pro Max spec */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative card-dark p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gold top reveal on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#B8860B] group-hover:w-full transition-all duration-700" />

              <span className="font-serif text-6xl text-white/[0.04] group-hover:text-[#B8860B]/10 transition-colors duration-500 leading-none block">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-xl lg:text-2xl text-[#EDEDEF] group-hover:text-[#B8860B] transition-colors duration-400">
                {step.title}
              </h3>
              <div className="mt-3 h-px w-6 bg-[#B8860B]/30 group-hover:w-10 group-hover:bg-[#B8860B]/60 transition-all duration-500" />
              <p className="mt-3 text-sm font-light leading-relaxed text-[#8A8F98]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
