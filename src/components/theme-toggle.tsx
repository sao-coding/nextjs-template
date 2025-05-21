'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 確保只在客戶端渲染後執行
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // 在尚未初始化時，避免渲染不一致的內容
    return null
  }

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title={theme === 'dark' ? '切換至亮色模式' : '切換至暗色模式'}
    >
      <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>{theme === 'dark' ? '切換至亮色模式' : '切換至暗色模式'}</span>
    </Button>
  )
}
