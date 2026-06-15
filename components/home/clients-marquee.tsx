"use client"

import { clients } from "@/lib/content"

export function ClientsMarquee() {
  const row = [...clients, ...clients]
  return (
    <section className="overflow-hidden border-y border-line bg-bone-2 py-8">
      <div className="flex w-max animate-marquee items-center">
        {row.map((c, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display text-lg font-medium text-ink/80 lg:text-2xl">{c}</span>
            <span className="mx-7 h-2 w-2 rounded-full bg-accent lg:mx-10" />
          </div>
        ))}
      </div>
    </section>
  )
}
