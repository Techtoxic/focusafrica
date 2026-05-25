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
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" })

  return (
    <>
      <Navigation variant="dark" />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[70vh] bg-charcoal flex items-end pb-20 lg:pb-32 pt-32">
          <div className="absolute inset-0">
            <Image
              src="/images/about-hero.jpg"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
          </div>
          
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6 text-gold"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline-xl text-warm-white max-w-4xl"
            >
              A trusted partner
              <br />
              <span className="italic">for over a decade</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg font-light text-warm-white/60"
            >
              Empowering businesses, individuals, and organizations throughout Africa 
              with strategic solutions for sustainable growth.
            </motion.p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gold">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col gap-1 border-l border-charcoal/10 px-6 lg:px-8 py-8 first:border-l-0"
                >
                  <span className="font-serif text-3xl lg:text-4xl text-charcoal">{stat.number}</span>
                  <span className="text-[10px] lg:text-xs uppercase tracking-wider text-charcoal/60">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section ref={storyRef} className="bg-[#0a0a0a] py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden img-zoom">
                  <Image
                    src="/images/about-story.jpg"
                    alt="Focus Africa Leadership team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 border border-gold/30" />
              </motion.div>
              
              <div className="order-1 lg:order-2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="eyebrow mb-6 text-stone"
                >
                  Our Journey
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="headline-md text-warm-white"
                >
                  Building Africa&apos;s
                  <span className="italic"> future together</span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8 space-y-6"
                >
                  <p className="text-base font-light leading-relaxed text-warm-white/60">
                    Founded in 2016, Focus Africa Leadership was established with a vision to drive 
                    sustainable growth, innovation, and empowerment across Africa&apos;s unique business 
                    landscape. We believe in the potential of every individual and organization to 
                    achieve greatness.
                  </p>
                  <p className="text-base font-light leading-relaxed text-warm-white/60">
                    With a strong focus on customer satisfaction and a team of experienced professionals, 
                    we strive to deliver unparalleled results and create a lasting positive impact. Our 
                    approach combines deep local knowledge with global best practices.
                  </p>
                  <p className="text-base font-light leading-relaxed text-warm-white/60">
                    Over the past years, we have expanded our reach across 28 countries, transforming 
                    thousands of lives and completing over 500 successful projects.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="bg-[#111111] py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="eyebrow mb-6 text-gold"
                >
                  Our Values
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="headline-lg text-warm-white max-w-xl"
                >
                  Why choose
                  <span className="italic"> Focus Africa</span>
                </motion.h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-warm-white/5">
              {values.map((value, index) => (
                <motion.article
                  key={value.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-charcoal p-8 lg:p-12 group"
                >
                  <span className="font-serif text-5xl lg:text-6xl text-warm-white/5 group-hover:text-gold/20 transition-colors duration-500">
                    {value.id}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-warm-white">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-base font-light leading-relaxed text-warm-white/40">
                    {value.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection className="bg-[#0a0a0a] py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow mb-6 text-stone">Get Started</p>
              <h2 className="headline-lg text-warm-white">
                Ready to unlock
                <br />
                <span className="italic">your potential?</span>
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-charcoal/60 max-w-xl mx-auto">
                Take action and embark on a journey to achieve your goals.
                Partner with us to create lasting impact.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-warm-white transition-all duration-300 hover:bg-gold hover:text-charcoal"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:+254706193987"
                  className="inline-flex items-center gap-2 text-sm font-light text-charcoal/60 transition-colors duration-300 hover:text-charcoal"
                >
                  Or call: +254 706 193 987
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
