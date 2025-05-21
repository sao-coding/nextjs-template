'use client'

import { use } from 'react'
import Link from 'next/link'

interface ProjectModalProps {
  params: Promise<{
    id: string
  }>
}

export default function ProjectModal({ params }: ProjectModalProps) {
  const resolvedParams = use(params)
  const { id } = resolvedParams

  const projectData = {
    '1': {
      name: '網站重新設計',
      status: '進行中',
      deadline: '2023-12-31',
      description: '對公司官網進行全面重新設計，提升使用者體驗並優化行動裝置上的表現。'
    },
    '2': {
      name: '行動應用開發',
      status: '規劃中',
      deadline: '2024-03-15',
      description: '開發公司產品的行動應用，提供 iOS 和 Android 版本，實現核心功能。'
    },
    '3': {
      name: '後端 API 整合',
      status: '已完成',
      deadline: '2023-09-30',
      description: '整合並重構現有 API，改善效能並增加新功能支援。'
    },
    '4': {
      name: '資料庫最佳化',
      status: '進行中',
      deadline: '2023-11-15',
      description: '優化資料庫結構和查詢效能，降低伺服器負載並提升回應速度。'
    },
    '5': {
      name: '使用者研究',
      status: '已完成',
      deadline: '2023-08-31',
      description: '進行全面使用者研究，收集用戶反饋並分析使用模式。'
    }
  }

  const project = projectData[id as keyof typeof projectData]

  if (!project) {
    return (
      <div className='bg-background/80 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm'>
        <div className='bg-background w-full max-w-md rounded-lg border p-6 shadow-lg'>
          <h2 className='mb-4 text-xl font-bold'>項目不存在</h2>
          <p>找不到 ID 為 {id} 的項目</p>
          <div className='mt-6 flex justify-end'>
            <Link
              href='/examples/intercepting'
              className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors'
            >
              返回列表
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-background/80 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm'>
      <div className='bg-background relative w-full max-w-xl rounded-lg border p-6 shadow-lg'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-bold'>{project.name}</h2>
          <Link
            href='/examples/intercepting'
            className='text-muted-foreground hover:text-foreground'
          >
            <span className='sr-only'>關閉</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 6 6 18'></path>
              <path d='m6 6 12 12'></path>
            </svg>
          </Link>
        </div>

        <div className='mb-4 grid grid-cols-2 gap-4'>
          <div className='rounded-lg border p-3'>
            <p className='text-muted-foreground text-sm font-medium'>狀態</p>
            <p className='mt-1'>{project.status}</p>
          </div>
          <div className='rounded-lg border p-3'>
            <p className='text-muted-foreground text-sm font-medium'>截止日期</p>
            <p className='mt-1'>{project.deadline}</p>
          </div>
        </div>

        <div className='mb-6'>
          <h3 className='text-muted-foreground mb-1 text-sm font-medium'>項目說明</h3>
          <p>{project.description}</p>
        </div>

        <div className='flex items-center justify-between'>
          <Link
            href={`/examples/intercepting/${id}`}
            className='text-primary text-sm hover:underline'
          >
            查看完整詳情
          </Link>

          <Link
            href='/examples/intercepting'
            className='hover:bg-muted rounded-md border px-4 py-2 transition-colors'
          >
            關閉
          </Link>
        </div>
      </div>
    </div>
  )
}
