"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const values = [
  {
    id: "01",
    title: "Innovation",
    description: "We push the boundaries of creativity to deliver cutting-edge solutions that address Africa's unique challenges and opportunities.",
  },
  {
    id: "02",
    title: "Expertise",
    description: "Our seasoned professionals bring unmatched expertise across diverse sectors, combining local knowledge with global best practices.",
  },
  {
    id: "03",
    title: "Collaboration",
    description: "We build strong partnerships and foster teamwork that delivers lasting results for all stakeholders across the value chain.",
  },
  {
    id: "04",
    title: "Integrity",
    description: "Ethical business practices and transparent communication form the foundation of every engagement and relationship we build.",
  },
]

const stats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "500+", label: "Projects Delivered" },
  { number: "28", label: "African Countries" },
  { number: "98%", label: "Client Retention" },
]

function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isStoryInView = useInView(storyRef, { once: true, margin: "-80px" })
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-80px" })

  return (
    <>
      <Navigation variant="dark" />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[65vh] bg-[#050506] flex items-end pb-16 lg:pb-24 pt-28">
          <div className="absolute inset-0">
            <Image src="/images/about-hero.jpg" alt="" fill className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/60 to-transparent" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B8860B]/30 z-20" />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#B8860B]" />
              <p className="eyebrow text-[#B8860B]">About Us</p>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="headline-xl text-[#EDEDEF] max-w-4xl">
              A trusted partner<br /><span className="italic text-[#B8860B]">for over a decade</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="mt-6 max-w-xl text-lg font-light text-[#8A8F98]">
              Empowering businesses, individuals, and organizations throughout Africa with strategic solutions for sustainable growth.
            </motion.p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#B8860B]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="flex flex-col gap-1 border-l border-black/10 px-6 lg:px-8 py-6 first:border-l-0">
                  <span className="font-serif text-3xl lg:text-4xl text-[#050506]">{stat.number}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#050506]/60">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section ref={storyRef} className="bg-[#050506] py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={isStoryInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative order-2 lg:order-1">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl img-zoom">
                  <Image src="/images/about-story.jpg" alt="Focus Africa team collaboration" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050506]/30 to-transparent" />
                </div>
              </motion.div>
              <div className="order-1 lg:order-2">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isStoryInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[#B8860B]" />
                  <p className="eyebrow text-[#B8860B]">Our Journey</p>
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 36 }} animate={isStoryInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="headline-md text-[#EDEDEF]">
                  Building Africa&apos;s<span className="italic text-[#B8860B]"> future together</span>
                </motion.h2>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isStoryInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 space-y-5">
                  <p className="text-base font-light leading-relaxed text-[#8A8F98]">Founded in 2016, Focus Africa Leadership was established with a vision to drive sustainable growth, innovation, and empowerment across Africa&apos;s unique business landscape.</p>
                  <p className="text-base font-light leading-relaxed text-[#8A8F98]">With a strong focus on customer satisfaction and a team of experienced professionals, we strive to deliver unparalleled results and create lasting positive impact combining deep local knowledge with global best practices.</p>
                  <p className="text-base font-light leading-relaxed text-[#8A8F98]">Over the years, we have expanded our reach across 28 countries, transforming thousands of lives and completing over 500 successful projects.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="bg-[#0a0a0c] py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isValuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-[#B8860B]" />
                  <p className="eyebrow text-[#B8860B]">Our Values</p>
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isValuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="headline-lg text-[#EDEDEF] max-w-xl">
                  Why choose <span className="italic text-[#B8860B]">Focus Africa</span>
                </motion.h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <motion.article key={value.id} initial={{ opacity: 0, y: 40 }} animate={isValuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} className="card-dark p-8 lg:p-10 group transition-all duration-500 hover:-translate-y-1">
                  <span className="font-serif text-5xl text-white/[0.04] group-hover:text-[#B8860B]/15 transition-colors duration-500">{value.id}</span>
                  <h3 className="mt-5 font-serif text-2xl text-[#EDEDEF] group-hover:text-[#B8860B] transition-colors duration-400">{value.title}</h3>
                  <div className="mt-3 h-px w-6 bg-[#B8860B]/30 group-hover:w-10 group-hover:bg-[#B8860B]/60 transition-all duration-500" />
                  <p className="mt-4 text-base font-light leading-relaxed text-[#8A8F98]">{value.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection className="bg-[#050506] py-16 lg:py-20 border-t border-white/5">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#B8860B]" />
              <p className="eyebrow text-[#B8860B]">Get Started</p>
              <div className="h-px w-8 bg-[#B8860B]" />
            </div>
            <h2 className="headline-lg text-[#EDEDEF]">Ready to unlock<br /><span className="italic text-[#B8860B]">your potential?</span></h2>
            <p className="mt-5 text-lg font-light text-[#8A8F98] max-w-xl mx-auto">Partner with us to create lasting impact across Africa.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="group glow-gold inline-flex items-center gap-3 rounded-xl bg-[#B8860B] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#050506] transition-all duration-300 hover:bg-[#D4A949] touch-target">
                Get in Touch <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a href="tel:+254706193987" className="text-sm font-light text-[#8A8F98] transition-colors duration-300 hover:text-[#EDEDEF]">Or call: +254 706 193 987</a>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
