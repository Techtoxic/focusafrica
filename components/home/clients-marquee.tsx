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
    <section className="bg-charcoal py-8 border-y border-warm-white/6 overflow-hidden">
      <div className="relative">
        {/* Fade edges — must match section bg */}
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />
        
        {/* Marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-14 whitespace-nowrap"
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center gap-14">
              <span className="text-[11px] uppercase tracking-[0.28em] text-warm-white/25 font-medium font-sans">
                {client}
              </span>
              <div className="w-1 h-1 rounded-full bg-gold/30 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
