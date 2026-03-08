// components/blocks/Footer.tsx
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bgWrapper}>
        <Image
          src="/assets/footer/VLKH_template_Gioithieu_0001_BG.png"
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />

        <div className={styles.titleContainer}>
          <div className={styles.titleInner}>
            <Image
              src="/assets/footer/title_game_03.png"
              alt="Võ Lâm Kỳ Hiệp - title"
              width={456}
              height={254}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  )
}