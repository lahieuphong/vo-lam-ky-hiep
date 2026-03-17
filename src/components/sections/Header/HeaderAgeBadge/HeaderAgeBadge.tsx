// src/components/sections/Header/HeaderAgeBadge/HeaderAgeBadge.tsx

import React from 'react'
import styles from './HeaderAgeBadge.module.css'

export default function HeaderAgeBadge() {
  return (
    <div className={styles.wrapper} aria-label="Thông tin phân loại độ tuổi">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.ageBox}>
            <span className={styles.ageText}>18+</span>
          </div>

          <div className={styles.noticeBox}>
            <span className={styles.noticeText}>
              GAME DÀNH
              <br />
              CHO NGƯỜI
              <br />
              TRÊN 18 TUỔI
            </span>
          </div>
        </div>

        <div className={styles.middleRow}>
          <span className={styles.rankText}>NPH xếp loại</span>
        </div>

        <div className={styles.bottomRow}>
          <span className={styles.footerText}>
            Chơi quá 180 phút một ngày sẽ ảnh
            <br />
            hưởng xấu đến sức khỏe
          </span>
        </div>
      </div>
    </div>
  )
}