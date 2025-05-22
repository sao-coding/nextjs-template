'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { ShineBorder } from '@/components/magicui/shine-border'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { type Feature } from './page'

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 確保只在客戶端渲染後執行
  useEffect(() => {
    console.log('mounted')
    setMounted(true)
  }, [])

  return (
    <Card className='hover:border-primary/50 relative h-full overflow-hidden border transition-all duration-300 hover:shadow-md'>
      {mounted && <ShineBorder shineColor={theme === 'dark' ? 'white' : 'black'} />}
      <CardHeader>
        <div className='mb-3'>{feature.icon}</div>
        <CardTitle className='text-xl'>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>{feature.description}</p>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
