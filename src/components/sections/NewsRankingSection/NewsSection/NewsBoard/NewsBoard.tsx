// src/components/sections/NewsRankingSection/NewsSection/NewsBoard/NewsBoard.tsx

import React from 'react'
import Image from 'next/image'
import styles from './NewsBoard.module.css'
import NewsBoardLeft from '../NewsBoardLeft/NewsBoardLeft'
import NewsBoardRight from '../NewsBoardRight/NewsBoardRight'

export default function NewsBoard() {
  return (
    <div className={styles.board}>
      <Image
        src="/assets/sections/NewsRankingSection/NewsSection/NewsBoard/VLKH_screen_Tintuc_0006_main_board.png"
        alt="Bảng tin tức sự kiện"
        width={1505}
        height={734}
        priority
        className={styles.boardImage}
      />

      <div className={styles.leftSlot}>
        <NewsBoardLeft />
      </div>

      <div className={styles.rightSlot}>
        <NewsBoardRight />
      </div>
    </div>
  )
}