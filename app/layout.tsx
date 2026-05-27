import type { Metadata, Viewport } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// UI Pro Max: Calistoga (display serif, warm editorial) + Inter (clean body)
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const calistoga = Calistoga({ 
  subsets: ['latin'],
  variable: '--font-calistoga',
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Focus Africa Leadership | Empowering Africa\'s Future Leaders',
    template: '%s | Focus Africa Leadership',
  },
  description: 'Strategic solutions for sustainable growth across the continent. Focus Africa Leadership is a Nairobi-based strategic consultancy empowering businesses and individuals throughout Africa.',
  keywords: ['consultancy', 'Africa', 'leadership', 'strategic solutions', 'Nairobi', 'Kenya', 'sustainable growth'],
  authors: [{ name: 'Focus Africa Leadership' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Focus Africa Leadership',
    title: 'Focus Africa Leadership | Empowering Africa\'s Future Leaders',
    description: 'Strategic solutions for sustainable growth across the continent.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FocusAfrica7',
  },
}

export const viewport: Viewport = {
  themeColor: '#050506',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable} bg-[#050506]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
