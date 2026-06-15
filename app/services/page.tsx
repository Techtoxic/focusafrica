import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Reveal, Parallax } from "@/components/reveal"
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

const blocks = ["bg-terracotta/15", "bg-ochre/20", "bg-forest/12", "bg-terracotta/15", "bg-ochre/20"]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream pt-28 lg:pt-36">
          <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-terracotta/10" aria-hidden />
          <div className="container-x relative">
            <div className="grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="eyebrow text-terracotta-dark">{servicesPage.hero.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h1 className="display mt-5 text-ink text-balance">
                    {servicesPage.hero.headingLead}{" "}
                    <span className="italic text-terracotta">{servicesPage.hero.headingAccent}</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="lede mt-7 max-w-xl">{servicesPage.hero.body}</p>
                </Reveal>
              </div>
              <Reveal delay={0.18} className="relative lg:col-span-5">
                <div className="absolute -right-4 top-5 h-full w-full rounded-t-[12rem] rounded-b-2xl bg-ochre/25" aria-hidden />
                <Parallax className="img-zoom relative aspect-[4/5] overflow-hidden mask-arch-lg">
                  <Image
                    src={images.research}
                    alt="Focus Africa Leadership analysts reviewing research findings"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </Parallax>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-cream py-12 lg:py-16">
          <div className="container-x space-y-20 lg:space-y-28">
            {servicesDetailed.map((s, i) => {
              const flip = i % 2 === 1
              return (
                <div key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    <Reveal className={`relative lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                      <div
                        className={`absolute top-5 h-full w-full rounded-t-[10rem] rounded-b-2xl ${blocks[i % blocks.length]} ${
                          flip ? "-left-4" : "-right-4"
                        }`}
                        aria-hidden
                      />
                      <Parallax className="img-zoom relative aspect-[4/3] overflow-hidden mask-arch">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </Parallax>
                    </Reveal>
                    <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                      <Reveal>
                        <span className="font-display text-6xl font-semibold tracking-tight text-terracotta/30 lg:text-7xl">
                          {s.number}
                        </span>
                        <h2 className="h2 mt-2 text-ink">{s.title}</h2>
                        <p className="mt-5 text-base leading-relaxed text-ink-2 lg:text-[17px]">{s.description}</p>
                      </Reveal>
                      <Reveal delay={0.08}>
                        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                          {s.subServices.map((sub) => (
                            <li key={sub} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ochre/25">
                                <Check className="h-3 w-3 text-ochre-dark" strokeWidth={3} />
                              </span>
                              <span className="text-sm text-ink-2">{sub}</span>
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
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[2rem] bg-terracotta px-8 py-16 text-center text-[#fff7ee] lg:px-16 lg:py-20">
              <div className="pointer-events-none absolute inset-0 text-[#fff7ee]/[0.07] pattern-arch" aria-hidden />
              <Reveal>
                <p className="eyebrow relative text-[#fff7ee]/80">{servicesPage.cta.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="relative mx-auto mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1] text-[#fff7ee] lg:text-6xl text-balance">
                  {servicesPage.cta.headingLead} <span className="italic text-ochre">{servicesPage.cta.headingAccent}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="relative mx-auto mt-6 max-w-xl text-lg font-light text-[#fff7ee]/85">{servicesPage.cta.body}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <Link href={servicesPage.cta.primaryCta.href} className="btn btn-forest group relative mt-9">
                  {servicesPage.cta.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
