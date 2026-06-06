'use client'

import { useMotionValue, useTransform, animate } from 'framer-motion'
import { useCallback } from 'react'

export default function useCounter(target: number) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  const start = useCallback(() => {
    count.set(0) // reset before replay

    const controls = animate(count, target, {
      duration: 2,
      ease: 'easeOut',
    })

    return controls.stop
  }, [count, target])

  return { rounded, start }
}
