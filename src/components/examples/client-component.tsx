'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function ClientComponent() {
  const [count, setCount] = useState(0)
  const [browserInfo, setBrowserInfo] = useState<string | null>(null)

  // 使用 useEffect 訪問瀏覽器 API
  useEffect(() => {
    setBrowserInfo(`${window.navigator.userAgent}`)

    // 展示運行時間
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString()
      console.log(`客戶端元件運行中: ${timestamp}`)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // 事件處理函數
  const handleClick = () => {
    setCount((prev) => prev + 1)
    toast.success(`計數增加到 ${count + 1}`)
  }

  return (
    <Card className='bg-card p-4'>
      <div className='text-center'>
        <h3 className='mb-2 font-medium'>互動計數器</h3>
        <p className='mb-4 text-3xl font-bold'>{count}</p>
        <Button onClick={handleClick}>增加計數</Button>

        <div className='text-muted-foreground mt-4 border-t pt-4 text-sm'>
          <p>瀏覽器信息 (僅客戶端可用):</p>
          <p className='mt-1 font-mono text-xs break-all'>{browserInfo || '加載中...'}</p>
        </div>
      </div>
    </Card>
  )
}
