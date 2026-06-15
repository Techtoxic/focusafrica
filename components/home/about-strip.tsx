"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal, Parallax } from "@/components/reveal"
import { aboutStrip, images } from "@/lib/content"

export function AboutStrip() {
  return (
    <section className="bg-bone py-20 lg:py-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Content */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-accent">{aboutStrip.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h1 mt-5 text-ink">
                {aboutStrip.headingLead} {aboutStrip.headingAccent}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-7 max-w-lg space-y-5">
                {aboutStrip.paragraphs.map((p, i) => (
                  <p key={i} className="lede">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex gap-12 border-t border-line pt-8">
                {aboutStrip.miniStats.map((s) => (
                  <div key={s.label}>
                    <span className="block font-display text-5xl font-semibold tracking-tight text-ink">
                      {s.number}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <Link href={aboutStrip.cta.href} className="btn btn-ghost group mt-9">
                {aboutStrip.cta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          {/* Image — arch mask + parallax */}
          <Reveal delay={0.1} className="relative lg:col-span-6">
            <Parallax className="soft relative aspect-[4/5] overflow-hidden rounded-t-[12rem] rounded-b-[2rem]">
              <Image
                src={images.team}
                alt="The Focus Africa Leadership advisory team collaborating in their Nairobi office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute bottom-6 left-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-accent text-white">
              <span className="font-display text-2xl font-semibold leading-none">{aboutStrip.foundedYear}</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/80">Founded</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
