'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// 這個組件會在渲染時直接拋出錯誤
function BuggyComponent(): React.ReactElement {
  throw new Error('這是一個在渲染時拋出的錯誤')
  // return <></> // 不會執行到這裡，但為了型別正確性保留
}

export default function ErrorDemoPage() {
  const [error, setError] = useState<string | null>(null)
  const [showBuggy, setShowBuggy] = useState(false)

  // 重置狀態，防止無限循環
  useEffect(() => {
    if (showBuggy) {
      setTimeout(() => setShowBuggy(false), 100)
    }
  }, [showBuggy])

  // 模擬異步錯誤
  const triggerAsyncError = async () => {
    try {
      await new Promise((_, reject) => {
        setTimeout(() => reject(new Error('API請求失敗: 無法連接到伺服器')), 1000)
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : '發生未知錯誤')
    }
  }

  // 如果showBuggy為true，渲染拋出錯誤的組件
  if (showBuggy) {
    return <BuggyComponent />
  }

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold'>錯誤邊界示範</h2>
        <p className='text-muted-foreground'>測試平行路由中的錯誤處理機制</p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>React 錯誤邊界</CardTitle>
            <CardDescription>
              觸發一個將由錯誤邊界捕獲的錯誤。這會顯示error.tsx中定義的UI，而不影響側邊欄。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant='destructive' onClick={() => setShowBuggy(true)} className='w-full'>
              觸發直接錯誤
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>組件內錯誤處理</CardTitle>
            <CardDescription>觸發在組件內部處理的錯誤。這不會觸發錯誤邊界。</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Button variant='outline' onClick={triggerAsyncError} className='w-full'>
              觸發異步錯誤
            </Button>

            {error && (
              <div className='bg-destructive/15 text-destructive rounded-md p-3'>
                <p className='text-sm font-medium'>{error}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className='rounded-lg border p-6'>
        <h3 className='mb-4 text-lg font-semibold'>平行路由的錯誤隔離</h3>
        <p className='text-muted-foreground'>
          平行路由的一大優點是錯誤邊界的隔離性。點擊「觸發直接錯誤」按鈕時，只有內容區域顯示錯誤UI，側邊欄保持正常顯示。
        </p>
      </div>
    </div>
  )
}
