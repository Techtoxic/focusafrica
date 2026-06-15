import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Reveal, Parallax } from "@/components/reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
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
        <section className="bg-bone pt-32 lg:pt-40">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow text-accent">{aboutPage.hero.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-6 max-w-5xl text-ink text-balance">
                {aboutPage.hero.headingLead}{" "}
                <span className="text-accent">{aboutPage.hero.headingAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede mt-8 max-w-xl">{aboutPage.hero.body}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-12 overflow-hidden rounded-[2rem]">
                <Parallax className="duo relative aspect-[16/9] overflow-hidden rounded-[2rem]">
                  <Image
                    src={images.skyline}
                    alt="The Nairobi skyline at golden hour"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </Parallax>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-bone py-20 lg:py-28">
          <div className="container-x">
            <div className="grid gap-y-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
              {aboutStats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <span className="block font-display text-6xl font-semibold tracking-tight text-accent lg:text-7xl">
                    {s.number}
                  </span>
                  <span className="mt-4 block font-display text-base font-medium text-ink">{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="border-y border-line bg-bone-2 py-20 lg:py-32">
          <div className="container-x">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <Parallax className="soft relative aspect-[4/5] overflow-hidden rounded-t-[12rem] rounded-b-[2rem]">
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
                  <p className="eyebrow text-accent">{aboutPage.story.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="h1 mt-5 text-ink">
                    {aboutPage.story.headingLead}{" "}
                    <span className="italic text-accent">{aboutPage.story.headingAccent}</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-7 space-y-5">
                    {aboutPage.story.paragraphs.map((p, i) => (
                      <p key={i} className="lede">
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
        <section className="bg-bone py-20 lg:py-28">
          <div className="container-x">
            <div className="mb-12 max-w-2xl lg:mb-16">
              <Reveal>
                <p className="eyebrow text-accent">{aboutPage.valuesHeader.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="h1 mt-5 text-ink">
                  {aboutPage.valuesHeader.headingLead}{" "}
                  <span className="italic text-accent">{aboutPage.valuesHeader.headingAccent}</span>
                </h2>
              </Reveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {aboutPage.values.map((v, i) => (
                <Reveal key={v.id} delay={0.05 * i} className={i % 2 === 1 ? "sm:mt-10" : ""}>
                  <article className="rounded-[2rem] bg-bone-2 p-8 lg:p-10">
                    <span className="font-display text-2xl font-semibold text-accent">{v.id}</span>
                    <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">{v.title}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">{v.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bone pb-20 lg:pb-28">
          <div className="container-x">
            <div className="rounded-[2.5rem] bg-ink px-8 py-16 text-center lg:px-16 lg:py-24">
              <Reveal>
                <p className="eyebrow text-accent">{aboutPage.cta.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white lg:text-7xl text-balance">
                  {aboutPage.cta.headingLead} {aboutPage.cta.headingAccent}
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/70">{aboutPage.cta.body}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href={aboutPage.cta.primaryCta.href} className="btn btn-accent group">
                    {aboutPage.cta.primaryCta.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="text-sm font-light text-white/60">{aboutPage.cta.phoneNote}</span>
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
