'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { ErrorBoundary } from 'react-error-boundary'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

// 模擬可能會拋出錯誤的組件
const ErrorProneComponent = () => {
  const [error, setError] = useState<Error | null>(null)

  if (error) {
    throw error
  }

  return (
    <div className='space-y-4'>
      <p>這個組件可能會拋出錯誤</p>
      <Button variant='destructive' onClick={() => setError(new Error('手動觸發的錯誤'))}>
        觸發錯誤
      </Button>
    </div>
  )
}

// 錯誤回退組件
const ErrorFallback = ({
  error,
  resetErrorBoundary
}: {
  error: Error
  resetErrorBoundary: () => void
}) => (
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
        React Error Boundary 捕獲的錯誤
      </CardTitle>
    </CardHeader>
    <CardContent className='pt-6'>
      <p className='mb-2 font-medium'>錯誤訊息：</p>
      <div className='bg-muted rounded-md p-3 font-mono text-sm'>{error.message}</div>
    </CardContent>
    <CardFooter>
      <Button variant='outline' onClick={resetErrorBoundary}>
        重試
      </Button>
    </CardFooter>
  </Card>
)

// 模擬加載中的組件
const SlowComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  setTimeout(() => {
    setIsLoaded(true)
  }, 2000)

  if (!isLoaded) {
    throw new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return <div>載入完成的內容</div>
}

// 載入中顯示的骨架屏
const LoadingSkeleton = () => (
  <div className='space-y-2'>
    <Skeleton className='h-4 w-full' />
    <Skeleton className='h-4 w-3/4' />
    <Skeleton className='mt-4 h-10 w-1/3' />
  </div>
)

export default function SuspenseBoundariesExample() {
  return (
    <div className='container mx-auto space-y-8 p-6'>
      <div>
        <h1 className='mb-4 text-3xl font-bold'>Suspense Boundaries 示例</h1>
        <p className='text-muted-foreground mb-6'>
          展示如何使用 React 的 Suspense 和錯誤邊界處理載入狀態和錯誤
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Suspense 載入狀態處理</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<LoadingSkeleton />}>
              <SlowComponent />
            </Suspense>
          </CardContent>
          <CardFooter>
            <p className='text-muted-foreground text-sm'>
              使用 Suspense 可以優雅地處理異步載入狀態
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>錯誤邊界處理</CardTitle>
          </CardHeader>
          <CardContent>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onError={(error) => console.error('捕獲到錯誤:', error)}
            >
              <ErrorProneComponent />
            </ErrorBoundary>
          </CardContent>
          <CardFooter>
            <p className='text-muted-foreground text-sm'>
              使用 react-error-boundary 可以簡化錯誤處理邏輯
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className='mt-8 flex justify-center'>
        <Link href='/examples/compare' passHref>
          <Button>查看與平行路由的對比</Button>
        </Link>
      </div>
    </div>
  )
}
