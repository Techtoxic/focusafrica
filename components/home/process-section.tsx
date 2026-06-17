"use client"

import { Reveal } from "@/components/reveal"
import { process } from "@/lib/content"

const tones = [
  { bg: "bg-terracotta", text: "text-terracotta", soft: "bg-terracotta/10" },
  { bg: "bg-ochre", text: "text-ochre-dark", soft: "bg-ochre/15" },
  { bg: "bg-forest", text: "text-forest", soft: "bg-forest/10" },
  { bg: "bg-terracotta-dark", text: "text-terracotta-dark", soft: "bg-terracotta/10" },
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.steps.map((step, i) => {
            const t = tones[i % tones.length]
            return (
              <Reveal key={step.number} delay={0.07 * i} className="h-full">
                <div className="group relative flex h-full flex-col rounded-3xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(28,20,13,0.35)] lg:p-8">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${t.soft}`}>
                    <span className={`font-display text-xl font-bold ${t.text}`}>{step.number}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.35rem] font-bold tracking-[-0.01em] text-ink">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.description}</p>
                  <span className={`mt-6 h-1 w-10 rounded-full ${t.bg} transition-all duration-500 group-hover:w-20`} />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
