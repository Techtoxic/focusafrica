"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    quote: "Focus Africa Leadership transformed our approach to sustainable agriculture. Their expertise and dedication to our success was evident from day one. We have seen remarkable improvements in our operations and team capabilities.",
    author: "Jordan Kilungu",
    role: "Chief Executive Officer",
    company: "Geothermal Recycle Company",
    initial: "JK",
  },
  {
    quote: "The training and capacity development programs provided by Focus Africa were exceptional. Our team is now better equipped to handle complex challenges and drive innovation in our sector.",
    author: "Maria Wambua",
    role: "Director of Operations",
    company: "Western Seed Corporation",
    initial: "MW",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    /* Warm amber-dark — completely distinct from the cold blacks elsewhere */
    <section ref={ref} className="grain relative overflow-hidden py-20 lg:py-32" style={{ backgroundColor: '#0E0900' }}>
      {/* Very subtle warm radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(184,134,11,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gold" />
            <p className="eyebrow text-gold">Testimonials</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="headline-lg text-warm-white max-w-xl"
          >
            What our clients say
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative border border-warm-white/6 p-8 lg:p-12 group hover:border-gold/25 transition-colors duration-500"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
            >
              <div className="absolute top-0 left-8 lg:left-12 h-[2px] w-10 bg-gold/40 group-hover:w-16 transition-all duration-500" />

              {/* Large quote character */}
              <span className="font-serif text-8xl leading-none text-gold/10 select-none block -mb-4">
                &ldquo;
              </span>

              <blockquote className="font-serif text-lg lg:text-xl leading-relaxed text-warm-white/75 font-light">
                {testimonial.quote}
              </blockquote>

              <footer className="mt-10 pt-7 border-t border-warm-white/6 flex items-center gap-4">
                <div className="shrink-0 h-11 w-11 border border-gold/30 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold/70 font-light">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-warm-white text-sm tracking-wide">{testimonial.author}</p>
                  <p className="mt-0.5 text-xs text-warm-white/35 font-light">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
