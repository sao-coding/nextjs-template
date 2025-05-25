'use client'

import { useState } from 'react'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function UseStateExample() {
  // 基本計數器
  const [count, setCount] = useState(0)

  // 普通變數 (非狀態)
  let normalCount = 0

  // 更新普通變數的函數
  const incrementNormalCount = () => {
    normalCount += 1
    console.log('普通變數已更新:', normalCount)
    // 注意: 這不會觸發重新渲染
  }

  // 表單狀態
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  // 複雜狀態
  const [todos, setTodos] = useState<string[]>([])
  const [newTodo, setNewTodo] = useState('')

  // 處理表單輸入變化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // 添加新待辦事項
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos((prev) => [...prev, newTodo])
      setNewTodo('')
    }
  }

  // 移除待辦事項
  const removeTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>useState Hook</CardTitle>
          <CardDescription>
            useState 用於在函數組件中添加本地狀態，React 會在重新渲染之間保留此狀態。
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='bg-muted rounded-md p-4'>
            <pre className='text-sm'>
              <code>{`const [state, setState] = useState(initialState);`}</code>
            </pre>
          </div>

          <Alert className='mb-4'>
            <AlertDescription>
              <strong>useState 與普通變數的差異：</strong>
              <br />
              1. useState 的值在重新渲染後會保留
              <br />
              2. useState 的更新會觸發組件重新渲染
              <br />
              3. 普通變數在每次渲染時都會重置為初始值
            </AlertDescription>
          </Alert>

          <div>
            <h3 className='mb-2 text-lg font-medium'>狀態與普通變數比較</h3>
            <div className='mb-4 grid grid-cols-2 gap-4'>
              <div className='rounded-md border p-4'>
                <p className='mb-2 font-medium'>useState 狀態</p>
                <div className='flex items-center gap-4'>
                  <Button
                    onClick={() => setCount((c) => Math.max(0, c - 1))}
                    disabled={count === 0}
                  >
                    -
                  </Button>
                  <span className='text-xl'>{count}</span>
                  <Button onClick={() => setCount((c) => c + 1)}>+</Button>
                </div>
              </div>

              <div className='rounded-md border p-4'>
                <p className='mb-2 font-medium'>普通變數 (檢查控制台)</p>
                <div className='flex items-center gap-4'>
                  <span className='text-xl'>{normalCount}</span>
                  <Button onClick={incrementNormalCount}>增加 (查看控制台)</Button>
                </div>
                <p className='text-muted-foreground mt-2 text-xs'>
                  即使變數在函數中更新，UI也不會更新
                </p>
              </div>
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>表單狀態範例</h3>
            <div className='space-y-3'>
              <div>
                <label className='mb-1 block text-sm'>姓名</label>
                <Input
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='輸入姓名'
                />
              </div>
              <div>
                <label className='mb-1 block text-sm'>Email</label>
                <Input
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='輸入Email'
                />
              </div>
              <div className='bg-muted rounded-md p-3'>
                <p className='text-sm'>表單資料: {JSON.stringify(formData)}</p>
              </div>
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='mb-2 text-lg font-medium'>待辦事項列表範例</h3>
            <div className='space-y-3'>
              <div className='flex gap-2'>
                <Input
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder='新增待辦事項'
                  onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                />
                <Button onClick={addTodo}>新增</Button>
              </div>

              <ul className='space-y-2'>
                {todos.length === 0 ? (
                  <li className='text-muted-foreground py-2 text-center'>尚無待辦事項</li>
                ) : (
                  todos.map((todo, idx) => (
                    <li
                      key={idx}
                      className='bg-muted/50 flex items-center justify-between rounded-md p-2'
                    >
                      <span>{todo}</span>
                      <Button variant='ghost' size='sm' onClick={() => removeTodo(idx)}>
                        刪除
                      </Button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
