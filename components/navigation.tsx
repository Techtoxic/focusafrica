"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks, site } from "@/lib/content"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* thin brass institutional rule */}
      <div className="h-[3px] w-full bg-brass" />
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-line bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(11,31,58,0.04)]"
            : "border-transparent bg-white"
        }`}
      >
        <nav className="container-x">
          <div className="flex h-[72px] items-center justify-between lg:h-20">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-navy lg:text-[28px]">{site.brand}</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                {site.brandSuffix}
              </span>
            </Link>

            <div className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ul-link text-[13px] font-medium uppercase tracking-[0.1em] text-ink/80 transition-colors hover:text-navy"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link href="/contact" className="btn btn-navy group">
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-navy lg:hidden touch-target"
              aria-label="Toggle menu"
            >
              {open ? <X size={26} strokeWidth={1.4} /> : <Menu size={26} strokeWidth={1.4} />}
            </button>
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
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line py-5 font-serif text-3xl text-navy"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-navy mt-10 w-full"
              >
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
