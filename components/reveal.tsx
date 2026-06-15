"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "span" | "li"
}

// Subtle, institutional fade-up. No bounce, no overshoot.
export function Reveal({ children, delay = 0, y = 18, className = "", as = "div" }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const MotionTag = motion[as]
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
