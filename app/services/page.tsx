import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { servicesPage, servicesDetailed, images } from "@/lib/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive consultancy services for African organizations: agriculture & climate, research & development, training & capacity, finance & administration, and monitoring & evaluation.",
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-paper pt-28 lg:pt-36">
          <div className="container-x">
            <div className="grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
              <div className="lg:col-span-7">
                <Reveal className="flex items-center gap-3">
                  <span className="rule" />
                  <p className="eyebrow text-brass-dark">{servicesPage.hero.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="h-display mt-6 text-navy text-balance">
                    {servicesPage.hero.headingLead}{" "}
                    <span className="italic text-brass-dark">{servicesPage.hero.headingAccent}</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="lede mt-7 max-w-xl">{servicesPage.hero.body}</p>
                </Reveal>
              </div>
              <Reveal delay={0.2} className="lg:col-span-5">
                <div className="img-zoom relative aspect-[4/3] overflow-hidden border border-line">
                  <Image
                    src={images.research}
                    alt="Focus Africa Leadership analysts reviewing research findings"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-line bg-paper-alt">
          <div className="container-x divide-y divide-line">
            {servicesDetailed.map((s, i) => {
              const flip = i % 2 === 1
              return (
                <div key={s.id} id={s.id} className="scroll-mt-28 py-16 lg:py-20">
                  <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                      <div className="img-zoom relative aspect-[4/3] overflow-hidden border border-line">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <span className="absolute bottom-4 left-5 font-serif text-6xl text-white/80 mix-blend-overlay">
                          {s.number}
                        </span>
                      </div>
                    </Reveal>
                    <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                      <Reveal>
                        <p className="eyebrow text-brass-dark">Service {s.number}</p>
                        <h2 className="h2 mt-4 text-navy">{s.title}</h2>
                        <p className="mt-5 text-base leading-relaxed text-muted lg:text-[17px]">
                          {s.description}
                        </p>
                      </Reveal>
                      <Reveal delay={0.08}>
                        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                          {s.subServices.map((sub) => (
                            <li key={sub} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-brass-soft">
                                <Check className="h-3 w-3 text-brass-dark" strokeWidth={3} />
                              </span>
                              <span className="text-sm text-ink/80">{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                      <Reveal delay={0.14}>
                        <Link href="/contact" className="btn btn-outline group mt-8">
                          Get Started
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Reveal>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20 lg:py-24">
          <div className="container-x text-center">
            <Reveal className="flex items-center justify-center gap-3">
              <span className="rule" />
              <p className="eyebrow text-brass">{servicesPage.cta.eyebrow}</p>
              <span className="rule" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mx-auto mt-6 max-w-3xl text-white">
                {servicesPage.cta.headingLead}{" "}
                <span className="italic text-brass">{servicesPage.cta.headingAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/70">{servicesPage.cta.body}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href={servicesPage.cta.primaryCta.href} className="btn btn-brass group mt-9">
                {servicesPage.cta.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
