"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homeServices, homeServicesHeader } from "@/lib/content"

/**
 * Bento layout: a featured tile + a mix of wide/standard tiles.
 * Mobile: clean stack. Desktop: asymmetric 4-column grid.
 *
 *   Row 1: [   FEATURED   ][   wide   ]
 *   Row 2: [   FEATURED   ][ std ][ std ]
 *   Row 3: [   wide   ][   wide   ]
 */
const layout = [
  // 0 = featured (wide, single row)
  "sm:col-span-2 lg:col-span-2",
  // 1 = wide
  "sm:col-span-2 lg:col-span-2",
  // 2,3,4,5 = even row of four
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
]

const accents = [
  { dot: "bg-terracotta", text: "text-terracotta", soft: "bg-terracotta/10", ring: "ring-terracotta/25" },
  { dot: "bg-ochre", text: "text-ochre-dark", soft: "bg-ochre/15", ring: "ring-ochre/25" },
  { dot: "bg-forest", text: "text-forest dark:text-ochre", soft: "bg-forest/10 dark:bg-ochre/10", ring: "ring-forest/20 dark:ring-ochre/25" },
  { dot: "bg-terracotta", text: "text-terracotta", soft: "bg-terracotta/10", ring: "ring-terracotta/25" },
  { dot: "bg-ochre", text: "text-ochre-dark", soft: "bg-ochre/15", ring: "ring-ochre/25" },
  { dot: "bg-forest", text: "text-forest dark:text-ochre", soft: "bg-forest/10 dark:bg-ochre/10", ring: "ring-forest/20 dark:ring-ochre/25" },
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

        {/* BENTO GRID */}
        <div className="mt-14 grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {homeServices.map((s, i) => {
            const a = accents[i % accents.length]
            const span = layout[i] ?? ""
            const isFeatured = i === 0
            return (
              <Reveal key={s.id} delay={0.05 * i} className={`h-full ${span}`}>
                <Link
                  href={s.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta/40 hover:shadow-[0_24px_60px_-25px_rgba(28,20,13,0.4)] ${
                    isFeatured
                      ? "bg-forest text-[#fff7ee] p-9 lg:p-12"
                      : "bg-card p-8 lg:p-9"
                  }`}
                >
                  {/* hover accent bar */}
                  <span
                    className={`absolute inset-x-0 top-0 h-1 ${a.dot} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`}
                  />

                  {/* decorative pattern on featured */}
                  {isFeatured && (
                    <div
                      className="pointer-events-none absolute -right-12 -bottom-12 h-64 w-64 text-ochre/15 pattern-dots"
                      aria-hidden
                    />
                  )}

                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-bold ring-1 ${
                        isFeatured
                          ? "bg-ochre/15 text-ochre ring-ochre/30"
                          : `${a.soft} ${a.text} ${a.ring}`
                      }`}
                    >
                      {s.id}
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        isFeatured
                          ? "border-[#fff7ee]/25 text-[#fff7ee]/70 group-hover:border-ochre group-hover:bg-ochre group-hover:text-forest"
                          : "border-line text-ink/30 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-[#fff7ee]"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <h3
                    className={`mt-7 font-display font-bold leading-tight tracking-[-0.01em] ${
                      isFeatured
                        ? "text-[1.75rem] text-[#fff7ee] lg:text-[2.25rem]"
                        : "text-[1.35rem] text-ink lg:text-[1.5rem]"
                    }`}
                  >
                    {s.title}
                  </h3>

                  <span
                    className={`mt-3 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-20 ${
                      isFeatured ? "bg-ochre" : a.dot
                    }`}
                  />

                  <p
                    className={`mt-5 leading-relaxed ${
                      isFeatured
                        ? "text-[15px] text-[#fff7ee]/75 lg:text-base lg:max-w-md"
                        : "text-[15px] text-muted"
                    }`}
                  >
                    {s.description}
                  </p>

                  {isFeatured && (
                    <span className="mt-auto pt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ochre">
                      Featured discipline
                      <span className="h-px w-10 bg-ochre/60" />
                    </span>
                  )}
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
