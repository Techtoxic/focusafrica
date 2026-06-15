"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navLinks, socialLinks, footerServiceLinks, site } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-x py-16 lg:py-24">
        {/* Big wordmark row */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-accent">Let&apos;s build something</p>
            <Link
              href="/contact"
              className="group mt-4 inline-flex items-end gap-3 font-display text-5xl font-semibold leading-none tracking-tight text-bone sm:text-6xl lg:text-7xl"
            >
              Start a project
              <ArrowUpRight className="h-9 w-9 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:h-12 lg:w-12" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-semibold text-bone">
              {site.brand}
              <span className="text-accent">.</span>{" "}
              <span className="text-base font-normal text-bone/45">{site.brandSuffix}</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/55">{site.tagline}</p>
            <div className="mt-7 space-y-1.5 text-sm text-bone/65">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="transition-colors hover:text-accent">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="transition-colors hover:text-accent">
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <FooterCol title="Menu">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="ul-link text-sm text-bone/70 hover:text-bone">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </FooterCol>
              <FooterCol title="Services">
                {footerServiceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="ul-link text-sm text-bone/70 hover:text-bone">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </FooterCol>
              <FooterCol title="Social">
                {socialLinks.map((l) => (
                  <li key={l.name}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-bone/70 transition-colors hover:text-bone"
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-bone/40">© {new Date().getFullYear()} Focus Africa Leadership. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-bone/40 transition-colors hover:text-bone/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-bone/40 transition-colors hover:text-bone/70">
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
      <h4 className="mb-5 eyebrow text-bone/40">{title}</h4>
      <ul className="space-y-3.5">{children}</ul>
    </div>
  )
}
