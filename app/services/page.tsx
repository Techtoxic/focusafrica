import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Reveal, Parallax } from "@/components/reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
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
        <section className="bg-bone pt-32 lg:pt-40">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow text-accent">{servicesPage.hero.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-6 max-w-5xl text-ink text-balance">
                {servicesPage.hero.headingLead}{" "}
                <span className="text-accent">{servicesPage.hero.headingAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede mt-8 max-w-xl">{servicesPage.hero.body}</p>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bone py-16 lg:py-24">
          <div className="container-x space-y-20 lg:space-y-32">
            {servicesDetailed.map((s, i) => {
              const flip = i % 2 === 1
              return (
                <div key={s.id} id={s.id} className="scroll-mt-32">
                  <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                      <Parallax
                        className={`soft relative aspect-[4/3] overflow-hidden ${
                          flip ? "rounded-t-[2rem] rounded-b-[8rem]" : "rounded-t-[8rem] rounded-b-[2rem]"
                        }`}
                      >
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
                        <span className="font-display text-6xl font-semibold tracking-tight text-bone-3 lg:text-7xl">
                          {s.number}
                        </span>
                        <h2 className="h2 mt-3 text-ink">{s.title}</h2>
                        <p className="lede mt-5 max-w-lg">{s.description}</p>
                      </Reveal>
                      <Reveal delay={0.08}>
                        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                          {s.subServices.map((sub) => (
                            <li key={sub} className="flex items-center gap-2 text-sm text-ink-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                      <Reveal delay={0.14}>
                        <Link href="/contact" className="btn btn-ghost group mt-8">
                          Get Started
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        <section className="bg-bone pb-20 lg:pb-28">
          <div className="container-x">
            <div className="rounded-[2.5rem] bg-accent px-8 py-16 text-center lg:px-16 lg:py-24">
              <Reveal>
                <p className="eyebrow text-white/70">{servicesPage.cta.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white lg:text-7xl text-balance">
                  {servicesPage.cta.headingLead} {servicesPage.cta.headingAccent}
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/80">{servicesPage.cta.body}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <Link href={servicesPage.cta.primaryCta.href} className="btn bg-white text-accent hover:bg-bone group mt-10">
                  {servicesPage.cta.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
