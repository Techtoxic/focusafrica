"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navLinks, socialLinks, footerServiceLinks, site } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="h-[3px] w-full bg-brass" />
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-serif text-3xl text-white">{site.brand}</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                {site.brandSuffix}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">{site.tagline}</p>
            <div className="mt-8 space-y-2 text-sm text-white/70">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="transition-colors hover:text-brass">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="transition-colors hover:text-brass">
                  {site.email}
                </a>
              </p>
              <p className="pt-1 text-white/45">{site.hours}</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <FooterCol title="Navigation">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </FooterCol>
              <FooterCol title="Services">
                {footerServiceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </FooterCol>
              <FooterCol title="Connect">
                {socialLinks.map((l) => (
                  <li key={l.name}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {l.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </FooterCol>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Focus Africa Leadership. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/45 transition-colors hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/45 transition-colors hover:text-white/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass">{title}</h4>
      <ul className="space-y-3.5">{children}</ul>
    </div>
  )
}
