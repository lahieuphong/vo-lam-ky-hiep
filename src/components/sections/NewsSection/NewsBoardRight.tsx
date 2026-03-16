import React from 'react'
import styles from './NewsBoardRight.module.css'
import { NEWS_TABS, NEWS_ITEMS } from './newsSection.data'

export default function NewsBoardRight() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {NEWS_TABS.map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={`${styles.tab} ${index === 0 ? styles.activeTab : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {NEWS_ITEMS.map((item) => (
          <div key={item.id} className={styles.row}>
            <span className={styles.bullet}>✦</span>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.date}>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}