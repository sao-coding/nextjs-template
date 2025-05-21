import Link from 'next/link'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const { id } = resolvedParams

  const projectData = {
    '1': {
      name: '網站重新設計',
      status: '進行中',
      deadline: '2023-12-31',
      description: '對公司官網進行全面重新設計，提升使用者體驗並優化行動裝置上的表現。',
      tasks: ['設計系統制定', '使用者流程優化', '內容重組', '前端實作', '測試與部署']
    },
    '2': {
      name: '行動應用開發',
      status: '規劃中',
      deadline: '2024-03-15',
      description: '開發公司產品的行動應用，提供 iOS 和 Android 版本，實現核心功能。',
      tasks: ['需求分析', 'UI/UX 設計', '功能開發', '整合測試', '上架準備']
    },
    '3': {
      name: '後端 API 整合',
      status: '已完成',
      deadline: '2023-09-30',
      description: '整合並重構現有 API，改善效能並增加新功能支援。',
      tasks: ['API 文檔', '重構舊版 API', '新功能開發', '效能測試', '上線部署']
    },
    '4': {
      name: '資料庫最佳化',
      status: '進行中',
      deadline: '2023-11-15',
      description: '優化資料庫結構和查詢效能，降低伺服器負載並提升回應速度。',
      tasks: ['效能評估', '索引優化', '查詢重寫', '資料結構調整', '監控系統導入']
    },
    '5': {
      name: '使用者研究',
      status: '已完成',
      deadline: '2023-08-31',
      description: '進行全面使用者研究，收集用戶反饋並分析使用模式。',
      tasks: ['問卷設計', '使用者訪談', '數據分析', '洞察報告', '產品建議']
    }
  }

  const project = projectData[id as keyof typeof projectData]

  if (!project) {
    return (
      <div className='container py-8'>
        <h1 className='mb-4 text-2xl font-bold'>項目不存在</h1>
        <p>找不到 ID 為 {id} 的項目</p>
        <Link
          href='/examples/intercepting'
          className='text-primary mt-4 inline-block hover:underline'
        >
          返回項目列表
        </Link>
      </div>
    )
  }

  return (
    <div className='container py-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>{project.name}</h1>
        <Link
          href='/examples/intercepting'
          className='bg-muted hover:bg-muted/80 rounded-md px-4 py-2 transition-colors'
        >
          返回項目列表
        </Link>
      </div>

      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
        <div className='rounded-lg border p-4'>
          <h2 className='mb-2 font-medium'>狀態</h2>
          <p>{project.status}</p>
        </div>
        <div className='rounded-lg border p-4'>
          <h2 className='mb-2 font-medium'>截止日期</h2>
          <p>{project.deadline}</p>
        </div>
        <div className='rounded-lg border p-4'>
          <h2 className='mb-2 font-medium'>任務數量</h2>
          <p>{project.tasks.length} 項</p>
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='mb-3 text-xl font-bold'>項目說明</h2>
        <p className='text-muted-foreground'>{project.description}</p>
      </div>

      <div>
        <h2 className='mb-3 text-xl font-bold'>任務清單</h2>
        <ul className='divide-y rounded-lg border'>
          {project.tasks.map((task, index) => (
            <li key={index} className='hover:bg-muted/50 px-4 py-3'>
              {task}
            </li>
          ))}
        </ul>
      </div>

      <div className='text-muted-foreground mt-8 text-sm'>
        <p>注意：這是完整的項目頁面。當你直接訪問該 URL 或從列表中點擊"查看"時，行為會不同：</p>
        <ul className='mt-2 list-disc pl-5'>
          <li>直接訪問：顯示完整頁面</li>
          <li>從列表點擊：攔截路由會在模態框中顯示</li>
        </ul>
      </div>
    </div>
  )
}
