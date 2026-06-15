"use client"

import { Reveal } from "@/components/reveal"
import { clients } from "@/lib/content"

export function ClientsMarquee() {
  return (
    <section className="border-b border-line bg-paper-alt py-12 lg:py-14">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-center text-muted">Trusted by leading organizations</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {clients.map((c) => (
              <span
                key={c}
                className="text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-navy/55"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
