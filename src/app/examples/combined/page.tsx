'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function CombinedExamplePage() {
  const [activeView, setActiveView] = useState<'list' | 'grid'>('list')

  const products = [
    { id: 'p1', name: '無線耳機', price: 3200, category: '電子產品', stock: 45 },
    { id: 'p2', name: '智慧手錶', price: 5500, category: '電子產品', stock: 32 },
    { id: 'p3', name: '藍牙喇叭', price: 2800, category: '電子產品', stock: 18 },
    { id: 'p4', name: '筆記型電腦', price: 32000, category: '電子產品', stock: 12 },
    { id: 'p5', name: '智慧型手機', price: 24500, category: '電子產品', stock: 27 },
    { id: 'p6', name: '桌上型螢幕', price: 8800, category: '電子產品', stock: 15 }
  ]

  return (
    <div className='container py-8'>
      <h1 className='mb-6 text-3xl font-bold'>平行路由 + 攔截路由組合範例</h1>
      <p className='text-muted-foreground mb-8'>
        這個範例結合了平行路由（用於 modal 插槽）和攔截路由（用於在模態框內顯示產品詳情）。
        點擊任何產品，會在模態框中顯示詳情，而不離開此頁面。
      </p>

      <div className='mb-6 flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => setActiveView('list')}
            className={`rounded-md p-2 ${
              activeView === 'list'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            <span className='sr-only'>列表視圖</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='8' y1='6' x2='21' y2='6'></line>
              <line x1='8' y1='12' x2='21' y2='12'></line>
              <line x1='8' y1='18' x2='21' y2='18'></line>
              <line x1='3' y1='6' x2='3.01' y2='6'></line>
              <line x1='3' y1='12' x2='3.01' y2='12'></line>
              <line x1='3' y1='18' x2='3.01' y2='18'></line>
            </svg>
          </button>
          <button
            onClick={() => setActiveView('grid')}
            className={`rounded-md p-2 ${
              activeView === 'grid'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            <span className='sr-only'>網格視圖</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect x='3' y='3' width='7' height='7'></rect>
              <rect x='14' y='3' width='7' height='7'></rect>
              <rect x='14' y='14' width='7' height='7'></rect>
              <rect x='3' y='14' width='7' height='7'></rect>
            </svg>
          </button>
        </div>

        <span className='text-muted-foreground text-sm'>顯示 {products.length} 件產品</span>
      </div>

      {activeView === 'list' ? (
        <div className='overflow-hidden rounded-lg border'>
          <table className='w-full'>
            <thead className='bg-muted/50'>
              <tr>
                <th className='px-4 py-3 text-left text-sm font-medium'>產品名稱</th>
                <th className='px-4 py-3 text-left text-sm font-medium'>分類</th>
                <th className='px-4 py-3 text-left text-sm font-medium'>價格</th>
                <th className='px-4 py-3 text-left text-sm font-medium'>庫存</th>
                <th className='px-4 py-3 text-left text-sm font-medium'>操作</th>
              </tr>
            </thead>
            <tbody className='divide-y'>
              {products.map((product) => (
                <motion.tr
                  key={product.id}
                  className='hover:bg-muted/30'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <td className='px-4 py-3 text-sm font-medium'>{product.name}</td>
                  <td className='px-4 py-3 text-sm'>{product.category}</td>
                  <td className='px-4 py-3 text-sm'>${product.price.toLocaleString()}</td>
                  <td className='px-4 py-3 text-sm'>{product.stock}</td>
                  <td className='px-4 py-3 text-sm'>
                    <Link
                      href={`/examples/combined/${product.id}`}
                      className='text-primary hover:underline'
                    >
                      查看
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {products.map((product) => (
            <Link key={product.id} href={`/examples/combined/${product.id}`}>
              <motion.div
                className='hover:bg-background2 overflow-hidden rounded-lg border transition-shadow hover:shadow-md'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className='bg-muted/30 flex h-40 items-center justify-center p-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='48'
                    height='48'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-muted-foreground'
                  >
                    <rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>
                    <line x1='8' y1='21' x2='16' y2='21'></line>
                    <line x1='12' y1='17' x2='12' y2='21'></line>
                  </svg>
                </div>

                <div className='p-4'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <h3 className='mb-1 line-clamp-1 font-medium'>{product.name}</h3>
                      </TooltipTrigger>
                      <TooltipContent>{product.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className='text-muted-foreground text-sm'>{product.category}</p>
                  <div className='mt-4 flex items-center justify-between'>
                    <span className='font-bold'>${product.price.toLocaleString()}</span>
                    <span className='text-primary text-sm'>查看詳情</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}

      <div className='bg-muted/50 mt-8 rounded-lg p-6'>
        <h2 className='mb-3 text-lg font-semibold'>平行路由 + 攔截路由</h2>
        <p className='mb-3'>此範例使用以下技術組合：</p>
        <ul className='list-disc space-y-2 pl-5'>
          <li>
            <strong>平行路由：</strong> 使用 <code>@modal</code>{' '}
            插槽定義一個始終存在但預設為空的路由
          </li>
          <li>
            <strong>攔截路由：</strong> 使用 <code>@modal/(.)[id]/page.tsx</code> 來攔截產品詳情頁面
          </li>
          <li>兩者組合建立了更豐富的 UI 模式，既能顯示模態框，同時保持應用程式其餘部分的狀態</li>
        </ul>
      </div>
    </div>
  )
}
