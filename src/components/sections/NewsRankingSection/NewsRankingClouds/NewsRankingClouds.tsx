// src/components/sections/NewsRankingSection/NewsRankingClouds/NewsRankingClouds.tsx

import React from 'react'
import Image from 'next/image'
import styles from './NewsRankingClouds.module.css'

export default function NewsRankingClouds() {
  return (
    <>
      <div className={styles.cloudTopWrap} aria-hidden="true">
        <Image
          src="/assets/sections/NewsRankingSection/NewsRankingClouds/Cloud_copy.png"
          alt=""
          width={2928}
          height={1990}
          priority
          className={styles.cloudImage}
        />
      </div>

      <div className={styles.cloudBottomWrap} aria-hidden="true">
        <Image
          src="/assets/sections/NewsRankingSection/NewsRankingClouds/Cloud_01.png"
          alt=""
          width={2906}
          height={951}
          priority
          className={styles.cloudBottomImage}
        />
      </div>
    </>
  )
}