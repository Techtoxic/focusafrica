"use client"

import { Reveal } from "@/components/reveal"
import { process } from "@/lib/content"

const tones = [
  { node: "bg-terracotta text-[#fff7ee]", line: "from-terracotta", num: "text-terracotta" },
  { node: "bg-ochre text-forest",         line: "from-ochre",      num: "text-ochre-dark" },
  { node: "bg-forest text-ochre",         line: "from-forest",     num: "text-forest dark:text-ochre" },
  { node: "bg-terracotta-dark text-[#fff7ee]", line: "from-terracotta-dark", num: "text-terracotta-dark" },
]

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
                {process.headingLead} <span className="text-terracotta font-extrabold">{process.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted lg:text-right">{process.aside}</p>
          </Reveal>
        </div>

        {/* TIMELINE: horizontal connected stepper on desktop, vertical rail on mobile */}
        <div className="relative mt-16">
          {/* desktop horizontal connector line */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-terracotta via-ochre to-forest opacity-40 lg:block"
          />
          {/* mobile vertical connector line */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-terracotta via-ochre to-forest opacity-40 lg:hidden"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {process.steps.map((step, i) => {
              const t = tones[i % tones.length]
              return (
                <Reveal key={step.number} delay={0.08 * i}>
                  <li className="relative flex gap-5 lg:block">
                    {/* numbered node */}
                    <span
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${t.node} font-display text-lg font-bold shadow-[0_8px_24px_-10px_rgba(28,20,13,0.35)] ring-4 ring-cream`}
                    >
                      {step.number}
                    </span>

                    <div className="flex-1 lg:mt-7">
                      <span className={`hidden lg:inline-block font-display text-[11px] font-bold uppercase tracking-[0.2em] ${t.num}`}>
                        Step {step.number}
                      </span>
                      <h3 className="font-display text-[1.35rem] font-bold tracking-[-0.01em] text-ink lg:mt-2">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted lg:max-w-[16rem]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
