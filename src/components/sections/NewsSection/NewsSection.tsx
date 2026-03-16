// src/components/sections/NewsBoard/NewsBoard.tsx

'use client'

import React from 'react'
import Image from 'next/image'
import styles from './NewsSection.module.css'
import NewsBoard from './NewsBoard'

export default function NewsSection() {
  return (
    <section className={styles.section} aria-labelledby="news-section-title">
      <div className={styles.frame}>
        <div className={styles.cloudWrap} aria-hidden="true">
          <Image
            src="/assets/sections/NewsSection/NewsSection/Cloud_copy.png"
            alt=""
            width={2928}
            height={1990}
            priority
          />
        </div>

        <div className={styles.titleFrame}>
          <Image
            src="/assets/sections/NewsSection/NewsSection/Title_frame.png"
            alt="Tiêu đề - Tin tức sự kiện"
            width={769}
            height={142}
            priority
          />
          <h2 id="news-section-title" className={styles.titleLabel}>
            Tin Tức - Sự Kiện
          </h2>
        </div>

        <div className={styles.boardWrap}>
          <NewsBoard />
        </div>
      </div>
    </section>
  )
}