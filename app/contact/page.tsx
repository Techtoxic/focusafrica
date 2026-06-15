"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { contactPage, socialLinks } from "@/lib/content"

const iconMap: Record<string, LucideIcon> = { MapPin, Phone, Mail, Clock }

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success">("idle")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setStatus("success")
    setSubmitting(false)
    setForm({ name: "", email: "", organization: "", message: "" })
    setTimeout(() => setStatus("idle"), 5000)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-paper pt-28 lg:pt-36">
          <div className="container-x pb-12 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="rule" />
              <p className="eyebrow text-brass-dark">{contactPage.hero.eyebrow}</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-display mt-6 max-w-3xl text-navy text-balance"
            >
              {contactPage.hero.headingLead}{" "}
              <span className="italic text-brass-dark">{contactPage.hero.headingAccent}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lede mt-6 max-w-xl"
            >
              {contactPage.hero.body}
            </motion.p>
          </div>
        </section>

        {/* Body */}
        <section className="border-t border-line bg-paper-alt py-16 lg:py-24">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Info */}
              <div className="lg:col-span-5">
                <p className="eyebrow text-brass-dark">{contactPage.infoIntro.eyebrow}</p>
                <h2 className="h2 mt-4 text-navy">
                  {contactPage.infoIntro.headingLead}{" "}
                  <span className="italic text-brass-dark">{contactPage.infoIntro.headingAccent}</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{contactPage.infoIntro.body}</p>

                <div className="mt-10 space-y-7">
                  {contactPage.contactItems.map((item) => {
                    const Icon = iconMap[item.icon]
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-white text-navy">
                          {Icon ? <Icon className="h-5 w-5" strokeWidth={1.5} /> : null}
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-1 block text-lg text-navy transition-colors hover:text-brass-dark"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-lg text-navy">{item.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-10 border-t border-line pt-8">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Follow Us</p>
                  <div className="flex gap-6">
                    {socialLinks.map((l) => (
                      <a
                        key={l.name}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-sm text-navy transition-colors hover:text-brass-dark"
                      >
                        {l.name}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7">
                <div className="border border-line bg-white p-8 lg:p-10">
                  <p className="eyebrow text-brass-dark">{contactPage.form.eyebrow}</p>
                  <h3 className="mt-3 font-serif text-2xl text-navy lg:text-3xl">{contactPage.form.heading}</h3>

                  <form onSubmit={onSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field label="Full Name" name="name" value={form.name} onChange={onChange} required placeholder="John Doe" />
                      <Field label="Email Address" name="email" type="email" value={form.email} onChange={onChange} required placeholder="john@example.com" />
                    </div>
                    <Field label="Organization" name="organization" value={form.organization} onChange={onChange} placeholder="Your company or organization" />
                    <div>
                      <label htmlFor="message" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={onChange}
                        placeholder="Tell us about your project or inquiry..."
                        className="block w-full resize-none border border-line bg-paper-alt px-4 py-3 text-ink placeholder-muted/60 transition-colors focus:border-navy focus:bg-white focus:outline-none"
                      />
                    </div>

                    {status === "success" && (
                      <div className="border-l-2 border-brass bg-brass-soft px-4 py-3 text-sm text-ink">
                        {contactPage.form.successMessage}
                      </div>
                    )}

                    <button type="submit" disabled={submitting} className="btn btn-navy group disabled:opacity-50">
                      {submitting ? "Sending..." : "Submit"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full border border-line bg-paper-alt px-4 py-3 text-ink placeholder-muted/60 transition-colors focus:border-navy focus:bg-white focus:outline-none"
      />
    </div>
  )
}
