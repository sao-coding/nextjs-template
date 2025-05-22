'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function UseStateExample() {
  // 基本計數器
  const [count, setCount] = useState(0)

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

          <div>
            <h3 className='mb-2 text-lg font-medium'>基本計數器範例</h3>
            <div className='flex items-center gap-4'>
              <Button onClick={() => setCount((c) => Math.max(0, c - 1))} disabled={count === 0}>
                -
              </Button>
              <span className='text-xl'>{count}</span>
              <Button onClick={() => setCount((c) => c + 1)}>+</Button>
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
