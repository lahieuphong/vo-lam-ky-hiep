import './globals.css'
import React from 'react'
import Footer from '@/components/sections/Footer/Footer'
import LandingShell from '@/components/landing/LandingShell/LandingShell'
import { HeroSection, NewsSection } from '@/components/sections'
import Header from '@/components/sections/Header/Header/Header'

export const metadata = {
  title: 'Võ Lâm Kỳ Hiệp - Trang chủ',
  description: 'Landing page game Võ Lâm Kỳ Hiệp'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <LandingShell>
          <HeroSection>
            <Header />
          </HeroSection>

          <NewsSection />

          {children}

          <Footer />
        </LandingShell>
      </body>
    </html>
  )
}