'use client'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', className, ...props }: Props){
  const classes = [
    'px-5 py-2 rounded-2xl font-semibold transition-shadow',
    variant === 'primary' ? 'bg-[color:var(--accent)] text-white shadow' : 'bg-white/30',
    className ?? ''
  ].filter(Boolean).join(' ')

  return (
    <button
      {...props}
      className={classes}
    />
  )
}