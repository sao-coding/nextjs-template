'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

// 這是一個伺服器元件 (默認)
export default function ClientComponentPage() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const increment = () => setCount(count + 1)
  const decrement = () => setCount((prevCount) => Math.max(0, prevCount - 1))

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue])
      setInputValue('')
    }
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='mb-4 text-3xl font-bold'>客戶端元件</h1>
        <p className='text-muted-foreground mb-6 text-lg'>
          Next.js 中的客戶端元件允許使用 React 的互動特性，如 hooks、事件處理和瀏覽器 API。
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>客戶端元件特點</h2>
          <ul className='list-disc space-y-2 pl-5'>
            <li>使用 React hooks (useState, useEffect 等)</li>
            <li>響應用戶事件和互動</li>
            <li>訪問瀏覽器 API</li>
            <li>維護客戶端狀態</li>
            <li>使用瀏覽器事件監聽器</li>
          </ul>
        </div>

        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>計數器示例</h2>
          <div className='bg-background flex items-center justify-center space-x-4 rounded-md p-4'>
            <Button variant='outline' onClick={decrement} disabled={count === 0}>
              -
            </Button>
            <span className='min-w-16 text-center text-2xl font-bold'>{count}</span>
            <Button variant='outline' onClick={increment}>
              +
            </Button>
          </div>
        </div>
      </div>

      <div className='bg-muted/30 rounded-lg border p-6'>
        <h2 className='mb-4 text-xl font-semibold'>互動清單示例</h2>
        <div className='mb-4 flex'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addItem()}
            className='focus:ring-primary flex-1 rounded-l-md border px-3 py-2 focus:ring-2 focus:outline-none'
            placeholder='添加新項目...'
          />
          <Button onClick={addItem} className='rounded-l-none'>
            添加
          </Button>
        </div>

        <div className='bg-background overflow-hidden rounded-md'>
          {items.length === 0 ? (
            <p className='text-muted-foreground p-4 text-center'>目前沒有項目，請添加一些...</p>
          ) : (
            <ul className='divide-y'>
              {items.map((item, index) => (
                <li key={index} className='flex items-center justify-between p-3'>
                  <span>{item}</span>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => removeItem(index)}
                    className='text-red-500 hover:bg-red-100 hover:text-red-700'
                  >
                    刪除
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className='bg-muted/30 mt-6 rounded-lg border p-6'>
        <h2 className='mb-4 text-xl font-semibold'>代碼示例</h2>
        <div className='bg-muted rounded-md p-4'>
          <pre className='overflow-auto text-sm'>
            <code>{`// app/examples/client-component/page.tsx
'use client' // 標記為客戶端元件

import { useState, useEffect } from 'react'

export default function Page() {
  // 使用 React hooks
  const [count, setCount] = useState(0)
  
  // 使用瀏覽器 API
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  // 事件處理
  const handleClick = () => {
    setCount(0)
  }
  
  return (
    <div>
      <p>計數: {count}</p>
      <button onClick={handleClick}>
        重置
      </button>
    </div>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className='rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/30'>
        <h3 className='mb-2 text-lg font-semibold'>學習資源</h3>
        <p>
          查看 Next.js 文檔了解有關客戶端元件的更多信息：
          <a
            href='https://nextjs.org/docs/app/building-your-application/rendering/client-components'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary ml-1 underline'
          >
            客戶端元件文檔
          </a>
        </p>
      </div>
    </div>
  )
}
