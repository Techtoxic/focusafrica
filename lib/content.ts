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
  eyebrow: "Consulting since 2012",
  lines: ["Your mission", "is big. You", "don't have to", "carry it alone."],
  body:
    "From climate-smart agriculture to monitoring, evaluation and full project management, Focus Africa Leadership partners with NGOs, donors and government across East Africa, helping you deliver real results and prove the difference you make.",
  primaryCta: { label: "Talk to us", href: "/contact" },
  secondaryCta: { label: "Explore our services", href: "/services" },
}

// ── Home + About: stats ──
export const homeStats = [
  { number: 13, suffix: "+", label: "Years of Excellence", sub: "Est. 2012" },
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
  trustLine: "Trusted by NGOs, donors and government since 2012",
  paragraphs: [
    "Founded with a vision to drive sustainable growth, innovation, and empowerment across Africa's unique business landscape, from our home in Nyeri to the whole continent.",
    "With experienced professionals, we deliver unparalleled results and create lasting impact for every individual and organisation we partner with.",
  ],
  miniStats: [
    { number: "40", label: "African countries" },
    { number: "128", label: "Projects delivered" },
  ],
  foundedYear: "2012",
  cta: { label: "Our Full Story", href: "/about" },
}

// ── Home: services accordion (client-requested order: Agriculture & M&E leading) ──
export const homeServices = [
  {
    id: "01",
    title: "Agriculture, Environment & Climate Change",
    description:
      "Climate change is already changing daily life for farmers and communities across Africa: the rains, the harvests, the future. We help organisations, and the people they serve, adapt and build resilience and farm in ways that protect both livelihoods and the land for the years to come.",
    href: "/services#agriculture",
  },
  {
    id: "02",
    title: "Monitoring & Evaluation",
    description:
      "It's not enough to do good work today. You have to show that it's working. We help you track your progress and prove your impact with clear, honest evidence that funders trust. And we help turn that data into evidence that can unlock funding and open the door to credit for the farmers and communities you serve.",
    href: "/services#monitoring",
  },
  {
    id: "03",
    title: "Project Management",
    description:
      "Running a big programme means holding a hundred things together at once: plans, budgets, deadlines, partners and funders who are counting on you. We take that weight off your shoulders. We manage your programme from the first plan to the final report, so nothing slips through the cracks and your funders stay confident in you.",
    href: "/services#project-management",
  },
  {
    id: "04",
    title: "Finance & Administration",
    description:
      "Good work needs a strong financial backbone. But managing money and admin, especially donor funds with strict rules, eats up time and causes worry. We keep your finances well-managed and your operations in order, so you can focus on your mission instead of the paperwork.",
    href: "/services#finance",
  },
  {
    id: "05",
    title: "Training & Capacity Development",
    description:
      "Your people are your greatest asset and they want to grow. We build their skills and their confidence with practical, hands-on training designed around your real needs, so the learning sticks long after the workshop ends.",
    href: "/services#training",
  },
  {
    id: "06",
    title: "Research & Development",
    description:
      "The best decisions are built on solid evidence, not guesswork. We do the research that helps you understand what is really happening on the ground, so you can choose your next step with confidence and stay ahead of what's coming.",
    href: "/services#research",
  },
]

export const servicesPageIntro =
  "Every organisation we work with is trying to do something that matters. Our job is to make it easier and to help you show it worked. Here's how we can support you."

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
  aside: "Refined over years of partnering with organisations across the continent.",
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
  headingAccent: "your organisation?",
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
      "Empowering businesses, individuals, and organisations throughout Africa with strategic solutions for sustainable growth.",
  },
  story: {
    eyebrow: "Our Journey",
    headingLead: "Building Africa's",
    headingAccent: "future together",
    paragraphs: [
      "Founded in 2012, Focus Africa Leadership was established with a vision to drive sustainable growth, innovation, and empowerment across Africa's unique business landscape.",
      "With a strong focus on customer satisfaction and a team of experienced professionals, we strive to deliver unparalleled results and create lasting positive impact, combining deep local knowledge with global best practices.",
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
      "Tailored solutions designed to address the unique challenges facing African organisations and businesses.",
  },
  cta: {
    eyebrow: "Get Started",
    headingLead: "Ready to transform",
    headingAccent: "your organisation?",
    body:
      "Let's discuss how our services can help you achieve your goals and drive sustainable growth across Africa.",
    primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  },
}

