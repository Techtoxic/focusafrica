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
    <section ref={ref} className="bg-bone py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-y-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {homeStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block font-display text-6xl font-semibold tracking-tight text-accent lg:text-7xl">
                <CountUp target={s.number} suffix={s.suffix} run={inView} />
              </span>
              <span className="mt-4 block font-display text-base font-medium text-ink">{s.label}</span>
              <span className="mt-1 block text-sm text-muted">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
