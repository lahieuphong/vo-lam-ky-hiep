// src/components/layout/OverlayClouds/OverlayClouds.tsx

'use client'

import React from 'react'
import Image from 'next/image'
import styles from './OverlayClouds.module.css'

export default function OverlayClouds() {
  return (
    <div className={styles.overlayCloud} aria-hidden="true" role="presentation">
      <Image
        src="/assets/background_frame/Cloud_01.png"
        alt=""
        width={2906}
        height={951}
        priority
      />
    </div>
  )
}