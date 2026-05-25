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
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="grain relative bg-[#0A0A0A] py-20 lg:py-32 overflow-hidden">
      {/* Subtle radial glow from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(184,134,11,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-gold" />
              <p className="eyebrow text-gold">How We Work</p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="headline-lg text-warm-white max-w-lg"
            >
              Our proven process
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-base font-light leading-relaxed text-warm-white/45 lg:text-right"
          >
            Refined over years of partnering with organizations across the continent.
          </motion.p>
        </div>

        {/* Steps — horizontal line connector on desktop */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-warm-white/8 origin-left"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-white/5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-[#0A0A0A] p-8 lg:p-10 hover:bg-[#111008] transition-colors duration-500"
              >
                {/* Gold top reveal */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700" />

                {/* Step dot on the connecting line */}
                <div className="hidden lg:block absolute top-[38px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 border border-warm-white/15 bg-[#0A0A0A] group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-500" />

                <span className="font-serif text-7xl font-light text-warm-white/4 group-hover:text-gold/12 transition-colors duration-500 leading-none block">
                  {step.number}
                </span>

                <h3 className="mt-6 font-serif text-xl lg:text-2xl text-warm-white font-light group-hover:text-gold transition-colors duration-400">
                  {step.title}
                </h3>

                <div className="mt-3 h-px w-6 bg-gold/25 group-hover:w-10 group-hover:bg-gold/50 transition-all duration-500" />

                <p className="mt-4 text-sm font-light leading-relaxed text-warm-white/40 group-hover:text-warm-white/60 transition-colors duration-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
