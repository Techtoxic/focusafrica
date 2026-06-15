"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homeServices, homeServicesHeader } from "@/lib/content"

export function ServicesSection() {
  return (
    <section className="border-y border-line bg-paper-alt py-20 lg:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal className="flex items-center gap-3">
              <span className="rule" />
              <p className="eyebrow text-brass-dark">{homeServicesHeader.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h1 mt-5 text-navy">
                {homeServicesHeader.headingLead}{" "}
                <span className="italic text-brass-dark">{homeServicesHeader.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href={homeServicesHeader.cta.href} className="btn btn-outline group">
              {homeServicesHeader.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s, i) => (
            <Reveal key={s.id} delay={0.04 * i} className="h-full">
              <Link
                href={s.href}
                className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper-deep lg:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-brass">{s.id}</span>
                  <ArrowUpRight className="h-5 w-5 text-navy/25 transition-all duration-300 group-hover:text-navy group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy lg:text-[22px]">{s.title}</h3>
                <span className="mt-4 h-px w-8 bg-brass/40 transition-all duration-300 group-hover:w-12" />
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.description}</p>
              </Link>
            </Reveal>
          ))}
          {/* trailing cell to complete the grid edge on lg */}
          <div className="hidden bg-navy p-8 lg:flex lg:flex-col lg:justify-between lg:p-9">
            <p className="font-serif text-xl text-white leading-snug">
              Every engagement is tailored to the African context.
            </p>
            <Link
              href={homeServicesHeader.cta.href}
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brass transition-colors hover:text-white"
            >
              View all services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
