"use client"

import { motion } from "framer-motion"

const clients = [
  "World Bank",
  "USAID",
  "African Development Bank",
  "UN Environment",
  "Gates Foundation",
  "Mastercard Foundation",
  "GIZ",
  "DFID",
]

export function ClientsMarquee() {
  return (
    <section className="bg-[#0a0a0a] py-10 border-y border-warm-white/5 overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-warm-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-warm-white to-transparent z-10" />
        
        {/* Marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...clients, ...clients].map((client, index) => (
            <span
              key={index}
              className="text-sm uppercase tracking-[0.2em] text-warm-white/30 font-light"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
