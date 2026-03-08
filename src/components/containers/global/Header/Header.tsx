// src/components/containers/global/Header/Header.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

const NAV = ['TRANG CHỦ', 'TIN TỨC - SỰ KIỆN', 'CẨM NANG', 'CỘNG ĐỒNG', 'NHẬP CODE']

export default function Header() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <header className={styles.header} role="banner">
      <div className={styles.imageWrapper}>
        {/* nếu bạn muốn bật ảnh header lớn, bỏ comment và dùng HomepageFrame để đặt ảnh */}
        {/* <Image src="/assets/header/nav.png" alt="header" width={1920} height={1045} priority className={styles.headerImage} /> */}

        <div className={styles.titleContainer} aria-hidden="true">
          <div className={styles.titleInner}>
            <Image
              src="/assets/header/title_game_03.png"
              alt="Võ Lâm Kỳ Hiệp - title"
              width={278}
              height={154}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        <div className={styles.badge} aria-hidden="true">
          <Image
            src="/assets/header/tag_18.svg"
            alt="Age tag"
            width={280}
            height={158}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            priority
          />
        </div>

        <div className={styles.overlay}>
          <nav aria-label="Main navigation" className={styles.navContainer}>
            {NAV.map((label, idx) => (
              <button
                key={label}
                type="button"
                aria-current={activeIndex === idx ? 'page' : undefined}
                className={`${styles.navLink} ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}