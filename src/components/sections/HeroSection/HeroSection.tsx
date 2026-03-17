'use client'

import React from 'react'
import Image from 'next/image'
import styles from './HeroSection.module.css'
import HeroClouds from './HeroClouds/HeroClouds'

type HeroSectionProps = {
  children?: React.ReactNode
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className={styles.section} aria-label="Hero section">
      <div className={styles.frame}>
        <div className={styles.bgLayer} aria-hidden="true">
          <Image
            src="/assets/sections/HeroSection/bg-blur.png"
            alt=""
            width={1920}
            height={1205}
            priority
            className={styles.bgImage}
          />
        </div>

        <Image
          src="/assets/sections/Header/nav.png"
          alt="Võ Lâm Kỳ Hiệp — header artwork"
          width={1920}
          height={1045}
          priority
          className={styles.headerImage}
        />

        <HeroClouds />

        <div className={styles.overlayArt} aria-hidden="true">
          <Image
            src="/assets/sections/HeroSection/2char.png"
            alt=""
            width={1960}
            height={1420}
            priority
          />
        </div>

        <div className={styles.headerLayer}>
          {children}
        </div>
      </div>
    </section>
  )
}