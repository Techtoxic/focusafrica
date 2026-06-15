// ─────────────────────────────────────────────────────────────
// Focus Africa Leadership — centralized site content.
// Copy is preserved verbatim from the approved site. This module
// is the single source of truth for every string + asset path so
// all sections stay in sync (and so a CMS like Sanity can later
// map 1:1 onto these shapes).
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "Focus Africa",
  brandSuffix: "Leadership",
  tagline:
    "Strategic consultancy empowering Africa's future leaders with innovative solutions for sustainable growth across the continent.",
  phone: "+254 706 193 987",
  phoneHref: "tel:+254706193987",
  email: "info@focusafrica.co.ke",
  emailHref: "mailto:info@focusafrica.co.ke",
  address: "International House, Nairobi, Kenya",
  hours: "Monday – Friday, 9:30 am – 5:30 pm",
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/FocusAfrica7" },
  { name: "LinkedIn", href: "https://linkedin.com/company/focus-africa-leadership" },
  { name: "Facebook", href: "https://facebook.com/FOCUSAFRICALTD" },
]

// ── Imagery (centralized so the client's real photography can be
// dropped into /public/images with the same filenames later) ──
export const images = {
  heroBoardroom: "/images/hero.jpg",
  skyline: "/images/skyline.jpg",
  leaderPortrait: "/images/portrait.jpg",
  team: "/images/team.jpg",
  agriculture: "/images/agriculture.jpg",
  research: "/images/research.jpg",
  training: "/images/training.jpg",
  finance: "/images/finance.jpg",
  monitoring: "/images/monitoring.jpg",
  handshake: "/images/handshake.jpg",
}

// ── Home: hero ──
export const hero = {
  eyebrow: "Strategic Consultancy",
  lines: ["Empowering", "Africa's", "future leaders"],
  body:
    "Strategic solutions for sustainable growth across the continent. We partner with visionary organizations to unlock Africa's potential.",
  primaryCta: { label: "Explore Services", href: "/services" },
  secondaryCta: { label: "Our story", href: "/about" },
}

// ── Home + About: stats ──
export const homeStats = [
  { number: 15, suffix: "+", label: "Years of Excellence", sub: "Est. 2009" },
  { number: 500, suffix: "+", label: "Projects Delivered", sub: "Across the continent" },
  { number: 28, suffix: "", label: "African Countries", sub: "Active presence" },
  { number: 98, suffix: "%", label: "Client Retention", sub: "Year over year" },
]

export const aboutStats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "500+", label: "Projects Delivered" },
  { number: "28", label: "African Countries" },
  { number: "98%", label: "Client Retention" },
]

export const clients = [
  "World Bank",
  "USAID",
  "African Development Bank",
  "UN Environment",
  "Gates Foundation",
  "Mastercard Foundation",
  "GIZ",
  "DFID",
]

// ── Home: about strip ──
export const aboutStrip = {
  eyebrow: "About Us",
  headingLead: "The journey behind",
  headingAccent: "Focus Africa",
  paragraphs: [
    "Founded with a vision to drive sustainable growth, innovation, and empowerment across Africa's unique business landscape — from Nairobi to the whole continent.",
    "With experienced professionals, we deliver unparalleled results and create lasting impact for every individual and organization we partner with.",
  ],
  miniStats: [
    { number: "28", label: "African countries" },
    { number: "500+", label: "Projects delivered" },
  ],
  foundedYear: "2016",
  cta: { label: "Our Full Story", href: "/about" },
}

// ── Home: services accordion ──
export const homeServices = [
  {
    id: "01",
    title: "Agriculture, Environment & Climate",
    description:
      "Comprehensive solutions to address climate change and promote sustainable agricultural practices across Africa. We partner with organizations to implement regenerative farming, conservation strategies, and climate resilience programs.",
    href: "/services#agriculture",
  },
  {
    id: "02",
    title: "Research & Development",
    description:
      "Customer ecosystem analysis, innovation roadmaps, and process optimization for continuous improvement. Our research-driven approach ensures data-backed decisions and strategic insights.",
    href: "/services#research",
  },
  {
    id: "03",
    title: "Training & Capacity Development",
    description:
      "Corporate governance, agriculture training, finance administration, and expert-led team building programs designed to elevate organizational capabilities and leadership potential.",
    href: "/services#training",
  },
  {
    id: "04",
    title: "Finance & Administration",
    description:
      "Fund management, financial administration, donor fund management, and organizational health checks. We bring financial clarity and operational excellence to every engagement.",
    href: "/services#finance",
  },
  {
    id: "05",
    title: "Monitoring & Evaluation",
    description:
      "Indicator development, stakeholder engagement, M&E system design, and impact measurement. Track progress and demonstrate results with our comprehensive evaluation frameworks.",
    href: "/services#monitoring",
  },
]

