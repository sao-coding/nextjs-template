'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

// 專案狀態型別
type ProjectStatus = 'planning' | 'progress' | 'review' | 'completed'

// 模擬專案數據
const projects: {
  id: number
  name: string
  status: ProjectStatus
  tasks: number
  completed: number
}[] = [
  { id: 1, name: '網站重設計', status: 'progress', tasks: 12, completed: 5 },
  { id: 2, name: '行動應用開發', status: 'review', tasks: 24, completed: 18 },
  { id: 3, name: '品牌識別更新', status: 'planning', tasks: 8, completed: 0 },
  { id: 4, name: '市場推廣活動', status: 'completed', tasks: 15, completed: 15 },
  { id: 5, name: '產品發佈計劃', status: 'progress', tasks: 18, completed: 7 }
]

// 狀態標籤顏色映射
const statusColors = {
  planning: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
  progress: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200',
  review: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
}

// 狀態文字映射
const statusText = {
  planning: '規劃中',
  progress: '進行中',
  review: '審核中',
  completed: '已完成'
}

const SidebarPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const pathname = usePathname()
  const router = useRouter()

  // 過濾專案
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.status === activeFilter)

  // 計算各狀態數量
  const counts: Record<'all' | ProjectStatus, number> = projects.reduce(
    (acc, project) => {
      acc[project.status] = (acc[project.status] || 0) + 1
      return acc
    },
    { all: projects.length, planning: 0, progress: 0, review: 0, completed: 0 }
  )

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-sm font-medium'>專案列表</h3>
        <Link
          href='/examples/parallel-routes/project'
          className='text-primary text-xs font-medium hover:underline'
        >
          查看全部
        </Link>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>篩選器</h3>
        <div className='flex flex-wrap gap-2'>
          {['all', 'planning', 'progress', 'review', 'completed'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md px-2 py-1 text-xs capitalize transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 hover:bg-muted'
              }`}
            >
              {filter === 'all' ? '全部' : statusText[filter as keyof typeof statusText]}
              {counts[filter as 'all' | ProjectStatus] && (
                <span className='ml-1'>({counts[filter as 'all' | ProjectStatus]})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='pt-2'>
        <div className='space-y-2'>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/examples/parallel-routes/project/${project.id}`}
                className='hover:bg-muted/50 block w-full rounded-md border p-3 text-left transition-colors'
              >
                <div className='flex items-start justify-between'>
                  <h4 className='font-medium'>{project.name}</h4>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${statusColors[project.status]}`}
                  >
                    {statusText[project.status]}
                  </span>
                </div>
                <div className='text-muted-foreground mt-2 text-xs'>
                  完成度: {project.completed}/{project.tasks} 項任務
                </div>
                <div className='bg-muted mt-2 h-1.5 w-full overflow-hidden rounded-full'>
                  <div
                    className='bg-primary h-full rounded-full'
                    style={{
                      width: `${Math.min((project.completed / project.tasks) * 100, 100)}%`
                    }}
                  ></div>
                </div>
              </Link>
            ))
          ) : (
            <div className='text-muted-foreground py-8 text-center text-sm'>
              找不到符合條件的專案
            </div>
          )}
        </div>
      </div>

      <div className='mt-4 border-t pt-3'>
        <button className='text-muted-foreground hover:text-foreground w-full rounded-md border border-dashed p-2 text-sm transition-colors'>
          + 新增專案
        </button>
      </div>
    </div>
  )
}

export default SidebarPage
