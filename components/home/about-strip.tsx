"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal, Parallax } from "@/components/reveal"
import { aboutStrip, images } from "@/lib/content"

export function AboutStrip() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <Reveal className="relative lg:col-span-5">
            <div className="absolute -right-4 -top-5 h-full w-full rounded-t-[12rem] rounded-b-2xl bg-terracotta/15" aria-hidden />
            <Parallax className="img-zoom relative aspect-[4/5] overflow-hidden mask-arch-lg">
              <Image
                src={images.team}
                alt="The Focus Africa Leadership advisory team collaborating in their Nyeri office"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute -bottom-4 left-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-forest text-[#fff7ee] shadow-xl">
              <span className="font-display text-2xl font-semibold leading-none text-ochre">{aboutStrip.foundedYear}</span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#fff7ee]/80">Founded</span>
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-terracotta-dark">{aboutStrip.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h1 mt-4 text-ink">
                {aboutStrip.headingLead} <span className="italic text-terracotta">{aboutStrip.headingAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 max-w-xl space-y-5">
                {aboutStrip.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-ink-2 lg:text-[17px]">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-4">
                {aboutStrip.miniStats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`rounded-2xl px-6 py-4 ${i === 0 ? "bg-ochre/20" : "bg-forest/10"}`}
                  >
                    <span className="block font-display text-3xl font-semibold text-ink">{s.number}</span>
                    <span className="mt-0.5 block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <Link href={aboutStrip.cta.href} className="btn btn-outline group mt-9">
                {aboutStrip.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
