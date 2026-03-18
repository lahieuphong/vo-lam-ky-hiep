import React from 'react'
import Image from 'next/image'
import styles from './NewsSectionBackground.module.css'

export default function NewsSectionBackground() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {/* <div className={styles.bambooWrap}>
        <Image
          src="/assets/sections/NewsRankingSection/NewsSection/NewsSectionBackground/VLKH_screen_Hethongnhanvat_0000s_0001s_0000_Bamboo.png"
          alt=""
          width={1920}
          height={1080}
          priority
          className={styles.bambooImage}
        />
      </div> */}

      <div className={styles.goldCloudLeft}>
        <Image
          src="/assets/sections/NewsRankingSection/NewsSection/NewsSectionBackground/cloud_gold_8.png"
          alt=""
          width={749}
          height={416}
          priority
          className={styles.goldCloudLeftImage}
        />
      </div>

      <div className={styles.goldCloudRight}>
        <Image
          src="/assets/sections/NewsRankingSection/NewsSection/NewsSectionBackground/cloud_gold_7.png"
          alt=""
          width={1078}
          height={599}
          priority
          className={styles.goldCloudRightImage}
        />
      </div>
    </div>
  )
}