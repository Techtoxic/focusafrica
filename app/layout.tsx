import type { Metadata, Viewport } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: "Focus Africa Leadership | Empowering Africa's Future Leaders",
    template: '%s | Focus Africa Leadership',
  },
  description:
    "Strategic solutions for sustainable growth across the continent. Focus Africa Leadership is a Nyeri-based strategic consultancy empowering businesses and individuals throughout Africa.",
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6eee2' },
    { media: '(prefers-color-scheme: dark)', color: '#15100c' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
