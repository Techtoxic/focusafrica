"use client"

import { Reveal } from "@/components/reveal"
import { testimonials, testimonialsHeader } from "@/lib/content"

export function TestimonialsSection() {
  return (
    <section className="border-y border-line bg-paper-alt py-20 lg:py-28">
      <div className="container-x">
        <div className="mb-12 lg:mb-14">
          <Reveal className="flex items-center gap-3">
            <span className="rule" />
            <p className="eyebrow text-brass-dark">{testimonialsHeader.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 max-w-xl text-navy">
              {testimonialsHeader.headingLead}{" "}
              <span className="italic text-brass-dark">{testimonialsHeader.headingAccent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={0.08 * i} className="h-full">
              <figure className="flex h-full flex-col border border-line bg-white p-8 lg:p-10">
                <span className="font-serif text-5xl leading-none text-brass/50" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="mt-2 font-serif text-xl leading-relaxed text-ink lg:text-[22px]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-[12px] font-semibold uppercase tracking-wide text-white">
                    {t.initial}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy">{t.author}</span>
                    <span className="mt-0.5 block text-xs text-muted">
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
