"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homeServices, homeServicesHeader } from "@/lib/content"

export function ServicesSection() {
  return (
    <section className="border-y border-line bg-bone-2 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow text-accent">{homeServicesHeader.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="h1 mt-5 text-ink">
                  {homeServicesHeader.headingLead}{" "}
                  <span className="italic text-accent">{homeServicesHeader.headingAccent}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <Link href={homeServicesHeader.cta.href} className="btn btn-ink group mt-8">
                  {homeServicesHeader.cta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Editorial list */}
          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              {homeServices.map((s, i) => (
                <Reveal key={s.id} delay={0.04 * i}>
                  <Link
                    href={s.href}
                    className="group flex flex-col gap-3 border-b border-ink/15 py-8 transition-colors duration-300 lg:flex-row lg:items-baseline lg:gap-8 lg:py-10"
                  >
                    <span className="font-display text-sm font-medium text-muted lg:w-12 lg:shrink-0">
                      {s.id}
                    </span>
                    <div className="flex-1">
                      <h3 className="flex items-start justify-between gap-4 font-display text-2xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent lg:text-[2rem]">
                        {s.title}
                        <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-ink/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                      </h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{s.description}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