export const homeServicesHeader = {
  eyebrow: "Our Services",
  headingLead: "Solutions for",
  headingAccent: "Africa's growth",
  cta: { label: "View All Services", href: "/services" },
}

// ── Home: process ──
export const process = {
  eyebrow: "How We Work",
  headingLead: "Our proven",
  headingAccent: "process",
  aside: "Refined over years of partnering with organizations across the continent.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Deep immersion in your challenges, goals, and vision — before a single strategy is formed.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Tailored strategic frameworks built for your specific context and the African landscape.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Hands-on execution support ensuring every strategy translates to measurable outcomes.",
    },
    {
      number: "04",
      title: "Growth",
      description:
        "Continuous optimization and scaling — building momentum that outlasts our engagement.",
    },
  ],
}

// ── Home: testimonials ──
export const testimonialsHeader = {
  eyebrow: "Testimonials",
  headingLead: "What our",
  headingAccent: "clients say",
}

export const testimonials = [
  {
    quote:
      "Focus Africa Leadership transformed our approach to sustainable agriculture. Their expertise and dedication was evident from day one — remarkable improvements in operations and team capabilities.",
    author: "Jordan Kilungu",
    role: "Chief Executive Officer",
    company: "Geothermal Recycle Company",
    initial: "JK",
  },
  {
    quote:
      "The training and capacity development programs were exceptional. Our team is now better equipped to handle complex challenges and drive innovation across our sector.",
    author: "Maria Wambua",
    role: "Director of Operations",
    company: "Western Seed Corporation",
    initial: "MW",
  },
]

// ── Home + Services + About: CTA banners ──
export const homeCta = {
  eyebrow: "Get Started",
  headingLead: "Ready to transform",
  headingAccent: "your organization?",
  body: "Partner with us to bring your vision to life and create lasting impact across Africa.",
  primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
}

// ── About page ──
export const aboutPage = {
  hero: {
    eyebrow: "About Us",
    headingLead: "A trusted partner",
    headingAccent: "for over a decade",
    body:
      "Empowering businesses, individuals, and organizations throughout Africa with strategic solutions for sustainable growth.",
  },
  story: {
    eyebrow: "Our Journey",
    headingLead: "Building Africa's",
    headingAccent: "future together",
    paragraphs: [
      "Founded in 2016, Focus Africa Leadership was established with a vision to drive sustainable growth, innovation, and empowerment across Africa's unique business landscape.",
      "With a strong focus on customer satisfaction and a team of experienced professionals, we strive to deliver unparalleled results and create lasting positive impact combining deep local knowledge with global best practices.",
      "Over the years, we have expanded our reach across 28 countries, transforming thousands of lives and completing over 500 successful projects.",
    ],
  },
  valuesHeader: {
    eyebrow: "Our Values",
    headingLead: "Why choose",
    headingAccent: "Focus Africa",
  },
  values: [
    {
      id: "01",
      title: "Innovation",
      description:
        "We push the boundaries of creativity to deliver cutting-edge solutions that address Africa's unique challenges and opportunities.",
    },
    {
      id: "02",
      title: "Expertise",
      description:
        "Our seasoned professionals bring unmatched expertise across diverse sectors, combining local knowledge with global best practices.",
    },
    {
      id: "03",
      title: "Collaboration",
      description:
        "We build strong partnerships and foster teamwork that delivers lasting results for all stakeholders across the value chain.",
    },
    {
      id: "04",
      title: "Integrity",
      description:
        "Ethical business practices and transparent communication form the foundation of every engagement and relationship we build.",
    },
  ],
  cta: {
    eyebrow: "Get Started",
    headingLead: "Ready to unlock",
    headingAccent: "your potential?",
    body: "Partner with us to create lasting impact across Africa.",
    primaryCta: { label: "Get in Touch", href: "/contact" },
    phoneNote: "Or call: +254 706 193 987",
  },
}

