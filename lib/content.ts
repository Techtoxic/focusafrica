// ─────────────────────────────────────────────────────────────
// Focus Africa Leadership, centralized site content.
// Single source of truth for every string + asset path.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "Focus Africa",
  brandSuffix: "Leadership",
  tagline:
    "Strategic consultancy empowering Africa's future leaders with innovative solutions for sustainable growth across the continent.",
  phone: "0706 193 987",
  phoneHref: "tel:+254706193987",
  email: "info@focusafrica.co.ke",
  emailHref: "mailto:info@focusafrica.co.ke",
  address: "Karson Photo House, Kimathi Way, 1st Floor, Nyeri",
  postal: "P.O. Box 762-10100",
  hours: "Monday to Friday, 8:00am to 5:00pm",
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/FocusAfrica7" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/focus-africa-leadership" },
  { name: "Facebook", href: "https://facebook.com/FOCUSAFRICALTD" },
]

// ── Imagery ──
export const images = {
  logo: "/images/logo.jpg",
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
  projectManagement: "/images/handshake.jpg",
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
  { number: 14, suffix: "", label: "Years of Excellence", sub: "Est. 2012" },
  { number: 128, suffix: "", label: "Projects Delivered", sub: "Across the continent" },
  { number: 40, suffix: "", label: "African Countries", sub: "Active presence" },
  { number: 10000, suffix: "+", label: "Lives Transformed", sub: "And counting" },
]

export const aboutStats = [
  { number: "14", label: "Years of Excellence" },
  { number: "128", label: "Projects Delivered" },
  { number: "40", label: "African Countries" },
  { number: "10,000+", label: "Lives Transformed" },
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
    "Founded with a vision to drive sustainable growth, innovation, and empowerment across Africa's unique business landscape, from our home in Nyeri to the whole continent.",
    "With experienced professionals, we deliver unparalleled results and create lasting impact for every individual and organization we partner with.",
  ],
  miniStats: [
    { number: "40", label: "African countries" },
    { number: "128", label: "Projects delivered" },
  ],
  foundedYear: "2012",
  cta: { label: "Our Full Story", href: "/about" },
}

// ── Home: services accordion (all six, client-requested order) ──
export const homeServices = [
  {
    id: "01",
    title: "Project Management",
    description:
      "End-to-end stewardship of complex programmes, covering planning, governance, risk, procurement and delivery, keeping budgets, timelines and outcomes aligned with your strategic goals.",
    href: "/services#project-management",
  },
  {
    id: "02",
    title: "Finance & Administration",
    description:
      "Fund management, financial administration, donor fund management, and organizational health checks. We bring financial clarity and operational excellence to every engagement.",
    href: "/services#finance",
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
    title: "Monitoring & Evaluation",
    description:
      "Indicator development, stakeholder engagement, M&E system design, and impact measurement. Track progress and demonstrate results with our comprehensive evaluation frameworks.",
    href: "/services#monitoring",
  },
  {
    id: "05",
    title: "Agriculture, Environment & Climate Change",
    description:
      "Comprehensive solutions to address climate change and promote sustainable agricultural practices across Africa. We partner with organizations to implement regenerative farming, conservation strategies, and climate resilience programs.",
    href: "/services#agriculture",
  },
  {
    id: "06",
    title: "Research & Development",
    description:
      "Customer ecosystem analysis, innovation roadmaps, and process optimization for continuous improvement. Our research-driven approach ensures data-backed decisions and strategic insights.",
    href: "/services#research",
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
        "Deep immersion in your challenges, goals, and vision before a single strategy is formed.",
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
        "Continuous optimization and scaling that builds momentum well beyond our engagement.",
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
      "Focus Africa Leadership transformed our approach to sustainable agriculture. Their expertise and dedication was evident from day one, with remarkable improvements in operations and team capabilities.",
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
      "Founded in 2012, Focus Africa Leadership was established with a vision to drive sustainable growth, innovation, and empowerment across Africa's unique business landscape.",
      "With a strong focus on customer satisfaction and a team of experienced professionals, we strive to deliver unparalleled results and create lasting positive impact combining deep local knowledge with global best practices.",
      "Over the years, we have expanded our reach across 40 countries, transforming over 10,000 lives and completing 128 successful projects.",
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
    phoneNote: "Or call: 0706 193 987",
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
    id: "project-management",
    number: "01",
    title: "Project Management",
    description:
      "End-to-end stewardship of complex programmes, from planning and governance through procurement, risk management and delivery. We keep budgets, timelines and outcomes aligned with your strategic goals and your funders' expectations.",
    image: images.projectManagement,
    subServices: [
      "Programme planning & inception",
      "Governance, risk & compliance frameworks",
      "Procurement & contract management",
      "Stakeholder coordination & reporting",
    ],
  },
  {
    id: "finance",
    number: "02",
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
    id: "monitoring",
    number: "04",
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
  {
    id: "agriculture",
    number: "05",
    title: "Agriculture, Environment & Climate Change",
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
    number: "06",
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
    { icon: "MapPin", label: "Postal Address", value: site.postal },
    { icon: "Phone", label: "Call Us", value: site.phone, href: site.phoneHref },
    { icon: "Mail", label: "Email Us", value: site.email, href: site.emailHref },
    { icon: "Clock", label: "Working Hours", value: site.hours },
  ],
}

// ── Footer (all six services, client-requested order) ──
export const footerServiceLinks = [
  { href: "/services#project-management", label: "Project Management" },
  { href: "/services#finance", label: "Finance & Administration" },
  { href: "/services#training", label: "Training & Capacity Development" },
  { href: "/services#monitoring", label: "Monitoring & Evaluation" },
  { href: "/services#agriculture", label: "Agriculture, Environment & Climate" },
  { href: "/services#research", label: "Research & Development" },
]
