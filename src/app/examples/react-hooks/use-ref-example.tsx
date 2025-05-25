'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function UseRefExample() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  // 添加 useState 計數器
  const [stateCounter, setStateCounter] = useState(0)

  // 用於儲存DOM元素的ref
  const inputRef = useRef<HTMLInputElement>(null)

  // 儲存前一個狀態值的ref
  const prevCountRef = useRef<number>(undefined)

  // 儲存不會觸發渲染的值的ref
  const renderCountRef = useRef(0)
  // 新增 useRef 計數器
  const refCounter = useRef(0)

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

  // 增加 useRef 計數器 (不會觸發重新渲染)
  const incrementRefCounter = () => {
    refCounter.current += 1
    console.log('useRef 計數器值已更新為:', refCounter.current)
  }

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
                比較 useState 和 useRef: useState 變更會觸發重新渲染，而 useRef 不會
              </p>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='bg-muted/50 rounded-md p-3'>
                  <p className='font-medium'>useState 計數器</p>
                  <p className='text-2xl font-bold'>{stateCounter}</p>
                  <p className='text-muted-foreground mt-1 text-xs'>
                    更新時會立即在UI上反映，並觸發組件重新渲染
                  </p>
                  <Button
                    onClick={() => setStateCounter((prev) => prev + 1)}
                    className='mt-2 w-full'
                    size='sm'
                  >
                    增加 useState 計數器
                  </Button>
                </div>

                <div className='bg-muted/50 rounded-md p-3'>
                  <p className='font-medium'>useRef 計數器</p>
                  <p className='text-2xl font-bold'>{refCounter.current}</p>
                  <p className='text-muted-foreground mt-1 text-xs'>
                    更新時不會立即反映在UI上，也不會觸發重新渲染
                  </p>
                  <Button onClick={incrementRefCounter} className='mt-2 w-full' size='sm'>
                    增加 useRef 計數器
                  </Button>
                </div>
              </div>

              <div className='bg-muted/50 rounded-md p-3'>
                <p>
                  組件渲染次數: <span className='font-medium'>{renderCountRef.current}</span>
                </p>
                <p className='text-muted-foreground mt-1 text-xs'>
                  這個計數會在每次組件重新渲染時增加，但更新 ref 本身不會觸發重新渲染
                </p>
              </div>

              <div className='flex gap-2'>
                <Button onClick={() => setCount((c) => c + 1)}>觸發重新渲染</Button>
                <Button
                  variant='outline'
                  onClick={() => alert(`useRef 計數器當前值: ${refCounter.current}`)}
                >
                  檢查 useRef 當前值
                </Button>
              </div>
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

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>useRef 與 useState 差異比較</h3>
            <div className='space-y-3'>
              <p className='text-muted-foreground text-sm'>
                直觀比較 useRef 和 useState 的行為差異
              </p>
              <div className='flex items-center gap-4'>
                <Button onClick={() => setStateCounter((c) => c + 1)}>增加 useState 計數</Button>
                <Button onClick={incrementRefCounter}>增加 useRef 計數</Button>
                <div>
                  <p>
                    useState 計數: <span className='font-medium'>{stateCounter}</span>
                  </p>
                  <p>
                    useRef 計數: <span className='font-medium'>{refCounter.current}</span>
                  </p>
                </div>
              </div>
              <p className='text-muted-foreground text-xs'>
                點擊按鈕比較兩者的計數變化，useRef 計數變化不會觸發組件重新渲染
              </p>
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>useRef 與普通變數的差異</h3>
            <div className='space-y-3'>
              <p className='text-muted-foreground text-sm'>useRef 與普通變數（如 let）的主要差別</p>
              <div className='bg-muted/50 rounded-md p-4'>
                <div className='grid gap-2'>
                  <p className='font-medium'>1. 重新渲染時的行為</p>
                  <p className='text-sm'>
                    - 普通變數：每次組件重新渲染時都會重新初始化
                    <br />- useRef：在整個組件生命週期內保持持久的引用，不會在重新渲染時重置
                  </p>

                  <p className='mt-2 font-medium'>2. 數據保存</p>
                  <p className='text-sm'>
                    - 普通變數：對變數的修改在組件重新渲染後會丟失
                    <br />- useRef：對 .current 的修改會在重新渲染後保留
                  </p>

                  <p className='mt-2 font-medium'>3. 與渲染循環的關係</p>
                  <p className='text-sm'>
                    - 普通變數：它是函數作用域的一部分，每次渲染都會重新創建
                    <br />- useRef：React 會確保返回相同的 ref 對象，所以 .current
                    屬性在渲染之間保持不變
                  </p>

                  <p className='mt-2 font-medium'>4. 示例場景</p>
                  <p className='text-sm'>
                    - 普通變數適合：僅在單次渲染中需要的臨時計算
                    <br />- useRef 適合：需要在渲染之間保存值（如計時器ID、DOM引用、前一個狀態等）
                  </p>
                </div>

                <div className='mt-3 border-t pt-3'>
                  <p className='text-muted-foreground text-xs italic'>
                    關鍵點：當你需要一個在組件重新渲染之間保持不變的值，且更新它不需要觸發重新渲染時，
                    使用 useRef 而不是普通變數。這就是為什麼 useRef 常用於儲存 DOM 引用、計時器 ID
                    以及 跟踪組件內部狀態但不需要觸發渲染的情況。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
