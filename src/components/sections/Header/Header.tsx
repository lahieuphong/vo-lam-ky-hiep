// src/components/sections/Header/Header/Header.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import HeaderAgeBadge from './HeaderAgeBadge/HeaderAgeBadge'

const NAV = ['TRANG CHỦ', 'TIN TỨC - SỰ KIỆN', 'CẨM NANG', 'CỘNG ĐỒNG', 'NHẬP CODE']

export default function Header() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <header className={styles.header} role="banner">
      <div className={styles.imageWrapper}>
        {/* <Image src="/assets/sections/Header/nav.png" alt="header" width={1920} height={1045} priority className={styles.headerImage} /> */}

        <div className={styles.titleContainer} aria-hidden="true">
          <div className={styles.titleInner}>
            <Image
              src="/assets/sections/Header/title_game_03.png"
              alt="Võ Lâm Kỳ Hiệp - title"
              width={278}
              height={154}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        <HeaderAgeBadge />

        <div className={styles.overlay}>
          <nav aria-label="Main navigation" className={styles.navContainer}>
            {NAV.map((label, idx) => (
              <button
                key={label}
                type="button"
                aria-current={activeIndex === idx ? 'page' : undefined}
                className={`${styles.navLink} ${activeIndex === idx ? styles.active : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className={styles.navText}>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}