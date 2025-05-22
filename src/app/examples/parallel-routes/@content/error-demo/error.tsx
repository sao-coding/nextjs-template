'use client'

import { useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 錯誤日誌記錄 - 開發環境可以在控制台看到
    console.error('錯誤被捕獲到 error.tsx 中:', error)
  }, [error])

  return (
    <Card className='border-destructive/50'>
      <CardHeader className='bg-destructive/10'>
        <CardTitle className='text-destructive flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-5 w-5'
          >
            <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
            <line x1='12' y1='9' x2='12' y2='13'></line>
            <line x1='12' y1='17' x2='12.01' y2='17'></line>
          </svg>
          錯誤已被捕獲
        </CardTitle>
      </CardHeader>
      <CardContent className='pt-6'>
        <p className='mb-2 font-medium'>發生了以下錯誤：</p>
        <div className='bg-muted rounded-md p-3 font-mono text-sm'>
          {error.message || '未知錯誤'}
        </div>
        <p className='text-muted-foreground mt-4 text-sm'>
          這個錯誤僅影響當前內容區域，側邊欄和其他頁面部分仍然可以正常工作。
          這是平行路由的主要優點之一。
        </p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline' onClick={reset}>
          重試
        </Button>
        <Link href='/examples/parallel-routes' passHref>
          <Button variant='default'>返回儀表板</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
