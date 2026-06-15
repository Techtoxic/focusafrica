"use client"

import { Reveal } from "@/components/reveal"
import { process } from "@/lib/content"

const tones = ["bg-terracotta", "bg-ochre", "bg-forest", "bg-terracotta-dark"]

export function ProcessSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-terracotta-dark">{process.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h1 mt-4 max-w-lg text-ink">
                {process.headingLead} <span className="italic text-terracotta">{process.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted lg:text-right">{process.aside}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.number} delay={0.07 * i}>
              <div
                className={`flex h-20 w-20 items-end justify-center rounded-t-full rounded-b-xl ${tones[i % tones.length]} text-[#fff7ee]`}
              >
                <span className="pb-4 font-display text-2xl font-semibold">{step.number}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium text-ink">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
