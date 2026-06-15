"use client"

import { clients } from "@/lib/content"

export function ClientsMarquee() {
  const row = [...clients, ...clients]
  return (
    <section className="overflow-hidden border-y border-line bg-cream-2 py-7">
      <div className="flex w-max animate-marquee items-center">
        {row.map((c, i) => (
          <div key={i} className="flex items-center">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-ink/70 lg:text-base">{c}</span>
            <span className="mx-7 h-2.5 w-2.5 rotate-45 bg-terracotta lg:mx-9" />
          </div>
        ))}
      </div>
    </section>
  )
}
