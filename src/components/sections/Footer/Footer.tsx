// src/components/sections/Footer/Footer.tsx

import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.frame}>
        <div className={styles.bgWrapper} aria-hidden="true">
          <Image
            src="/assets/sections/Footer/VLKH_template_Gioithieu_0001_BG.png"
            alt=""
            fill
            priority
            className={styles.bgImage}
          />
        </div>

        <div className={styles.logoWrapper}>
          <Image
            src="/assets/sections/Footer/title_game_03.png"
            alt="Võ Lâm Kỳ Hiệp"
            width={266}
            height={148}
            priority
            className={styles.logoImage}
          />
        </div>
      </div>
    </footer>
  )
}