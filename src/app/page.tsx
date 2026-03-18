// src/app/page.tsx

import React from 'react'
import LandingShell from '@/components/landing/LandingShell/LandingShell'
import Header from '@/components/sections/Header/Header'
import Footer from '@/components/sections/Footer/Footer'
import HeroSection from '@/components/sections/HeroSection/HeroSection'
import NewsRankingSection from '@/components/sections/NewsRankingSection/NewsRankingSection'

export default function Home() {
  return (
    <LandingShell>
      <HeroSection>
        <Header />
      </HeroSection>

      <NewsRankingSection />

      <Footer />
    </LandingShell>
  )
}