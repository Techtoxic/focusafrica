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
    <section ref={ref} className="bg-[#111111] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gold" />
              <p className="eyebrow text-gold">Testimonials</p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-lg text-warm-white"
            >
              What our clients say
            </motion.h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative border border-warm-white/8 p-8 lg:p-12 group hover:border-gold/30 transition-colors duration-500"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 lg:left-12 h-[2px] w-12 bg-gold/50" />

              {/* Large opening quote mark */}
              <span className="font-serif text-7xl leading-none text-gold/15 select-none block mb-6">
                &ldquo;
              </span>
              
              <blockquote className="font-serif text-lg lg:text-xl leading-relaxed text-warm-white/80 font-light">
                {testimonial.quote}
              </blockquote>
              
              <footer className="mt-10 pt-8 border-t border-warm-white/8 flex items-center gap-4">
                {/* Avatar initial circle */}
                <div className="shrink-0 h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-light">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-warm-white text-sm">{testimonial.author}</p>
                  <p className="mt-0.5 text-xs text-warm-white/45">
                    {testimonial.role}, {testimonial.company}
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
