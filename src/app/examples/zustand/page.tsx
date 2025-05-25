import { Card, CardContent, CardHeader } from '@/components/ui/card'

import CounterControl from './control'
import Counter from './count'

export const metadata = {
  title: 'Zustand 狀態管理範例',
  description: '使用 Zustand 進行跨組件的狀態管理'
}

export default function ZustandExample() {
  return (
    <div className='container mx-auto py-8'>
      <h1 className='mb-6 text-3xl font-bold'>Zustand 狀態管理範例</h1>

      <div className='space-y-8'>
        <div className='space-y-4'>
          <h2 className='text-xl font-semibold'>元件狀態共享示例</h2>
          <p className='text-gray-600'>
            這個範例展示了如何使用 Zustand 管理全局狀態。下方有兩個不同的元件：
            左側元件只負責顯示狀態，右側元件只負責修改狀態。當您使用右側元件修改狀態時，
            左側元件會立即更新，展示了元件間如何無需直接通信就能共享狀態。
          </p>

          <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Counter />
            <CounterControl />
          </div>
        </div>

        <Card>
          <CardHeader>
            <h2 className='mb-2 text-xl font-semibold'>Zustand 的主要特點：</h2>
          </CardHeader>
          <CardContent>
            <ul className='list-disc space-y-1 pl-5'>
              <li>輕量級，僅 1KB 大小</li>
              <li>無需樣板代碼，使用簡單</li>
              <li>基於 hooks，適合 React 函數組件</li>
              <li>可組合且可擴展</li>
              <li>TypeScript 友好</li>
              <li>元件間共享狀態，無需 props 傳遞或 Context 包裹</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
