"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homeCta } from "@/lib/content"

export function CTABanner() {
  return (
    <section className="bg-bone pb-20 lg:pb-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-accent px-8 py-16 lg:px-16 lg:py-24">
          {/* oversized ghost word */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 bottom-[-3rem] select-none font-display text-[12rem] font-bold leading-none text-white/10 lg:text-[18rem]"
          >
            FAL
          </span>

          <div className="relative max-w-3xl">
            <Reveal>
              <p className="eyebrow text-white/70">{homeCta.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
                {homeCta.headingLead} {homeCta.headingAccent}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-white/80">{homeCta.body}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={homeCta.primaryCta.href} className="btn bg-white text-accent hover:bg-bone group">
                  {homeCta.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href={homeCta.secondaryCta.href} className="btn btn-ghost-light">
                  {homeCta.secondaryCta.label}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
