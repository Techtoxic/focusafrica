"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks, site } from "@/lib/content"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-bone/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x">
        <div className="flex h-[76px] items-center justify-between lg:h-[88px]">
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-ink lg:text-[26px]">
            {site.brand}
            <span className="text-accent">.</span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="ul-link font-display text-[15px] font-medium text-ink/75 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn btn-accent group">
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="touch-target p-2 text-ink lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bone lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <nav className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line py-5 font-display text-5xl font-semibold tracking-tight text-ink"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-accent mt-10 w-full">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
