"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { homeStats } from "@/lib/content"

function CountUp({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    const steps = 60
    const inc = target / steps
    let cur = 0
    const t = setInterval(() => {
      cur += inc
      if (cur >= target) {
        setN(target)
        clearInterval(t)
      } else setN(Math.floor(cur))
    }, 1500 / steps)
    return () => clearInterval(t)
  }, [run, target])
  return (
    <>
      {n}
      {suffix}
    </>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest text-[#fff7ee]">
      <div className="pointer-events-none absolute inset-0 text-[#fff7ee]/5 pattern-diag" aria-hidden />
      {/* Full-bleed grid, no constraining container, evenly spaced */}
      <div className="relative grid grid-cols-2 lg:grid-cols-4">
        {homeStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            className="border-l border-[#fff7ee]/12 px-8 py-14 first:border-l-0 sm:px-10 lg:px-12 lg:py-20 [&:nth-child(3)]:border-l-0 lg:[&:nth-child(3)]:border-l"
          >
            <span className="block font-display text-[3.25rem] font-bold leading-none tracking-tight text-ochre lg:text-[4.5rem]">
              <CountUp target={s.number} suffix={s.suffix} run={inView} />
            </span>
            <span className="mt-4 block text-[12px] font-bold uppercase tracking-[0.16em] text-[#fff7ee]">
              {s.label}
            </span>
            <span className="mt-1 block text-sm text-[#fff7ee]/55">{s.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
