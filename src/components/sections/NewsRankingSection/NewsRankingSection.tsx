// src/components/sections/NewsRankingSection/NewsRankingSection.tsx

import React from 'react'
import styles from './NewsRankingSection.module.css'
import NewsRankingBackground from './NewsRankingBackground/NewsRankingBackground'
import NewsRankingClouds from './NewsRankingClouds/NewsRankingClouds'
import NewsSection from './NewsSection/NewsSection'
// import RankingSection from './RankingSection/RankingSection'

export default function NewsRankingSection() {
  return (
    <section className={styles.section} aria-label="Tin tức và bảng xếp hạng">
      <div className={styles.frame}>
        <NewsRankingBackground />
        <NewsRankingClouds />

        <div className={styles.contentLayer}>
          <NewsSection />
          {/* <RankingSection /> */}
        </div>
      </div>
    </section>
  )
}