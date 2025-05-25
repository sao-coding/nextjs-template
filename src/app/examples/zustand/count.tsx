'use client'

import { useCountStore } from '@/store/conut'

export default function Counter() {
  const { count } = useCountStore()

  return (
    <div className='flex flex-col items-center gap-4 rounded-lg border p-4'>
      <h2 className='text-2xl font-bold'>計數器顯示元件</h2>
      <p className='text-xl'>目前計數值: {count}</p>
      <p className='text-sm text-gray-500'>此元件僅負責顯示狀態，不修改狀態</p>
    </div>
  )
}
