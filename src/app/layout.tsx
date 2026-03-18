// src/app/layout.tsx

import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Võ Lâm Kỳ Hiệp - Trang chủ',
  description: 'Landing page game Võ Lâm Kỳ Hiệp'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}