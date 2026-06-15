import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Variant 2 — Modern Boutique
// Space Grotesk: bold contemporary geometric grotesque → confident, design-studio voice
// Inter: humanist, highly readable body
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: "Focus Africa Leadership | Empowering Africa's Future Leaders",
    template: '%s | Focus Africa Leadership',
  },
  description:
    'Strategic solutions for sustainable growth across the continent. Focus Africa Leadership is a Nairobi-based strategic consultancy empowering businesses and individuals throughout Africa.',
  keywords: ['consultancy', 'Africa', 'leadership', 'strategic solutions', 'Nairobi', 'Kenya', 'sustainable growth'],
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
  themeColor: '#F4F3EF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-[#F4F3EF]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
