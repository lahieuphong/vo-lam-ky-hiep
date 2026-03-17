'use client'

import React from 'react'
import Image from 'next/image'
import styles from './HeroClouds.module.css'
import { HERO_CLOUDS, type HeroCloudItem } from './heroClouds.data'

type CloudStyle = React.CSSProperties & {
  ['--cloud-width']?: string
  ['--cloud-height']?: string
  ['--cloud-left']?: string
  ['--cloud-top']?: string
  ['--cloud-rotate']?: string
}

export default function HeroClouds() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {HERO_CLOUDS.map((cloud: HeroCloudItem) => {
        const style: CloudStyle = {
          '--cloud-width': `${cloud.width}px`,
          '--cloud-height': `${cloud.height}px`,
          '--cloud-left': `${cloud.left}px`,
          '--cloud-top': `${cloud.top}px`,
          '--cloud-rotate': `${cloud.rotate ?? 0}deg`,
          zIndex: cloud.layer
        }

        return (
          <div key={cloud.id} className={styles.cloudItem} style={style}>
            <Image
              src={cloud.src}
              alt=""
              width={Math.round(cloud.width)}
              height={Math.round(cloud.height)}
              priority
              className={styles.cloudImage}
            />
          </div>
        )
      })}
    </div>
  )
}