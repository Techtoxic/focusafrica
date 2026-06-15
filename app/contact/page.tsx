"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, ArrowUpRight, type LucideIcon } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { contactPage, socialLinks } from "@/lib/content"

const iconMap: Record<string, LucideIcon> = { MapPin, Phone, Mail, Clock }
const ease = [0.16, 1, 0.3, 1] as const

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
        <section className="bg-bone pt-32 lg:pt-40">
          <div className="container-x pb-12 lg:pb-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow text-accent"
            >
              {contactPage.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="display mt-6 max-w-4xl text-ink text-balance"
            >
              {contactPage.hero.headingLead}{" "}
              <span className="text-accent">{contactPage.hero.headingAccent}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lede mt-7 max-w-xl"
            >
              {contactPage.hero.body}
            </motion.p>
          </div>
        </section>

        <section className="bg-bone pb-20 lg:pb-28">
          <div className="container-x">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Info */}
              <div className="lg:col-span-5">
                <div className="rounded-[2rem] bg-bone-2 p-8 lg:p-10">
                  <p className="eyebrow text-accent">{contactPage.infoIntro.eyebrow}</p>
                  <h2 className="h3 mt-4 text-ink">{contactPage.infoIntro.headingLead} {contactPage.infoIntro.headingAccent}</h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{contactPage.infoIntro.body}</p>

                  <div className="mt-8 space-y-6">
                    {contactPage.contactItems.map((item) => {
                      const Icon = iconMap[item.icon]
                      return (
                        <div key={item.label} className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                            {Icon ? <Icon className="h-5 w-5" strokeWidth={1.6} /> : null}
                          </span>
                          <div>
                            <p className="eyebrow text-muted">{item.label}</p>
                            {item.href ? (
                              <a href={item.href} className="mt-1 block text-lg text-ink transition-colors hover:text-accent">
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-1 text-lg text-ink">{item.value}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-8 border-t border-line pt-6">
                    <p className="eyebrow mb-4 text-muted">Follow Us</p>
                    <div className="flex gap-6">
                      {socialLinks.map((l) => (
                        <a
                          key={l.name}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-sm text-ink transition-colors hover:text-accent"
                        >
                          {l.name}
                          <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7">
                <div className="rounded-[2rem] bg-white p-8 lg:p-12">
                  <p className="eyebrow text-accent">{contactPage.form.eyebrow}</p>
                  <h3 className="h3 mt-3 text-ink">{contactPage.form.heading}</h3>

                  <form onSubmit={onSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field label="Full Name" name="name" value={form.name} onChange={onChange} required placeholder="John Doe" />
                      <Field label="Email Address" name="email" type="email" value={form.email} onChange={onChange} required placeholder="john@example.com" />
                    </div>
                    <Field label="Organization" name="organization" value={form.organization} onChange={onChange} placeholder="Your company or organization" />
                    <div>
                      <label htmlFor="message" className="eyebrow mb-2 block text-muted">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={onChange}
                        placeholder="Tell us about your project or inquiry..."
                        className="block w-full resize-none rounded-2xl border border-line bg-bone px-5 py-4 text-ink placeholder-muted/60 transition-colors focus:border-accent focus:bg-white focus:outline-none"
                      />
                    </div>

                    {status === "success" && (
                      <div className="rounded-2xl bg-accent/10 px-5 py-4 text-sm text-ink">{contactPage.form.successMessage}</div>
                    )}

                    <button type="submit" disabled={submitting} className="btn btn-accent group disabled:opacity-50">
                      {submitting ? "Sending..." : "Submit"}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
      <label htmlFor={name} className="eyebrow mb-2 block text-muted">
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
        className="block w-full rounded-2xl border border-line bg-bone px-5 py-4 text-ink placeholder-muted/60 transition-colors focus:border-accent focus:bg-white focus:outline-none"
      />
    </div>
  )
}
