"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homeCta, images } from "@/lib/content"

export function CTABanner() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest text-[#fff7ee]">
          <div className="pointer-events-none absolute inset-0 text-[#fff7ee]/[0.05] pattern-diag" aria-hidden />
          <div className="grid items-center gap-0 lg:grid-cols-12">
            <div className="relative p-8 sm:p-12 lg:col-span-7 lg:p-16">
              <Reveal>
                <p className="eyebrow text-ochre">{homeCta.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.98] text-[#fff7ee] lg:text-6xl text-balance">
                  {homeCta.headingLead} <span className="text-ochre font-extrabold">{homeCta.headingAccent}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-[#fff7ee]/75">{homeCta.body}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link href={homeCta.primaryCta.href} className="btn btn-ochre group">
                    {homeCta.primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link href={homeCta.secondaryCta.href} className="btn btn-outline-cream">
                    {homeCta.secondaryCta.label}
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="relative min-h-[260px] self-stretch lg:col-span-5">
              <Image
                src={images.handshake}
                alt="A partnership handshake between Focus Africa Leadership advisors and a client"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-forest lg:via-forest/20 lg:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
