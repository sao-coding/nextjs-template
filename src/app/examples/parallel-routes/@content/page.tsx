'use client'

import Link from 'next/link'

// 模擬專案資料 - 精簡版
type ProjectStatus = keyof typeof statusText

const projects: {
  id: number
  name: string
  status: ProjectStatus
  tasks: number
  completed: number
}[] = [
  { id: 1, name: '網站重設計', status: 'progress', tasks: 12, completed: 5 },
  { id: 2, name: '行動應用開發', status: 'review', tasks: 24, completed: 18 },
  { id: 3, name: '品牌識別更新', status: 'planning', tasks: 8, completed: 0 }
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

// 最近活動數據
const recentActivities = [
  {
    id: 1,
    user: '王大偉',
    action: '完成了任務',
    target: '前端架構設置',
    project: '行動應用開發',
    time: '3 小時前'
  },
  {
    id: 2,
    user: '陳小雨',
    action: '更新了',
    target: 'API 文檔',
    project: '行動應用開發',
    time: '昨天'
  },
  {
    id: 3,
    user: '李小花',
    action: '上傳了新的',
    target: '設計稿',
    project: '網站重設計',
    time: '2 天前'
  },
  {
    id: 4,
    user: '張小明',
    action: '創建了專案',
    target: '品牌識別更新',
    project: '品牌識別更新',
    time: '1 週前'
  }
]

const ContentPage = () => {
  return (
    <div className='space-y-6'>
      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div>
          <h2 className='text-2xl font-bold'>儀表板</h2>
          <p className='text-muted-foreground'>歡迎回來，這是您的專案概覽</p>
        </div>
        <Link
          href='/examples/parallel-routes/project'
          className='bg-primary text-primary-foreground rounded-md px-4 py-2 text-center text-sm font-medium'
        >
          查看所有專案
        </Link>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='rounded-lg border p-4'>
          <h3 className='mb-2 text-sm font-medium'>活躍專案</h3>
          <div className='text-3xl font-bold'>5</div>
          <div className='text-muted-foreground mt-1 text-xs'>較上月增加 2 個</div>
        </div>
        <div className='rounded-lg border p-4'>
          <h3 className='mb-2 text-sm font-medium'>待處理任務</h3>
          <div className='text-3xl font-bold'>27</div>
          <div className='text-muted-foreground mt-1 text-xs'>7 個高優先級</div>
        </div>
        <div className='rounded-lg border p-4'>
          <h3 className='mb-2 text-sm font-medium'>已完成里程碑</h3>
          <div className='text-3xl font-bold'>8</div>
          <div className='text-muted-foreground mt-1 text-xs'>本月完成 3 個</div>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <div className='rounded-lg border p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='font-medium'>最近活動</h3>
            <button className='text-primary text-sm font-medium'>查看全部</button>
          </div>
          <div className='space-y-4'>
            {recentActivities.map((activity) => (
              <div key={activity.id} className='flex items-start gap-3 border-b pb-3 last:border-0'>
                <div className='bg-muted flex h-8 w-8 items-center justify-center rounded-full'>
                  {activity.user[0]}
                </div>
                <div>
                  <p className='text-sm'>
                    <span className='font-medium'>{activity.user}</span> {activity.action}{' '}
                    <span className='font-medium'>{activity.target}</span>
                    {activity.project && (
                      <span className='text-muted-foreground'> 在 {activity.project}</span>
                    )}
                  </p>
                  <p className='text-muted-foreground text-xs'>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-lg border p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='font-medium'>進行中的專案</h3>
            <Link
              href='/examples/parallel-routes/project'
              className='text-primary text-sm font-medium'
            >
              查看全部
            </Link>
          </div>
          <div className='space-y-3'>
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/examples/parallel-routes/project/${project.id}`}
                className='hover:bg-muted/50 flex flex-col rounded-md border p-3 transition-colors'
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPage
