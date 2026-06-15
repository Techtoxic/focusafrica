import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Reveal, Parallax } from "@/components/reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { aboutPage, aboutStats, images } from "@/lib/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2016, Focus Africa Leadership empowers businesses, individuals, and organizations across Africa with strategic guidance for sustainable growth.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream pt-28 lg:pt-36">
          <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-ochre/15" aria-hidden />
          <div className="container-x relative">
            <div className="grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
              <div className="lg:col-span-6">
                <Reveal>
                  <p className="eyebrow text-terracotta-dark">{aboutPage.hero.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h1 className="display mt-5 text-ink text-balance">
                    {aboutPage.hero.headingLead}{" "}
                    <span className="italic text-terracotta">{aboutPage.hero.headingAccent}</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="lede mt-7 max-w-xl">{aboutPage.hero.body}</p>
                </Reveal>
              </div>
              <Reveal delay={0.18} className="relative lg:col-span-6">
                <div className="absolute -left-4 top-5 h-full w-full rounded-t-[12rem] rounded-b-2xl bg-forest" aria-hidden />
                <Parallax className="img-zoom relative aspect-[5/5] overflow-hidden mask-arch-lg">
                  <Image
                    src={images.skyline}
                    alt="The Nairobi skyline at golden hour"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Parallax>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative overflow-hidden bg-forest text-[#fff7ee]">
          <div className="pointer-events-none absolute inset-0 text-[#fff7ee]/5 pattern-diag" aria-hidden />
          <div className="container-x relative">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="border-l border-[#fff7ee]/12 px-6 py-12 first:border-l-0 lg:px-10 lg:py-16"
                >
                  <span className="block font-display text-5xl font-semibold tracking-tight text-ochre lg:text-6xl">
                    {s.number}
                  </span>
                  <span className="mt-3 block text-[12px] font-bold uppercase tracking-[0.14em] text-[#fff7ee]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
              <Reveal className="relative lg:col-span-5">
                <div className="absolute -right-4 -top-5 h-full w-full rounded-t-[12rem] rounded-b-2xl bg-terracotta/15" aria-hidden />
                <Parallax className="img-zoom relative aspect-[4/5] overflow-hidden mask-arch-lg">
                  <Image
                    src={images.leaderPortrait}
                    alt="A Focus Africa Leadership executive in their Nairobi office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </Parallax>
              </Reveal>
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="eyebrow text-terracotta-dark">{aboutPage.story.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="h1 mt-4 text-ink">
                    {aboutPage.story.headingLead}{" "}
                    <span className="italic text-terracotta">{aboutPage.story.headingAccent}</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-6 space-y-5">
                    {aboutPage.story.paragraphs.map((p, i) => (
                      <p key={i} className="text-base leading-relaxed text-ink-2 lg:text-[17px]">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-line bg-cream-2 py-20 lg:py-28">
          <div className="container-x">
            <div className="mb-12 max-w-2xl lg:mb-14">
              <Reveal>
                <p className="eyebrow text-terracotta-dark">{aboutPage.valuesHeader.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="h1 mt-4 text-ink">
                  {aboutPage.valuesHeader.headingLead}{" "}
                  <span className="italic text-terracotta">{aboutPage.valuesHeader.headingAccent}</span>
                </h2>
              </Reveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {aboutPage.values.map((v, i) => {
                const tones = ["bg-terracotta/10 text-terracotta", "bg-ochre/15 text-ochre-dark", "bg-forest/10 text-forest", "bg-terracotta/10 text-terracotta"]
                return (
                  <Reveal key={v.id} delay={0.05 * i} className="h-full">
                    <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-8 lg:p-10">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-semibold ${tones[i % tones.length]}`}>
                        {v.id}
                      </span>
                      <h3 className="mt-5 font-display text-2xl font-medium text-ink">{v.title}</h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted">{v.description}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[2rem] bg-forest px-8 py-16 text-center text-[#fff7ee] lg:px-16 lg:py-20">
              <div className="pointer-events-none absolute inset-0 text-[#fff7ee]/[0.05] pattern-arch" aria-hidden />
              <Reveal>
                <p className="eyebrow relative text-ochre">{aboutPage.cta.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="relative mx-auto mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1] text-[#fff7ee] lg:text-6xl text-balance">
                  {aboutPage.cta.headingLead} <span className="italic text-ochre">{aboutPage.cta.headingAccent}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="relative mx-auto mt-6 max-w-xl text-lg font-light text-[#fff7ee]/75">{aboutPage.cta.body}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href={aboutPage.cta.primaryCta.href} className="btn btn-ochre group">
                    {aboutPage.cta.primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <span className="text-sm font-light text-[#fff7ee]/65">{aboutPage.cta.phoneNote}</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
