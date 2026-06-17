"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { hero, images } from "@/lib/content"

const ease = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 lg:pt-32">
      {/* subtle backdrop, behind content */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-gradient-to-b from-ochre/10 via-cream to-cream" aria-hidden />
      {/* faded grid pattern */}
      <div className="pointer-events-none absolute inset-0 text-ink/[0.05] pattern-grid" aria-hidden />
      <div className="pointer-events-none absolute -right-40 top-10 -z-10 hidden h-[42rem] w-[42rem] rounded-full bg-ochre/20 blur-3xl lg:block" aria-hidden />

      <div className="container-x relative">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-28">
          {/* COPY */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-terracotta/10 px-4 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              <p className="eyebrow text-terracotta-dark">{hero.eyebrow}</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="display mt-6 text-ink text-balance"
            >
              {hero.lines[0]} {hero.lines[1]}{" "}
              <span className="text-terracotta">{hero.lines[2]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="lede mt-7 max-w-xl"
            >
              {hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <Link href={hero.primaryCta.href} className="btn btn-terra group">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href={hero.secondaryCta.href} className="ul-link font-sans text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                {hero.secondaryCta.label}
              </Link>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(28,20,13,0.5)] ring-1 ring-ink/5">
              <Image
                src={images.heroBoardroom}
                alt="Focus Africa Leadership advisors in a strategy session in their Nyeri boardroom"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* in-image badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-cream/95 px-4 py-3 shadow-lg backdrop-blur">
                <span className="font-display text-3xl font-bold leading-none text-terracotta">28</span>
                <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-ink/70">
                  African
                  <br />
                  countries
                </span>
              </div>
            </div>

            {/* decorative offset block, contained behind image, desktop only */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 hidden h-2/3 w-2/3 rounded-[2rem] bg-forest lg:block" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
