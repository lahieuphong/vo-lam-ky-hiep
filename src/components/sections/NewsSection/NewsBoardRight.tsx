import React from 'react'
import Image from 'next/image'
import styles from './NewsBoardRight.module.css'
import { NEWS_TABS, NEWS_ITEMS, type NewsTabItem, type NewsItem } from './newsSection.data'

export default function NewsBoardRight() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.tabs}>
          {NEWS_TABS.map((tab: NewsTabItem) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tabButton} ${tab.active ? styles.tabButtonActive : ''}`}
            >
              {tab.active && (
                <Image
                  src="/assets/sections/NewsSection/NewsBoardRight/Badget.png"
                  alt=""
                  fill
                  className={styles.tabBadge}
                />
              )}
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>

        <button type="button" className={styles.plusButton} aria-label="Xem thêm">
          <Image
            src="/assets/sections/NewsSection/NewsBoardRight/Plus-circle.png"
            alt=""
            width={30}
            height={30}
          />
        </button>
      </div>

      <div className={styles.infoList}>
        {NEWS_ITEMS.map((item: NewsItem) => (
          <div key={item.id} className={styles.infoRow}>
            <div className={styles.leftCol}>
              <Image
                src="/assets/sections/NewsSection/NewsBoardRight/VLKH_screen_Tintuc_0003_symbol.png"
                alt=""
                width={25}
                height={25}
                className={styles.bullet}
              />
              <span className={styles.title}>{item.title}</span>
            </div>

            <span className={styles.date}>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}