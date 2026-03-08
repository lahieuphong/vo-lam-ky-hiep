// src/app/layout.tsx
import './globals.css'
import React, { ReactNode } from 'react'
import Header from '@/components/containers/global/Header/Header'
import PageBackground from '@/components/ui/PageBackground'
import Footer from '@/components/containers/global/Footer/Footer'
import { HomepageFrame, HomepageFrame2 } from '@/components/containers/homepage'

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

          <HomepageFrame>
            <HomepageFrame2 />

            <main>
              <PageBackground>
                {children}
              </PageBackground>
            </main>
          </HomepageFrame>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}