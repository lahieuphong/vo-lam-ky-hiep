// src/components/landing/LandingShell/LandingShell.tsx

import React from 'react'
import styles from './LandingShell.module.css'

type LandingShellProps = {
  children: React.ReactNode
  className?: string
}

export default function LandingShell({
  children,
  className = ''
}: LandingShellProps) {
  return (
    <div className={`${styles.shell} ${className}`.trim()}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  )
}