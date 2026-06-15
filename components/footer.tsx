"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navLinks, socialLinks, footerServiceLinks, site } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-forest text-[#fff7ee]">
      <div className="stripe h-1.5 w-full" />
      <div className="container-x py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold text-[#fff7ee]">{site.brand}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ochre">{site.brandSuffix}</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#fff7ee]/65">{site.tagline}</p>
            <div className="mt-8 space-y-2 text-sm text-[#fff7ee]/75">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="transition-colors hover:text-ochre">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="transition-colors hover:text-ochre">
                  {site.email}
                </a>
              </p>
              <p className="pt-1 text-[#fff7ee]/45">{site.hours}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <FooterCol title="Explore">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-[#fff7ee]/70 transition-colors hover:text-[#fff7ee]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </FooterCol>
              <FooterCol title="Services">
                {footerServiceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-[#fff7ee]/70 transition-colors hover:text-[#fff7ee]">
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
                      className="group inline-flex items-center gap-1 text-sm text-[#fff7ee]/70 transition-colors hover:text-[#fff7ee]"
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#fff7ee]/12 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[#fff7ee]/45">
            © {new Date().getFullYear()} Focus Africa Leadership. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-[#fff7ee]/45 transition-colors hover:text-[#fff7ee]/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#fff7ee]/45 transition-colors hover:text-[#fff7ee]/80">
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
      <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-ochre">{title}</h4>
      <ul className="space-y-3.5">{children}</ul>
    </div>
  )
}
