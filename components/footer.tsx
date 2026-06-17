"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
import { navLinks, socialLinks, footerServiceLinks, site, images } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-forest text-[#fff7ee]">
      <div className="stripe h-1.5 w-full" />
      <div className="container-x py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Focus Africa Leadership home">
              <Image src={images.logo} alt="" width={56} height={56} className="h-12 w-12 rounded-md object-contain bg-white p-1 shadow-sm" />
              <span className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-[#fff7ee]">{site.brand}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ochre">{site.brandSuffix}</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#fff7ee]/65">{site.tagline}</p>
            <div className="mt-8 space-y-2 text-sm text-[#fff7ee]/75">
              <p>{site.address}</p>
              <p className="text-[#fff7ee]/60">{site.postal}</p>
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
                <li className="flex flex-wrap items-center gap-2.5">
                  {socialLinks.map((l) => {
                    const Icon =
                      l.name === "Twitter" ? Twitter :
                      l.name === "LinkedIn" ? Linkedin :
                      l.name === "Facebook" ? Facebook :
                      l.name === "Instagram" ? Instagram :
                      l.name === "YouTube" ? Youtube : ArrowUpRight
                    return (
                      <a
                        key={l.name}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={l.name}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#fff7ee]/15 bg-[#fff7ee]/[0.04] text-[#fff7ee]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre hover:bg-ochre hover:text-forest"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </a>
                    )
                  })}
                </li>
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
