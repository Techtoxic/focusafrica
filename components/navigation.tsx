"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks, site, images } from "@/lib/content"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="stripe h-1.5 w-full" />
      <div
        className={`transition-all duration-300 ${
          scrolled ? "border-b border-line bg-cream/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="container-x">
          <div className="flex h-[72px] items-center justify-between lg:h-[84px]">
            <Link href="/" className="flex items-center gap-3" aria-label="Focus Africa Leadership home">
              <Image src={images.logo} alt="" width={44} height={44} className="h-10 w-10 rounded-md object-contain bg-white p-0.5 shadow-sm lg:h-11 lg:w-11" priority />
              <span className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-ink lg:text-[28px]">{site.brand}</span>
                <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta">
                  {site.brandSuffix}
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-9 lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="ul-link font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-ink/75 transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <Link href="/contact" className="btn btn-terra group">
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                className="touch-target p-2 text-ink"
                aria-label="Toggle menu"
              >
                {open ? <X size={26} strokeWidth={1.6} /> : <Menu size={26} strokeWidth={1.6} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-forest lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <nav className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/15 py-5 font-display text-4xl font-semibold text-[#fff7ee]"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-ochre mt-10 w-full">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
