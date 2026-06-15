"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Parallax } from "@/components/reveal"
import { hero, images } from "@/lib/content"

const ease = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 lg:pt-36">
      {/* structural geometry */}
      <div className="pointer-events-none absolute -right-24 -top-10 h-[34rem] w-[34rem] rounded-full bg-ochre/15" aria-hidden />
      <div className="pointer-events-none absolute right-1/3 top-24 hidden h-40 w-40 text-terracotta/20 pattern-dots lg:block" aria-hidden />

      <div className="container-x relative">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-12 lg:gap-12 lg:pb-28">
          <div className="lg:col-span-6">
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
              <span className="italic text-terracotta">{hero.lines[2]}</span>
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
              transition={{ duration: 0.7, delay: 0.34 }}
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

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="relative lg:col-span-6"
          >
            {/* color block behind */}
            <div className="absolute -left-4 top-6 h-full w-full rounded-t-[14rem] rounded-b-2xl bg-forest" aria-hidden />
            <Parallax className="img-zoom relative aspect-[4/5] overflow-hidden mask-arch-lg">
              <Image
                src={images.heroBoardroom}
                alt="Focus Africa Leadership advisors in a strategy session in a Nairobi boardroom"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
            {/* floating tag */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl bg-ochre px-5 py-4 shadow-xl">
              <span className="font-display text-3xl font-semibold leading-none text-ink">28</span>
              <span className="text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-ink/70">
                African
                <br />
                countries
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
