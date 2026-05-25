"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Focus Africa Leadership transformed our approach to sustainable agriculture. Their expertise and dedication to our success was evident from day one. We have seen remarkable improvements in our operations and team capabilities.",
    author: "Jordan Kilungu",
    role: "Chief Executive Officer",
    company: "Geothermal Recycle Company",
  },
  {
    quote: "The training and capacity development programs provided by Focus Africa were exceptional. Our team is now better equipped to handle complex challenges and drive innovation in our sector.",
    author: "Maria Wambua",
    role: "Director of Operations",
    company: "Western Seed Corporation",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#0d0d0d] py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6 text-stone"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-lg text-warm-white"
            >
              What our
              <span className="italic"> clients say</span>
            </motion.h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-[#1a1a1a] border border-warm-white/5 rounded-xl p-8 lg:p-12"
            >
              <Quote className="h-10 w-10 text-gold/30" strokeWidth={1} />
              
              <blockquote className="mt-8 font-serif text-xl lg:text-2xl leading-relaxed text-warm-white/80">
                {testimonial.quote}
              </blockquote>
              
              <footer className="mt-10 pt-8 border-t border-charcoal/10">
                <p className="font-medium text-warm-white">{testimonial.author}</p>
                <p className="mt-1 text-sm text-warm-white/50">
                  {testimonial.role}, {testimonial.company}
                </p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
