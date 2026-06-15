"use client"

import { Reveal } from "@/components/reveal"
import { testimonials, testimonialsHeader } from "@/lib/content"

export function TestimonialsSection() {
  return (
    <section className="bg-bone py-20 lg:py-28">
      <div className="container-x">
        <div className="mb-12 lg:mb-16">
          <Reveal>
            <p className="eyebrow text-accent">{testimonialsHeader.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h1 mt-5 max-w-2xl text-ink">
              {testimonialsHeader.headingLead}{" "}
              <span className="italic text-accent">{testimonialsHeader.headingAccent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={0.08 * i} className="h-full">
              <figure className="flex h-full flex-col rounded-[2rem] bg-white p-8 lg:p-12">
                <span className="font-display text-7xl font-semibold leading-[0.5] text-accent" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="mt-6 font-display text-xl font-normal leading-snug tracking-tight text-ink lg:text-[1.7rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4 pt-10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium uppercase tracking-wide text-white">
                    {t.initial}
                  </span>
                  <span>
                    <span className="block font-display font-medium text-ink">{t.author}</span>
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
