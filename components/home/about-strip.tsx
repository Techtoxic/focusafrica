"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { aboutStrip, images } from "@/lib/content"

export function AboutStrip() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <Reveal className="relative lg:col-span-6">
            <div className="img-zoom relative aspect-[4/3] overflow-hidden border border-line">
              <Image
                src={images.team}
                alt="The Focus Africa Leadership advisory team collaborating in their Nairobi office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-6 hidden border border-line bg-white px-6 py-4 shadow-lg sm:block">
              <span className="block font-serif text-2xl text-navy leading-none">
                {aboutStrip.foundedYear}
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-brass-dark">
                Founded
              </span>
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-6">
            <Reveal className="flex items-center gap-3">
              <span className="rule" />
              <p className="eyebrow text-brass-dark">{aboutStrip.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h1 mt-6 text-navy">
                {aboutStrip.headingLead}{" "}
                <span className="italic text-brass-dark">{aboutStrip.headingAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 space-y-5">
                {aboutStrip.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted lg:text-[17px]">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-8 border-t border-line pt-8">
                {aboutStrip.miniStats.map((s) => (
                  <div key={s.label}>
                    <span className="block font-serif text-4xl text-navy">{s.number}</span>
                    <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
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
