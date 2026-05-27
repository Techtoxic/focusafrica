"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Navigation({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = variant === "dark" || isScrolled
  const textColor = isDark ? "text-warm-white" : "text-charcoal"
  const textMuted = isDark ? "text-warm-white/70" : "text-charcoal/70"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050506]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-baseline gap-1">
            <span className={`font-serif text-2xl lg:text-3xl font-normal ${textColor} transition-colors duration-300`}>
              Focus Africa
            </span>
            <span className={`text-[10px] uppercase tracking-[0.15em] ${textMuted} transition-colors duration-300`}>
              Leadership
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wide ${textMuted} transition-colors duration-300 hover:${textColor} link-hover`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl border border-[#B8860B] bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#B8860B] transition-all duration-300 hover:bg-[#B8860B] hover:text-[#050506]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${textColor} lg:hidden p-2`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-charcoal lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 font-serif text-4xl text-warm-white transition-colors duration-200 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-3 border border-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-gold transition-all duration-200 hover:bg-[#B8860B] hover:text-[#050506]"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
