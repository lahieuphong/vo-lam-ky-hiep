import React from 'react'
import Image from 'next/image'
import styles from './NewsRankingBackground.module.css'

export default function NewsRankingBackground() {
  return (
    <div className={styles.bgWrap} aria-hidden="true">
      <Image
        src="/assets/sections/NewsRankingSection/NewsRankingBackground/bg-scroll.png"
        alt=""
        width={1920}
        height={2142}
        priority
        className={styles.bgImage}
      />
    </div>
  )
}