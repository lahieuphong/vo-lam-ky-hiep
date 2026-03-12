// src/app/layout.tsx
import './globals.css'
import React, { ReactNode } from 'react'
import Header from '@/components/sections/Header/Header'
import PageBackground from '@/components/ui/PageBackground'
import Footer from '@/components/sections/Footer/Footer'
import { HeroCharacters, NewsBoard } from '@/components/sections'

export const metadata = {
  title: 'Võ Lâm Kỳ Hiệp - Trang chủ',
  description: 'Landing page game Võ Lâm Kỳ Hiệp'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <div className="site-shell">
          <Header />

          <HeroCharacters>
            <NewsBoard />

            <main>
              <PageBackground>
                {children}
              </PageBackground>
            </main>
          </HeroCharacters>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}