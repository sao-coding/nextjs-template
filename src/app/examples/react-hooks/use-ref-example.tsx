'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function UseRefExample() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // 用於儲存DOM元素的ref
  const inputRef = useRef<HTMLInputElement>(null)

  // 儲存前一個狀態值的ref
  const prevCountRef = useRef<number>(undefined)

  // 儲存不會觸發渲染的值的ref
  const renderCountRef = useRef(0)

  // 儲存計時器ID的ref
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // 當計數變化時，更新前一個值的ref
  useEffect(() => {
    prevCountRef.current = count
  }, [count])

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
    // 先清除現有計時器
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // 設置新計時器
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

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>useRef Hook</CardTitle>
          <CardDescription>
            useRef 返回一個可變的 ref 對象，它的 .current 屬性被初始化為傳入的參數。useRef
            像是一個「盒子」，可以在其 .current 屬性中保存任何值。
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-muted rounded-md p-4'>
            <pre className='text-sm'>
              <code>{`const refContainer = useRef(initialValue);`}</code>
            </pre>
          </div>

          <div>
            <h3 className='mb-2 text-lg font-medium'>訪問 DOM 元素範例</h3>
            <div className='space-y-3'>
              <p className='text-muted-foreground text-sm'>
                使用 useRef 來訪問和操作 DOM 元素，如聚焦輸入框
              </p>
              <div className='flex gap-2'>
                <Input ref={inputRef} placeholder='點擊按鈕後會聚焦此輸入框' />
                <Button onClick={focusInput}>聚焦</Button>
              </div>
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>保存前一個值範例</h3>
            <div className='space-y-3'>
              <p className='text-muted-foreground text-sm'>
                使用 useRef 來保存前一個狀態值，即使在渲染間也不會丟失
              </p>
              <div className='flex items-center gap-4'>
                <Button onClick={() => setCount((c) => c + 1)}>增加計數</Button>
                <div>
                  <p>
                    當前計數: <span className='font-medium'>{count}</span>
                  </p>
                  <p>
                    前一個計數: <span className='font-medium'>{prevCountRef.current ?? '無'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>不觸發渲染的可變值範例</h3>
            <div className='space-y-3'>
              <p className='text-muted-foreground text-sm'>
                useRef 可以保存不會觸發重新渲染的可變值，如渲染計數器
              </p>
              <div className='bg-muted/50 rounded-md p-3'>
                <p>
                  組件渲染次數: <span className='font-medium'>{renderCountRef.current}</span>
                </p>
                <p className='text-muted-foreground mt-1 text-xs'>
                  這個計數會在每次組件重新渲染時增加，但更新 ref 本身不會觸發重新渲染
                </p>
              </div>
              <Button onClick={() => setCount((c) => c + 1)}>觸發重新渲染</Button>
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>存儲實例值範例 (計時器)</h3>
            <div className='space-y-3'>
              <p className='text-muted-foreground text-sm'>
                使用 useRef 存儲 setTimeout 的ID，便於清理
              </p>
              <div className='space-y-2'>
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
          </div>
        </CardContent>
      </Card>
    </>
  )
}
