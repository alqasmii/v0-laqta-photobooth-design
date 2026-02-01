import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato, Amiri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
});

const amiri = Amiri({ 
  subsets: ["arabic"],
  weight: ['400', '700'],
  variable: '--font-arabic-text',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Laqta Photobooth | Premium Photo Booth Rental in Oman',
  description: 'Preserve your memories with Laqta Photobooth. Premium photo booth rental services for weddings, events, and parties in Muscat, Oman.',
  keywords: ['photobooth', 'photo booth', 'Oman', 'Muscat', 'wedding', 'events', 'party', 'photography'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lato.variable} ${amiri.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
