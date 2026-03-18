// src/components/sections/NewsRankingSection/NewsSection/NewsSection.tsx

'use client'

import React from 'react'
import Image from 'next/image'
import styles from './NewsSection.module.css'
import NewsSectionBackground from './NewsSectionBackground/NewsSectionBackground'
import NewsBoard from './NewsBoard/NewsBoard'

export default function NewsSection() {
  return (
    <section className={styles.section} aria-labelledby="news-section-title">
      <NewsSectionBackground />

      <div className={styles.contentLayer}>
        <div className={styles.titleFrame}>
          <Image
            src="/assets/sections/NewsSection/NewsSection/Title_frame.png"
            alt="Tiêu đề - Tin tức sự kiện"
            width={769}
            height={142}
            priority
          />

          <div className={styles.titleTextWrap}>
            <h2 id="news-section-title" className={styles.titleLabel}>
              Tin Tức - Sự Kiện
            </h2>
          </div>
        </div>

        <div className={styles.boardWrap}>
          <NewsBoard />
        </div>
      </div>
    </section>
  )
}