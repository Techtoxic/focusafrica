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
    /* Thin dark band — visual separator between light sections */
    <section className="relative bg-[#0A0A0A] py-7 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="flex items-center gap-12 shrink-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-warm-white/20 font-medium font-sans">
              {client}
            </span>
            <div className="w-px h-3 bg-gold/20 shrink-0" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
