"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { hero, images } from "@/lib/content"

export function HeroSection() {
  return (
    <section className="relative bg-paper pt-28 lg:pt-36">
      <div className="container-x">
        <div className="grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-24">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="rule" />
              <p className="eyebrow text-brass-dark">{hero.eyebrow}</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-display mt-6 text-navy text-balance"
            >
              {hero.lines[0]} {hero.lines[1]}{" "}
              <span className="relative whitespace-nowrap">
                {hero.lines[2]}
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-brass/70" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lede mt-7 max-w-xl"
            >
              {hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <Link href={hero.primaryCta.href} className="btn btn-navy group">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="ul-link text-sm font-medium uppercase tracking-[0.1em] text-navy"
              >
                {hero.secondaryCta.label}
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="img-zoom relative aspect-[4/3] overflow-hidden border border-line lg:aspect-[5/4]">
              <Image
                src={images.heroBoardroom}
                alt="Focus Africa Leadership advisors in a strategy session in a Nairobi boardroom"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* overlapping credential card */}
            <div className="absolute -bottom-6 left-6 hidden border border-line bg-navy px-7 py-5 text-white shadow-xl sm:block">
              <span className="block font-serif text-3xl leading-none">28</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/65">
                African countries
              </span>
            </div>
            <div className="absolute -top-3 -right-3 hidden h-16 w-16 border-t-2 border-r-2 border-brass lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
