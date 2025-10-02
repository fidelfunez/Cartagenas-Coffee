import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: "Cartagena's Coffee - Premium Honduran Coffee & Cold Brews",
  description: 'Experience the finest organic Honduran coffee from our family farms. Discover our premium cold brew collection with five unique flavors.',
  keywords: 'Honduran coffee, organic coffee, cold brew, premium coffee, family farms, Cartagena Coffee',
  authors: [{ name: "Cartagena's Coffee" }],
  openGraph: {
    title: "Cartagena's Coffee - Premium Honduran Coffee & Cold Brews",
    description: 'Experience the finest organic Honduran coffee from our family farms.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-coffee-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
