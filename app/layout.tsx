import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Sachin Maurya - Frontend Developer & Researcher',
    template: '%s | Sachin Maurya',
  },
  description: 'Portfolio of Sachin Maurya, a Frontend Developer and Researcher with 1 year of experience. Specializing in Next.js, React, and modern web technologies.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'Web Development', 'Sachin Maurya', 'Portfolio', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Sachin Maurya', url: 'https://github.com/sachinmaurya96' }],
  creator: 'Sachin Maurya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sachinmaurya.com', // Placeholder, user should update
    title: 'Sachin Maurya - Frontend Developer & Researcher',
    description: 'Explore the portfolio and projects of Sachin Maurya, passionate about crafting exceptional user experiences.',
    siteName: 'Sachin Maurya Portfolio',
    images: [
      {
        url: '/sachin.jpg', // Using the local avatar as OG image for now
        width: 800,
        height: 800,
        alt: 'Sachin Maurya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sachin Maurya - Frontend Developer & Researcher',
    description: 'Frontend Developer and Researcher. Always grinding, always learning.',
    images: ['/sachin.jpg'],
    creator: '@sachinmaurya', // Placeholder
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
