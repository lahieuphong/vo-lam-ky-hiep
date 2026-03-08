// src/components/containers/homepage/HomepageFrame/HomepageFrame.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import styles from './HomepageFrame.module.css'

type Props = {
  children?: React.ReactNode
}

export default function HomepageFrame({ children }: Props) {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.headerFrame}>

        {/* Header artwork (kích thước theo design; không dùng object-fit:cover để tránh crop offset) */}
        <Image
          src="/assets/header/nav.png"
          alt="Võ Lâm Kỳ Hiệp — header artwork"
          width={1920}
          height={1045}
          priority
          className={styles.headerImage}
        />

        {/* Cloud overlay — trang trí (không ảnh hưởng a11y) */}
        <div className={styles.overlayCloud} aria-hidden="true">
          <Image
            src="/assets/background_frame/Cloud_01.png"
            alt="" /* decorative */
            width={2906}
            height={951}
            priority
          />
        </div>

        {/* Decorative characters/art — trang trí */}
        <div className={styles.overlayArt} aria-hidden="true">
          <Image
            src="/assets/background_frame/2char.png"
            alt="" /* decorative */
            width={1960}
            height={1420}
            priority
          />
        </div>
      </div>

      {/* Nội dung trang (Header component, Hero, Gallery...) sẽ nằm dưới headerFrame */}
      {children}
    </div>
  )
}