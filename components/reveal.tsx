"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "span" | "li"
}

// Expressive but purposeful: rise + a touch of scale settle.
export function Reveal({ children, delay = 0, y = 30, className = "", as = "div" }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-70px" })
  const MotionTag = motion[as]
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

// Clipped oversized inner layer so the parallax translate shows no edge gaps.
export function Parallax({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"])
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[9%]">
        {children}
      </motion.div>
    </div>
  )
}
