"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homeServices, homeServicesHeader } from "@/lib/content"

const accents = [
  { dot: "bg-terracotta", text: "text-terracotta", soft: "bg-terracotta/10", ring: "ring-terracotta/20" },
  { dot: "bg-ochre", text: "text-ochre-dark", soft: "bg-ochre/15", ring: "ring-ochre/25" },
  { dot: "bg-forest", text: "text-forest", soft: "bg-forest/10", ring: "ring-forest/20" },
  { dot: "bg-terracotta", text: "text-terracotta", soft: "bg-terracotta/10", ring: "ring-terracotta/20" },
  { dot: "bg-ochre", text: "text-ochre-dark", soft: "bg-ochre/15", ring: "ring-ochre/25" },
  { dot: "bg-forest", text: "text-forest", soft: "bg-forest/10", ring: "ring-forest/20" },
]

export function ServicesSection() {
  return (
    <section className="border-y border-line bg-cream-2 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-terracotta-dark">{homeServicesHeader.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h1 mt-4 text-ink">
                {homeServicesHeader.headingLead}{" "}
                <span className="text-terracotta font-extrabold">{homeServicesHeader.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href={homeServicesHeader.cta.href} className="btn btn-forest group">
              {homeServicesHeader.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {homeServices.map((s, i) => {
            const a = accents[i % accents.length]
            return (
              <Reveal key={s.id} delay={0.05 * i} className="h-full">
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta/30 hover:shadow-[0_24px_60px_-25px_rgba(28,20,13,0.4)] lg:p-9"
                >
                  {/* hover accent bar */}
                  <span className={`absolute inset-x-0 top-0 h-1 ${a.dot} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`} />

                  <div className="flex items-start justify-between">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.soft} ring-1 ${a.ring} font-display text-lg font-bold ${a.text}`}>
                      {s.id}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink/30 transition-all duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-[#fff7ee]">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-[1.35rem] font-bold leading-tight tracking-[-0.01em] text-ink lg:text-[1.5rem]">{s.title}</h3>
                  <span className={`mt-3 h-1 w-10 rounded-full ${a.dot} transition-all duration-500 group-hover:w-20`} />
                  <p className="mt-5 text-[15px] leading-relaxed text-muted">{s.description}</p>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
