"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { 
    number: 15, 
    suffix: "+", 
    label: "Years of Excellence",
    sub: "Est. 2009"
  },
  { 
    number: 500, 
    suffix: "+", 
    label: "Projects Delivered",
    sub: "Across the continent"
  },
  { 
    number: 28, 
    suffix: "", 
    label: "African Countries",
    sub: "Active presence"
  },
  { 
    number: 98, 
    suffix: "%", 
    label: "Client Retention",
    sub: "Year over year"
  },
]

function CountUp({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <>{count}{suffix}</>
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-warm-white border-b border-charcoal/8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border-l border-charcoal/8 first:border-l-0 px-6 lg:px-10 py-10 lg:py-14 cursor-default overflow-hidden"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-gold/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative corner accent on hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />

              <div className="relative">
                <span className="block font-serif text-5xl lg:text-6xl xl:text-7xl font-light text-gold tracking-tight leading-none">
                  <CountUp target={stat.number} suffix={stat.suffix} isInView={isInView} />
                </span>
                <span className="mt-3 block text-[11px] uppercase tracking-[0.22em] text-charcoal/60 font-medium font-sans">
                  {stat.label}
                </span>
                <span className="mt-1 block text-xs text-charcoal/30 font-light font-sans">
                  {stat.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
