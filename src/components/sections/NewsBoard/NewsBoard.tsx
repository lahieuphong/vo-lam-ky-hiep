// src/components/sections/NewsBoard/NewsBoard.tsx

'use client'

import React from 'react'
import Image from 'next/image'
import styles from './NewsBoard.module.css'

export default function NewsBoard() {
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

      {/* Title Frame */}
      <div className={styles.titleFrame} aria-hidden="false">
        <Image
          src="/assets/background_frame_2/Title_frame.png"
          alt="Tiêu đề - Tin tức sự kiện"
          width={769}
          height={142}
          priority
        />
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

      {/* khung trái (preview / thumbnail) */}
      <div className={`${styles.newsInner} ${styles.newsInnerLeft}`} aria-label="Preview trái">
        {/* Search box (hình) */}
        <div className={styles.searchBox} aria-label="Search box">
          <Image
            src="/assets/background_frame_2/search-1.png"
            alt="Search"
            width={560}
            height={55}
            priority={false}
          />
        </div>

        {/* overlay wrapper (phủ ngang parent, height theo biến) */}
        <div className={styles.previewFrameOverlay} aria-label="Preview frame overlay">

          {/* MEDIA phía dưới khung (thực tế nội dung bạn muốn hiển thị) */}
          <div className={styles.previewMedia} aria-hidden="false">
            <Image
              src="/assets/background_frame_2/VLKH_screen_Tinhangdacbiet_0004_Video.png"
              alt="Preview content"
              fill
              style={{ objectFit: 'cover' }}
              priority={false}
            />
          </div>

          {/* decorative frame overlay (Rectangle_3.png) nằm trên cùng */}
          <div className={styles.previewFrame} aria-hidden="true">
            <Image
              src="/assets/background_frame_2/Rectangle_3.png"
              alt=""
              fill
              style={{ objectFit: 'contain' }}
              priority={false}
            />
          </div>

        </div>
      </div>

      {/* khung phải (sau này) */}
      <div className={`${styles.newsInner} ${styles.newsInnerRight}`} aria-label="Preview phải">
        {/* nội dung / <Image/> */}
      </div>
    </section>
  )
}