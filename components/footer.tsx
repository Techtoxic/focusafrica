"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#agriculture", label: "Agriculture & Climate" },
    { href: "/services#research", label: "Research & Development" },
    { href: "/services#training", label: "Training & Capacity" },
    { href: "/services#monitoring", label: "Monitoring & Evaluation" },
  ],
  social: [
    { href: "https://twitter.com/FocusAfrica7", label: "Twitter" },
    { href: "https://linkedin.com/company/focus-africa-leadership", label: "LinkedIn" },
    { href: "https://facebook.com/FOCUSAFRICALTD", label: "Facebook" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#080808]">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl text-warm-white">Focus Africa</span>
              <span className="ml-2 text-[10px] uppercase tracking-[0.15em] text-warm-white/40">Leadership</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-warm-white/40">
              Strategic consultancy empowering Africa&apos;s future leaders with 
              innovative solutions for sustainable growth across the continent.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-2 text-sm text-warm-white/40">
              <p>International House, Nairobi, Kenya</p>
              <p>
                <a href="tel:+254706193987" className="hover:text-gold transition-colors">
                  +254 706 193 987
                </a>
              </p>
              <p>
                <a href="mailto:info@focusafrica.co.ke" className="hover:text-gold transition-colors">
                  info@focusafrica.co.ke
                </a>
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {/* Navigation */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-warm-white/30 mb-6">
                  Navigation
                </h4>
                <ul className="space-y-4">
                  {footerLinks.navigation.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-warm-white/60 transition-colors duration-300 hover:text-warm-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-warm-white/30 mb-6">
                  Services
                </h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-warm-white/60 transition-colors duration-300 hover:text-warm-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-warm-white/30 mb-6">
                  Connect
                </h4>
                <ul className="space-y-4">
                  {footerLinks.social.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-warm-white/60 transition-colors duration-300 hover:text-warm-white group"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-warm-white/30">
              © {new Date().getFullYear()} Focus Africa Leadership. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-warm-white/30 hover:text-warm-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-warm-white/30 hover:text-warm-white/60 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
