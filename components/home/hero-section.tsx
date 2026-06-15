"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Parallax } from "@/components/reveal"
import { hero, images } from "@/lib/content"

const ease = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bone pt-32 lg:pt-40">
      <div className="container-x">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-line pb-5"
        >
          <p className="eyebrow text-ink">{hero.eyebrow}</p>
          <p className="eyebrow text-muted">(01 — Nairobi, Kenya)</p>
        </motion.div>

        {/* giant headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease }}
          className="display mt-8 text-ink text-balance"
        >
          {hero.lines[0]} {hero.lines[1]}
          <br />
          {hero.lines[2].split(" ")[0]}{" "}
          <span className="text-accent">{hero.lines[2].split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* asymmetric body / image */}
        <div className="mt-12 grid items-end gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="lg:col-span-5"
          >
            <p className="lede max-w-md">{hero.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href={hero.primaryCta.href} className="btn btn-ink group">
                {hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href={hero.secondaryCta.href} className="ul-link font-display text-base font-medium text-ink">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="lg:col-span-7"
          >
            <Parallax className="img-zoom duo relative aspect-[16/11] overflow-hidden rounded-[2rem]">
              <Image
                src={images.heroBoardroom}
                alt="Focus Africa Leadership advisors in a strategy session in a Nairobi boardroom"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </Parallax>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
