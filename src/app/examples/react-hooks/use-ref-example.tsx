'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function UseRefExample() {
  const [text, setText] = useState('')
  const [forceRender, setForceRender] = useState(0)
  const [hiddenByRef, setHiddenByRef] = useState(false)
  const [hiddenByLet, setHiddenByLet] = useState(false)

  // 用於儲存DOM元素的ref
  const inputRef = useRef<HTMLInputElement>(null)

  // 追蹤渲染次數
  const renderCountRef = useRef(0)

  // 儲存計時器ID的ref
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // 用於比較的 useRef 和 let 變數
  const sumRef = useRef(0)
  let sumLet = 0

  // 追蹤渲染次數
  useEffect(() => {
    renderCountRef.current += 1
  })

  // 聚焦輸入框
  const focusInput = () => {
    inputRef.current?.focus()
  }

  // 啟動一個延遲的操作
  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      alert(`您輸入的文字: ${text}`)
    }, 1500)
  }

  // 停止計時器
  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = undefined
    }
  }

  // useRef 計數器點擊函數
  const clickRef = () => {
    sumRef.current = sumRef.current + 1
    console.log('useRef sumRef.current:', sumRef.current)

    if (sumRef.current === 5) {
      setHiddenByRef(true)
    } else if (sumRef.current > 15) {
      setHiddenByRef(false)
    }

    // setForceRender((prev) => prev + 1)
  }

  // let 變數計數器點擊函數
  const clickLet = () => {
    sumLet = sumLet + 1
    console.log('let sumLet (每次渲染重置為0):', sumLet)

    // let 變數永遠無法達到5，因為每次渲染都重置為0
    // 這個條件永遠不會成立
    if (sumLet === 5) {
      setHiddenByLet(true)
    } else if (sumLet > 15) {
      setHiddenByLet(false)
    }

    // setForceRender((prev) => prev + 1)
  }

  // 重置比較範例
  const resetComparison = () => {
    sumRef.current = 0
    setHiddenByRef(false)
    setHiddenByLet(false)
    setForceRender((prev) => prev + 1)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>useRef Hook</CardTitle>
        <CardDescription>
          useRef 返回一個可變的 ref 對象，它的 .current 屬性被初始化為傳入的參數。useRef
          像是一個「盒子」，可以在其 .current 屬性中保存任何值。
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='bg-muted rounded-md p-4'>
          <pre className='text-sm'>
            <code>{`const refContainer = useRef(initialValue);`}</code>
          </pre>
        </div>

        {/* DOM 元素訪問 */}
        <div>
          <h3 className='mb-3 text-lg font-medium'>1. 訪問 DOM 元素</h3>
          <p className='text-muted-foreground mb-3 text-sm'>使用 useRef 來訪問和操作 DOM 元素</p>
          <div className='flex gap-2'>
            <Input ref={inputRef} placeholder='點擊按鈕後會聚焦此輸入框' />
            <Button onClick={focusInput}>聚焦</Button>
          </div>
        </div>

        {/* useRef vs let 比較 */}
        <div className='border-t pt-4'>
          <h3 className='mb-3 text-lg font-medium'>2. useRef vs let 變數比較</h3>
          <p className='text-muted-foreground mb-3 text-sm'>
            演示 useRef 與 let 變數在重新渲染時的行為差異
          </p>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='rounded-md border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20'>
              <p className='font-medium text-blue-900 dark:text-blue-100'>useRef 計數器</p>
              <p className='text-2xl font-bold text-blue-900 dark:text-blue-100'>
                {sumRef.current}
              </p>
              <p className='mt-1 text-xs text-blue-700 dark:text-blue-300'>
                在重新渲染間保持值，點擊5次顯示隱藏區塊
              </p>
              <Button onClick={clickRef} className='mt-2 w-full' size='sm'>
                useRef +1
              </Button>
              {hiddenByRef && (
                <div className='mt-2 rounded bg-blue-100 p-2 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
                  🎉 useRef 觸發的隱藏區塊！
                </div>
              )}
            </div>

            <div className='rounded-md border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/20'>
              <p className='font-medium text-red-900 dark:text-red-100'>let 變數計數器</p>
              <p className='text-2xl font-bold text-red-900 dark:text-red-100'>{sumLet}</p>
              <p className='mt-1 text-xs text-red-700 dark:text-red-300'>
                每次重新渲染都重置為0，無法累積計數
              </p>
              <Button onClick={clickLet} className='mt-2 w-full' size='sm' variant='outline'>
                let +1
              </Button>
              {hiddenByLet && (
                <div className='mt-2 rounded bg-red-100 p-2 text-xs text-red-800 dark:bg-red-900 dark:text-red-200'>
                  ❌ let 觸發的隱藏區塊（永遠不會出現）
                </div>
              )}
            </div>
          </div>

          <div className='bg-muted/50 mt-3 rounded-md p-3'>
            <p className='mb-2 text-sm font-medium'>觀察重點：</p>
            <ul className='text-muted-foreground space-y-1 text-xs'>
              <li>• useRef: 計數會累積，到達5時顯示隱藏區塊</li>
              <li>• let 變數: 每次渲染都重置為0，點擊後變為1，然後又重置為0</li>
              <li>• 控制台會顯示：useRef 遞增(1,2,3...)，let 永遠是1</li>
              <li>• let 變數永遠無法累積到5，所以隱藏區塊永不會出現</li>
            </ul>
          </div>

          <div className='mt-3 flex gap-2'>
            <Button onClick={resetComparison} variant='outline' size='sm'>
              重置比較
            </Button>
            <Button onClick={() => setForceRender((prev) => prev + 1)} variant='ghost' size='sm'>
              觸發重新渲染 (次數: {renderCountRef.current})
            </Button>
          </div>
        </div>

        {/* 儲存實例值 */}
        <div className='border-t pt-4'>
          <h3 className='mb-3 text-lg font-medium'>3. 儲存實例值（計時器）</h3>
          <p className='text-muted-foreground mb-3 text-sm'>
            使用 useRef 存儲 setTimeout 的ID，便於清理
          </p>
          <div className='space-y-3'>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='輸入一些文字...'
            />
            <div className='flex gap-2'>
              <Button onClick={startTimer}>啟動定時器 (1.5秒)</Button>
              <Button variant='outline' onClick={stopTimer}>
                取消定時器
              </Button>
            </div>
            <p className='text-muted-foreground text-xs'>
              點擊「啟動定時器」，1.5秒後會彈出提示，顯示你輸入的文字。
              點擊「取消定時器」可以阻止提示出現。
            </p>
          </div>
        </div>

        {/* 重點說明 */}
        <div className='border-t pt-4'>
          <h3 className='mb-3 text-lg font-medium'>useRef 的核心特點</h3>
          <div className='bg-muted/50 rounded-md p-4'>
            <div className='grid gap-3'>
              <div>
                <p className='font-medium'>🎯 不觸發重新渲染</p>
                <p className='text-muted-foreground text-sm'>
                  修改 ref.current 不會觸發組件重新渲染
                </p>
              </div>
              <div>
                <p className='font-medium'>💾 跨渲染保持值</p>
                <p className='text-muted-foreground text-sm'>在組件重新渲染之間保持引用的穩定性</p>
              </div>
              <div>
                <p className='font-medium'>🔗 直接訪問 DOM</p>
                <p className='text-muted-foreground text-sm'>可以直接訪問和操作 DOM 元素</p>
              </div>
              <div>
                <p className='font-medium'>🗃️ 儲存任意值</p>
                <p className='text-muted-foreground text-sm'>
                  可以儲存任何需要在渲染間保持的可變值
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
