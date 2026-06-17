import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Variant 3 — Bold & Pan-African
// Fraunces: characterful high-contrast display serif (soft, expressive) → owned identity
// Inter: clean, modern body that keeps the personality readable
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: "Focus Africa Leadership | Empowering Africa's Future Leaders",
    template: '%s | Focus Africa Leadership',
  },
  description:
    'Strategic solutions for sustainable growth across the continent. Focus Africa Leadership is a Nyeri-based strategic consultancy empowering businesses and individuals throughout Africa.',
  keywords: ['consultancy', 'Africa', 'leadership', 'strategic solutions', 'Nyeri', 'Kenya', 'sustainable growth'],
  authors: [{ name: 'Focus Africa Leadership' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Focus Africa Leadership',
    title: "Focus Africa Leadership | Empowering Africa's Future Leaders",
    description: 'Strategic solutions for sustainable growth across the continent.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FocusAfrica7',
  },
}

export const viewport: Viewport = {
  themeColor: '#2b3a16',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-[#F6EEE2]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
