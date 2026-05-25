"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowUpRight } from "lucide-react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "International House, Nairobi, Kenya",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+254 706 193 987",
    href: "tel:+254706193987",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@focusafrica.co.ke",
    href: "mailto:info@focusafrica.co.ke",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Friday, 9:30 am – 5:30 pm",
  },
]

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/FocusAfrica7" },
  { name: "LinkedIn", href: "https://linkedin.com/company/focus-africa-leadership" },
  { name: "Facebook", href: "https://facebook.com/FOCUSAFRICALTD" },
]

export default function ContactPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" })
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitStatus("success")
    setIsSubmitting(false)
    setFormState({ name: "", email: "", organization: "", message: "" })
    
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Navigation variant="dark" />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="eyebrow mb-6 text-gold"
              >
                Contact
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="headline-xl text-warm-white"
              >
                Let&apos;s start a
                <br />
                <span className="italic">conversation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 max-w-xl text-lg font-light text-warm-white/60"
              >
                We&apos;d love to hear about your project. Reach out and let&apos;s explore 
                how we can work together.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={formRef} className="bg-warm-white py-24 lg:py-40">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <p className="eyebrow mb-6 text-stone">Get in Touch</p>
                <h2 className="headline-md text-charcoal">
                  Contact
                  <span className="italic"> information</span>
                </h2>
                <p className="mt-6 text-base font-light leading-relaxed text-charcoal/60">
                  Reach out through any of the channels below or fill out the form 
                  and we&apos;ll get back to you within 24 hours.
                </p>

                <div className="mt-12 space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-charcoal">
                        <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/40">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-lg text-charcoal transition-colors duration-300 hover:text-gold"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-lg text-charcoal">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-16 pt-12 border-t border-charcoal/10">
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/40 mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-sm text-charcoal transition-colors duration-300 hover:text-gold"
                      >
                        {link.name}
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <div className="bg-warm-gray p-8 lg:p-12">
                  <p className="eyebrow mb-4 text-stone">Send a Message</p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-charcoal">
                    Ready to experience our services?
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/40 mb-3">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="block w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-charcoal placeholder-charcoal/30 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-0"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/40 mb-3">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="block w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-charcoal placeholder-charcoal/30 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-0"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/40 mb-3">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        className="block w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-charcoal placeholder-charcoal/30 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-0"
                        placeholder="Your company or organization"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/40 mb-3">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="block w-full resize-none border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-charcoal placeholder-charcoal/30 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-0"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="bg-charcoal/5 p-4 text-sm text-charcoal">
                        Thank you for your message! We&apos;ll get back to you within 24 hours.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-red-50 p-4 text-sm text-red-800">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-3 bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-warm-white transition-all duration-300 hover:bg-gold hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
