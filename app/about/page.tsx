import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
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
        <section className="bg-paper pt-28 lg:pt-36">
          <div className="container-x">
            <div className="grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
              <div className="lg:col-span-6">
                <Reveal className="flex items-center gap-3">
                  <span className="rule" />
                  <p className="eyebrow text-brass-dark">{aboutPage.hero.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="h-display mt-6 text-navy text-balance">
                    {aboutPage.hero.headingLead}{" "}
                    <span className="italic text-brass-dark">{aboutPage.hero.headingAccent}</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="lede mt-7 max-w-xl">{aboutPage.hero.body}</p>
                </Reveal>
              </div>
              <Reveal delay={0.2} className="lg:col-span-6">
                <div className="img-zoom relative aspect-[5/4] overflow-hidden border border-line">
                  <Image
                    src={images.skyline}
                    alt="The Nairobi skyline at golden hour"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-navy">
          <div className="container-x">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="border-l border-white/10 px-6 py-10 first:border-l-0 lg:px-10 lg:py-14"
                >
                  <span className="block font-serif text-4xl text-white lg:text-5xl">{s.number}</span>
                  <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-paper py-20 lg:py-28">
          <div className="container-x">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <div className="img-zoom relative aspect-[4/5] overflow-hidden border border-line">
                  <Image
                    src={images.leaderPortrait}
                    alt="A Focus Africa Leadership executive in their Nairobi office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div className="lg:col-span-7">
                <Reveal className="flex items-center gap-3">
                  <span className="rule" />
                  <p className="eyebrow text-brass-dark">{aboutPage.story.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="h1 mt-6 text-navy">
                    {aboutPage.story.headingLead}{" "}
                    <span className="italic text-brass-dark">{aboutPage.story.headingAccent}</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-6 space-y-5">
                    {aboutPage.story.paragraphs.map((p, i) => (
                      <p key={i} className="text-base leading-relaxed text-muted lg:text-[17px]">
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
        <section className="border-y border-line bg-paper-alt py-20 lg:py-28">
          <div className="container-x">
            <div className="mb-12 max-w-2xl lg:mb-14">
              <Reveal className="flex items-center gap-3">
                <span className="rule" />
                <p className="eyebrow text-brass-dark">{aboutPage.valuesHeader.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h1 mt-5 text-navy">
                  {aboutPage.valuesHeader.headingLead}{" "}
                  <span className="italic text-brass-dark">{aboutPage.valuesHeader.headingAccent}</span>
                </h2>
              </Reveal>
            </div>
            <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {aboutPage.values.map((v, i) => (
                <Reveal key={v.id} delay={0.05 * i} className="h-full">
                  <article className="flex h-full flex-col bg-white p-8 lg:p-10">
                    <span className="font-serif text-4xl text-brass/40">{v.id}</span>
                    <h3 className="mt-5 font-serif text-2xl text-navy">{v.title}</h3>
                    <span className="mt-3 h-px w-8 bg-brass/40" />
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">{v.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20 lg:py-24">
          <div className="container-x text-center">
            <Reveal className="flex items-center justify-center gap-3">
              <span className="rule" />
              <p className="eyebrow text-brass">{aboutPage.cta.eyebrow}</p>
              <span className="rule" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mx-auto mt-6 max-w-3xl text-white">
                {aboutPage.cta.headingLead}{" "}
                <span className="italic text-brass">{aboutPage.cta.headingAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/70">{aboutPage.cta.body}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={aboutPage.cta.primaryCta.href} className="btn btn-brass group">
                  {aboutPage.cta.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="text-sm font-light text-white/60">{aboutPage.cta.phoneNote}</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
