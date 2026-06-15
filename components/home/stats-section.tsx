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
    }, 1600 / steps)
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
    <section ref={ref} className="bg-navy">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {homeStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-l border-white/10 px-6 py-10 first:border-l-0 lg:px-10 lg:py-14"
            >
              <span className="block font-serif text-4xl text-white lg:text-5xl">
                <CountUp target={s.number} suffix={s.suffix} run={inView} />
              </span>
              <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                {s.label}
              </span>
              <span className="mt-1 block text-xs text-white/45">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
