"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { homeCta, images } from "@/lib/content"

export function CTABanner() {
  return (
    <section className="bg-navy">
      <div className="container-x">
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <div className="py-16 lg:py-24 lg:pr-16">
            <Reveal className="flex items-center gap-3">
              <span className="rule" />
              <p className="eyebrow text-brass">{homeCta.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-6 text-white">
                {homeCta.headingLead}{" "}
                <span className="italic text-brass">{homeCta.headingAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/70">
                {homeCta.body}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href={homeCta.primaryCta.href} className="btn btn-brass group">
                  {homeCta.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href={homeCta.secondaryCta.href} className="btn btn-outline-light">
                  {homeCta.secondaryCta.label}
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
            <Image
              src={images.handshake}
              alt="A partnership handshake between Focus Africa Leadership advisors and a client"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
