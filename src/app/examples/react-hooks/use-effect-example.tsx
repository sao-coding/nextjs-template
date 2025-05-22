'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function UseEffectExample() {
  const [count, setCount] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // 無依賴項的 Effect - 在每次渲染後執行
  useEffect(() => {
    console.log('元件已渲染')
  })

  // 空依賴陣列的 Effect - 僅在元件掛載時執行一次
  useEffect(() => {
    console.log('元件已掛載')
    setWindowWidth(window.innerWidth)

    // 添加視窗尺寸變化監聽器
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // 清理函數 - 元件卸載時執行
    return () => {
      console.log('元件將卸載')
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // 有依賴項的 Effect - 當依賴項改變時執行
  useEffect(() => {
    console.log(`計數值已更新為: ${count}`)

    // 設置文檔標題
    document.title = `點擊了 ${count} 次`

    return () => {
      // 清理前一個效果
      console.log(`清理前一個效果: ${count}`)
    }
  }, [count])

  // 模擬搜尋 API 的 Effect
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([])
      return
    }

    // 增加一些有重複關鍵字的項目，方便模糊搜尋
    const items = [
      '蘋果',
      '青蘋果',
      '香蕉',
      '香蕉牛奶',
      '橘子',
      '葡萄',
      '葡萄柚',
      '草莓',
      '草莓蛋糕',
      '芒果',
      '芒果冰',
      '藍莓',
      '藍莓果醬',
      '荔枝',
      '芭樂',
      '西瓜',
      '西瓜汁'
    ]

    // const results = items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
    // setSearchResults(results)

    const delayDebounce = setTimeout(() => {
      setIsLoading(true)

      // 模擬 API 請求延遲
      setTimeout(() => {
        const results = items.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setSearchResults(results)
        setIsLoading(false)
      }, 500)
    }, 300)

    // 清理防抖計時器
    return () => clearTimeout(delayDebounce)
  }, [searchTerm])

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>useEffect Hook</CardTitle>
          <CardDescription>
            useEffect 讓你可以在函數組件中執行副作用操作，如數據獲取、訂閱或手動更改 DOM 等。
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-muted rounded-md p-4'>
            <pre className='text-sm'>
              <code>{`useEffect(() => {
  // 副作用代碼
  
  return () => {
    // 清理函數 (可選)
  }
}, [依賴項]); // 依賴項陣列`}</code>
            </pre>
          </div>

          <div>
            <h3 className='mb-2 text-lg font-medium'>更新文檔標題範例</h3>
            <div className='space-y-2'>
              <p className='text-muted-foreground text-sm'>
                當你點擊按鈕，計數更新時，useEffect 會更新瀏覽器標籤的標題
              </p>
              <div className='flex items-center gap-4'>
                <Button onClick={() => setCount((c) => c + 1)}>點擊 ({count})</Button>
                <p className='text-sm'>查看瀏覽器標籤標題的變化</p>
              </div>
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>視窗大小監聽範例</h3>
            <div className='space-y-2'>
              <p className='text-muted-foreground text-sm'>
                使用 useEffect 設置事件監聽器，當視窗大小變化時更新狀態
              </p>
              <div className='bg-muted/50 rounded-md p-3'>
                <p>
                  目前視窗寬度: <span className='font-medium'>{windowWidth}px</span>
                </p>
                <p className='text-muted-foreground mt-1 text-xs'>調整瀏覽器視窗大小查看更新</p>
              </div>
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>搜尋功能與防抖範例</h3>
            <div className='space-y-3'>
              <p className='text-muted-foreground text-sm'>
                使用 useEffect 實現搜尋功能與防抖，當輸入變化時延遲執行搜尋
              </p>
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='搜尋水果...'
              />

              <div className='bg-muted/30 min-h-[100px] rounded-md p-3'>
                {isLoading ? (
                  <p className='py-2 text-center'>搜尋中...</p>
                ) : searchTerm.trim() === '' ? (
                  <p className='text-muted-foreground py-2 text-center'>請輸入搜尋條件</p>
                ) : searchResults.length > 0 ? (
                  <ul className='space-y-1'>
                    {searchResults.map((result, idx) => (
                      <li key={idx} className='px-2 py-1'>
                        {result}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='py-2 text-center'>無符合的項目</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
