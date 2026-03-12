// src/components/ui/PageBackground.tsx
import React from 'react'
import styles from './PageBackground.module.css'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function PageBackground({ children, className }: Props) {
  return (
    <div className={`${styles.container} ${className ?? ''}`.trim()}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}