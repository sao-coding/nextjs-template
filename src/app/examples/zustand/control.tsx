'use client'

import { Button } from '@/components/ui/button'
import { useCountStore } from '@/store/conut'

export default function CounterControl() {
  const { count, setCount } = useCountStore()

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className='flex flex-col items-center gap-4 rounded-lg border p-4'>
      <h2 className='text-2xl font-bold'>計數器控制元件</h2>
      <p className='text-sm text-gray-500'>此元件負責修改狀態</p>
      <div className='flex gap-2'>
        <Button onClick={decrement}>減少</Button>
        <Button onClick={reset}>重置</Button>
        <Button onClick={increment}>增加</Button>
      </div>
    </div>
  )
}
