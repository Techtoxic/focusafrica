"use client"

import { Reveal } from "@/components/reveal"
import { process } from "@/lib/content"

export function ProcessSection() {
  return (
    <section className="bg-bone py-20 lg:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-accent">{process.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h1 mt-5 text-ink">
              {process.headingLead} <span className="italic text-accent">{process.headingAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mt-6 max-w-xl">{process.aside}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {process.steps.map((step, i) => (
            <Reveal key={step.number} delay={0.06 * i} className={i % 2 === 1 ? "sm:mt-12" : ""}>
              <div className="flex items-start gap-6">
                <span className="font-display text-6xl font-semibold leading-none tracking-tight text-bone-3 lg:text-7xl">
                  {step.number}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
