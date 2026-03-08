'use client'

import React from 'react'
import Image from 'next/image'
import styles from './HomepageFrame2.module.css'

export default function HomepageFrame2() {
  return (
    <section className={styles.pageWrapper} aria-labelledby="landing-section-title">
      {/* Cloud decorative */}
      <div className={styles.cloudWrap} aria-hidden="true">
        <Image
          src="/assets/background_frame_2/Cloud_copy.png"
          alt=""
          width={2928}
          height={1990}
          priority
        />
      </div>

      {/* Title Frame (nhỏ) */}
        <div className={styles.titleFrame} aria-hidden="false">
        <Image
            src="/assets/background_frame_2/Title_frame.png"
            alt="Tiêu đề - Tin tức sự kiện"
            width={769}
            height={142}
            priority
        />

        {/* Title text (overlay) */}
        <h2 className={styles.titleLabel} role="heading" aria-level={2}>
            Tin Tức - Sự Kiện
        </h2>
        </div>

      {/* News Board */}
      <div className={styles.newsBoard} aria-label="Tin tức - bảng">
        <Image
          src="/assets/background_frame_2/VLKH_screen_Tintuc_0006_main_board.png"
          alt="Tin tức sự kiện"
          width={1505}
          height={734}
          priority
        />
      </div>
    </section>
  )
}