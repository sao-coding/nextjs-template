'use client'

import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // 初始匹配狀態
    setMatches(media.matches)

    // 創建匹配監聽器
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // 監聽媒體查詢變化
    media.addEventListener('change', listener)

    // 清理監聽器
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}

// 常用查詢
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
  dark: '(prefers-color-scheme: dark)'
}