// ── Services page ──
export const servicesPage = {
  hero: {
    eyebrow: "What We Offer",
    headingLead: "Comprehensive",
    headingAccent: "consultancy services",
    body:
      "Tailored solutions designed to address the unique challenges facing African organizations and businesses.",
  },
  cta: {
    eyebrow: "Get Started",
    headingLead: "Ready to transform",
    headingAccent: "your organization?",
    body:
      "Let's discuss how our services can help you achieve your goals and drive sustainable growth across Africa.",
    primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  },
}

export const servicesDetailed = [
  {
    id: "agriculture",
    number: "01",
    title: "Agriculture, Environment & Climate",
    description:
      "Comprehensive solutions to address climate change and promote sustainable agricultural practices across the African continent. We help organizations build resilience and drive positive environmental impact.",
    image: images.agriculture,
    subServices: [
      "Climate Change Adaptation strategies",
      "Capacity Building for NGOs and government",
      "Research and Innovation in carbon sequestration",
      "Support for Farmers and Pastoralists",
    ],
  },
  {
    id: "research",
    number: "02",
    title: "Research & Development",
    description:
      "Driving innovation through comprehensive research services that help organizations stay ahead of the curve. Our data-driven approach ensures informed decision-making.",
    image: images.research,
    subServices: [
      "Customer Ecosystem Analysis",
      "Innovation Roadmaps development",
      "Process Optimization strategies",
      "Continuous Learning implementation",
    ],
  },
  {
    id: "training",
    number: "03",
    title: "Training & Capacity Development",
    description:
      "Empowering teams with the knowledge and skills needed to excel in today's competitive landscape. We design tailored programs for lasting organizational growth.",
    image: images.training,
    subServices: [
      "Corporate Governance training",
      "Agriculture & Agribusiness programs",
      "Finance & Administration workshops",
      "Team Building and Leadership",
    ],
  },
  {
    id: "finance",
    number: "04",
    title: "Finance & Administration",
    description:
      "Robust financial management and administrative support to ensure organizational health and sustainability. We bring clarity and efficiency to your operations.",
    image: images.finance,
    subServices: [
      "Fund Management services",
      "Financial Administration support",
      "Donor Fund Management",
      "Organizational Health Checks",
    ],
  },
  {
    id: "monitoring",
    number: "05",
    title: "Monitoring & Evaluation",
    description:
      "Data-driven insights to measure impact and ensure programs achieve their intended outcomes. Track progress and demonstrate results with precision.",
    image: images.monitoring,
    subServices: [
      "Indicator Development frameworks",
      "Stakeholder Engagement strategies",
      "M&E System Design",
      "Impact Measurement",
    ],
  },
]

// ── Contact page ──
export const contactPage = {
  hero: {
    eyebrow: "Contact",
    headingLead: "Let's start a",
    headingAccent: "conversation",
    body:
      "We'd love to hear about your project. Reach out and let's explore how we can work together.",
  },
  infoIntro: {
    eyebrow: "Get in Touch",
    headingLead: "Contact",
    headingAccent: "information",
    body:
      "Reach out through any of the channels below or fill out the form and we'll get back to you within 24 hours.",
  },
  form: {
    eyebrow: "Send a Message",
    heading: "Ready to experience our services?",
    successMessage:
      "Thank you for your message! We'll get back to you within 24 hours.",
    errorMessage: "Something went wrong. Please try again.",
  },
  contactItems: [
    { icon: "MapPin", label: "Visit Us", value: site.address },
    { icon: "Phone", label: "Call Us", value: site.phone, href: site.phoneHref },
    { icon: "Mail", label: "Email Us", value: site.email, href: site.emailHref },
    { icon: "Clock", label: "Working Hours", value: site.hours },
  ],
}

// ── Footer ──
export const footerServiceLinks = [
  { href: "/services#agriculture", label: "Agriculture & Climate" },
  { href: "/services#research", label: "Research & Development" },
  { href: "/services#training", label: "Training & Capacity" },
  { href: "/services#monitoring", label: "Monitoring & Evaluation" },
]
