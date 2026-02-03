import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: 'Shashwat - AI Developer & Data Scientist',
    template: '%s | Shashwat'
  },
  description: 'AI Developer & Computer Science student building practical solutions that bridge technology and human needs. Specialized in GenAI, Machine Learning, and Web Development.',
  keywords: ['AI Developer', 'Data Scientist', 'Machine Learning', 'GenAI', 'Web Development', 'Computer Science'],
  authors: [{ name: 'Shashwat' }],
  creator: 'Shashwat',
  publisher: 'Shashwat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shashwat-portfolio.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shashwat-portfolio.vercel.app/',
    title: 'Shashwat - AI Developer & Data Scientist',
    description: 'AI Developer & Computer Science student building practical solutions that bridge technology and human needs.',
    siteName: 'Shashwat Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashwat - AI Developer & Data Scientist',
    description: 'AI Developer & Computer Science student building practical solutions that bridge technology and human needs.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://media.gettyimages.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#07090e" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} font-sans`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}