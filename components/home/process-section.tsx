"use client"

import { Reveal } from "@/components/reveal"
import { process } from "@/lib/content"

export function ProcessSection() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal className="flex items-center gap-3">
              <span className="rule" />
              <p className="eyebrow text-brass-dark">{process.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h1 mt-5 max-w-lg text-navy">
                {process.headingLead}{" "}
                <span className="italic text-brass-dark">{process.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted lg:text-right">{process.aside}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.number} delay={0.06 * i} className="relative">
              <div className="mb-6 h-px w-full bg-line">
                <div className="h-px w-10 bg-brass" />
              </div>
              <span className="font-serif text-5xl text-navy/15">{step.number}</span>
              <h3 className="mt-4 font-serif text-xl text-navy">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
