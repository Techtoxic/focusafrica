"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    quote: "Focus Africa Leadership transformed our approach to sustainable agriculture. Their expertise and dedication was evident from day one — remarkable improvements in operations and team capabilities.",
    author: "Jordan Kilungu",
    role: "Chief Executive Officer",
    company: "Geothermal Recycle Company",
    initial: "JK",
  },
  {
    quote: "The training and capacity development programs were exceptional. Our team is now better equipped to handle complex challenges and drive innovation across our sector.",
    author: "Maria Wambua",
    role: "Director of Operations",
    company: "Western Seed Corporation",
    initial: "MW",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="grain relative overflow-hidden py-16 lg:py-24 bg-[#020203]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(184,134,11,0.04),transparent)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-[#B8860B]" />
            <p className="eyebrow text-[#B8860B]">Testimonials</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="headline-lg text-[#EDEDEF] max-w-xl"
          >
            What our <span className="italic text-[#B8860B]">clients say</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark p-7 lg:p-10 transition-all duration-500 hover:translate-y-[-2px]"
            >
              {/* Gold accent bar */}
              <div className="h-0.5 w-8 bg-[#B8860B]/60 mb-6" />

              <blockquote className="font-serif text-lg lg:text-xl leading-relaxed text-[#EDEDEF]/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <footer className="mt-8 pt-6 border-t border-white/7 flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B8860B]/15 border border-[#B8860B]/25">
                  <span className="text-[11px] font-medium uppercase tracking-wide text-[#B8860B]">{t.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-[#EDEDEF] text-sm">{t.author}</p>
                  <p className="mt-0.5 text-xs text-[#8A8F98]">{t.role}, {t.company}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
