"use client"

import { Reveal } from "@/components/reveal"
import { testimonials, testimonialsHeader } from "@/lib/content"

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-terracotta py-20 text-[#fff7ee] lg:py-28">
      <div className="pointer-events-none absolute inset-0 text-[#fff7ee]/[0.06] pattern-arch" aria-hidden />
      <div className="container-x relative">
        <div className="mb-12 lg:mb-14">
          <Reveal>
            <p className="eyebrow text-[#fff7ee]/80">{testimonialsHeader.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h1 mt-4 max-w-xl text-[#fff7ee]">
              {testimonialsHeader.headingLead} <span className="text-ochre font-extrabold">{testimonialsHeader.headingAccent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={0.08 * i} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl bg-card p-8 text-ink lg:p-10">
                <span className="font-display text-6xl font-semibold leading-[0.5] text-ochre" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="mt-6 font-display text-xl font-normal leading-snug text-ink lg:text-[1.6rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4 pt-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold uppercase tracking-wide text-ochre">
                    {t.initial}
                  </span>
                  <span>
                    <span className="block font-display text-lg font-medium text-ink">{t.author}</span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
