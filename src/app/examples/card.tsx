'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ArrowRight } from 'lucide-react'

import { MagicCard } from '@/components/magicui/magic-card'

import { Example } from './page'

const ExampleCard = ({ example }: { example: Example }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 確保只在客戶端渲染後執行
  useEffect(() => {
    setMounted(true)
  }, [])

  // 預設顏色，避免伺服器與客戶端渲染不一致
  const gradientColor = mounted ? (theme === 'dark' ? '#262626' : '#D9D9D955') : 'transparent'

  return (
    <MagicCard
      key={example.href}
      gradientColor={gradientColor}
      className='group border-muted bg-background relative block overflow-hidden rounded-xl p-6 transition-all duration-300 hover:shadow-lg'
    >
      <Link href={example.href}>
        <div className='text-primary absolute top-4 right-4 opacity-70 transition-opacity group-hover:opacity-100'>
          <ArrowRight className='h-5 w-5' />
        </div>
        <div className='text-primary mb-3'>{example.icon}</div>
        <h2 className='group-hover:text-primary mb-2 text-xl font-semibold transition-colors'>
          {example.title}
        </h2>
        <p className='text-muted-foreground group-hover:text-foreground/80 transition-colors'>
          {example.description}
        </p>
      </Link>
    </MagicCard>
  )
}

export default ExampleCard
