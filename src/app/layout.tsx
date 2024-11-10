import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jávea Directory - Your Guide to Xàbia',
  description: 'Discover the best places, restaurants, activities and more in Jávea (Xàbia), Spain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <div className="pt-16"> {/* Add padding for fixed header */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
