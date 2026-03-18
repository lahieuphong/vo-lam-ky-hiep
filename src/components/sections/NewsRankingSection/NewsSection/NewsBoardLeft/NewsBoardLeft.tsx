// src/components/sections/NewsRankingSection/NewsSection/NewsBoardLeft/NewsBoardLeft.tsx

import React from 'react'
import Image from 'next/image'
import styles from './NewsBoardLeft.module.css'

export default function NewsBoardLeft() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBox}>
        <Image
          src="/assets/sections/NewsRankingSection/NewsSection/NewsBoardLeft/search-1.png"
          alt="Tìm kiếm tin tức"
          width={560}
          height={55}
        />
      </div>

      <div className={styles.previewFrameOverlay}>
        <div className={styles.previewMedia}>
          <Image
            src="/assets/sections/NewsRankingSection/NewsSection/NewsBoardLeft/VLKH_screen_Tinhangdacbiet_0004_Video.png"
            alt="Ảnh xem trước"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.previewFrame} aria-hidden="true">
          <Image
            src="/assets/sections/NewsRankingSection/NewsSection/NewsBoardLeft/Rectangle_3.png"
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}