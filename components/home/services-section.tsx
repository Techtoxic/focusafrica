"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homeServices, homeServicesHeader } from "@/lib/content"

const accents = [
  { dot: "bg-terracotta", text: "text-terracotta", soft: "bg-terracotta/10" },
  { dot: "bg-ochre", text: "text-ochre-dark", soft: "bg-ochre/15" },
  { dot: "bg-forest", text: "text-forest", soft: "bg-forest/10" },
  { dot: "bg-terracotta", text: "text-terracotta", soft: "bg-terracotta/10" },
  { dot: "bg-ochre", text: "text-ochre-dark", soft: "bg-ochre/15" },
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
                <span className="italic text-terracotta">{homeServicesHeader.headingAccent}</span>
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s, i) => {
            const a = accents[i % accents.length]
            return (
              <Reveal key={s.id} delay={0.05 * i} className="h-full">
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(28,20,13,0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full ${a.soft} font-display text-lg font-semibold ${a.text}`}>
                      {s.id}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-terracotta" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium leading-snug text-ink lg:text-2xl">{s.title}</h3>
                  <span className={`mt-3 h-1 w-10 rounded-full ${a.dot} transition-all duration-300 group-hover:w-16`} />
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.description}</p>
                </Link>
              </Reveal>
            )
          })}
          {/* feature cell */}
          <Reveal delay={0.05 * homeServices.length} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-forest p-8 text-[#fff7ee]">
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 text-[#fff7ee]/8 pattern-dots" aria-hidden />
              <p className="relative font-display text-2xl font-medium leading-snug">
                Every engagement is rooted in the African context.
              </p>
              <Link
                href={homeServicesHeader.cta.href}
                className="relative mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-ochre transition-colors hover:text-[#fff7ee]"
              >
                View all services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