export const servicesDetailed = [
  {
    id: "agriculture",
    number: "01",
    title: "Agriculture, Environment & Climate Change",
    description:
      "Climate change is already changing daily life for farmers and communities across Africa: the rains, the harvests, the future. We help organisations, and the people they serve, adapt and build resilience and farm in ways that protect both livelihoods and the land for the years to come.",
    image: images.agriculture,
    subServices: [
      "Practical strategies to adapt to a changing climate",
      "Capacity building for NGOs and government teams",
      "Research and innovation, including carbon and sequestration work",
      "Direct, on-the-ground support for farmers and pastoralists",
    ],
  },
  {
    id: "monitoring",
    number: "02",
    title: "Monitoring & Evaluation",
    description:
      "It's not enough to do good work today. You have to show that it's working. We help you track your progress and prove your impact with clear, honest evidence that funders trust. And we go one step further: we help turn that same data into evidence that can unlock funding and open the door to credit for the farmers and communities you serve.",
    image: images.monitoring,
    subServices: [
      "Design simple, practical M&E systems that fit how you actually work",
      "Choose the right things to measure, with clear indicators",
      "Engage the people who matter most to your project",
      "Measure your real impact and tell that story with confidence",
      "Turn your monitoring data into evidence that can unlock finance and credit",
    ],
  },
  {
    id: "project-management",
    number: "03",
    title: "Project Management",
    description:
      "Running a big programme means holding a hundred things together at once: plans, budgets, deadlines, partners and funders who are counting on you. We take that weight off your shoulders. We manage your programme from the first plan to the final report, so nothing slips through the cracks and your funders stay confident in you.",
    image: images.projectManagement,
    subServices: [
      "Plan your programme and get it off to a strong, organised start",
      "Put simple systems in place to manage risk and stay compliant",
      "Handle procurement and contracts properly and transparently",
      "Keep everyone on the same page and report clearly to your funders",
    ],
  },
  {
    id: "finance",
    number: "04",
    title: "Finance & Administration",
    description:
      "Good work needs a strong financial backbone. But managing money and admin, especially donor funds with strict rules, eats up time and causes worry. We keep your finances well-managed and your operations in order, so you can focus on your mission instead of the paperwork.",
    image: images.finance,
    subServices: [
      "Manage your funds carefully, accurately and transparently",
      "Take care of day-to-day financial administration",
      "Handle donor funds exactly the way donors expect",
      "Run health checks to catch weak points before they become problems",
    ],
  },
  {
    id: "training",
    number: "05",
    title: "Training & Capacity Development",
    description:
      "Your people are your greatest asset and they want to grow. We build their skills and their confidence with practical, hands-on training designed around your real needs, so the learning sticks long after the workshop ends.",
    image: images.training,
    subServices: [
      "Corporate governance training for boards and leaders",
      "Agriculture and agribusiness skills development",
      "Finance and administration workshops",
      "Team building and leadership development",
    ],
  },
  {
    id: "research",
    number: "06",
    title: "Research & Development",
    description:
      "The best decisions are built on solid evidence, not guesswork. We do the research that helps you understand what is really happening on the ground, so you can choose your next step with confidence and stay ahead of what's coming.",
    image: images.research,
    subServices: [
      "Applied and action research",
      "Baseline, feasibility and evaluation studies",
      "Evidence reviews and easy-to-read policy briefs",
      "Learning agendas and innovation pilots to keep improving",
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
  { href: "/services#agriculture", label: "Agriculture, Environment & Climate" },
  { href: "/services#monitoring", label: "Monitoring & Evaluation" },
  { href: "/services#project-management", label: "Project Management" },
  { href: "/services#finance", label: "Finance & Administration" },
  { href: "/services#training", label: "Training & Capacity Development" },
  { href: "/services#research", label: "Research & Development" },
]
