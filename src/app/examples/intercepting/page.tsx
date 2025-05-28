'use client'

import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

const InterceptingRoutesPage = () => {
  const projects = [
    { id: '1', name: '網站重新設計', status: '進行中' },
    { id: '2', name: '行動應用開發', status: '規劃中' },
    { id: '3', name: '後端 API 整合', status: '已完成' },
    { id: '4', name: '資料庫最佳化', status: '進行中' },
    { id: '5', name: '使用者研究', status: '已完成' }
  ]

  return (
    <div className='space-y-8'>
      {/* 示範用麵包屑 - 點擊將觸發攔截路由 */}
      <div className='bg-muted/30 rounded-lg border p-6'>
        <h2 className='mb-4 text-xl font-semibold'>互動式麵包屑導航</h2>
        <p className='text-muted-foreground mb-4'>
          點擊下方麵包屑中的<strong>「首頁」</strong>或<strong>「範例」</strong>
          連結，將觸發攔截路由，在當前頁面上顯示模態框，而非直接導航。
        </p>

        <Breadcrumb className='mt-6'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>首頁</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/examples'>範例</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>攔截路由</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h1 className='mb-4 text-3xl font-bold'>攔截路由 (Intercepting Routes)</h1>
        <p className='text-muted-foreground mb-6 text-lg'>
          攔截路由允許您攔截特定的路由，並在當前頁面上下文中顯示它的內容。這對於創建模態框、導航預覽和頁面疊加層非常有用。
        </p>
      </div>

      {/* 項目列表 - 第二個示例 */}
      <div className='bg-muted/30 mb-6 rounded-lg border p-6'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>項目列表（第二個示例）</h2>
          <Link
            href='/examples/intercepting/new'
            className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2'
          >
            新增項目
          </Link>
        </div>
        <div className='overflow-hidden rounded-md border'>
          <table className='w-full'>
            <thead className='bg-muted/50'>
              <tr>
                <th className='px-4 py-3 text-left text-sm font-medium'>名稱</th>
                <th className='px-4 py-3 text-left text-sm font-medium'>狀態</th>
                <th className='px-4 py-3 text-left text-sm font-medium'>操作</th>
              </tr>
            </thead>
            <tbody className='divide-y'>
              {projects.map((project) => (
                <tr key={project.id} className='hover:bg-muted/30'>
                  <td className='px-4 py-3 text-sm font-medium'>{project.name}</td>
                  <td className='px-4 py-3 text-sm'>{project.status}</td>
                  <td className='px-4 py-3 text-sm'>
                    <Link
                      href={`/examples/intercepting/${project.id}`}
                      className='text-primary hover:underline'
                    >
                      查看
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className='text-muted-foreground mt-4 text-sm'>
          點擊「查看」會顯示模態框，而不是導航到新頁面，這是攔截路由的另一種應用方式。
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>麵包屑導航的優勢</h2>
          <ul className='list-disc space-y-2 pl-5'>
            <li>讓用戶了解當前在網站結構中的位置</li>
            <li>提供快速導航回上層頁面的方式</li>
            <li>結合攔截路由可以預覽頁面內容</li>
            <li>改善用戶體驗，減少完整頁面加載</li>
          </ul>
        </div>

        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>攔截路由實現方式</h2>
          <p className='mb-4'>攔截路由使用特殊的命名約定：</p>
          <ul className='space-y-2 pl-5'>
            <li>
              <code>(.) - 同層級攔截</code>
            </li>
            <li>
              <code>(..) - 上一層級攔截</code>
            </li>
            <li>
              <code>(..)(..) - 上兩層級攔截</code>
            </li>
            <li>
              <code>(...)具體路徑 - 從應用根目錄攔截</code>
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-muted/30 mt-6 rounded-lg border p-6'>
        <h2 className='mb-4 text-xl font-semibold'>攔截麵包屑的代碼結構</h2>
        <div className='bg-muted rounded-md p-4'>
          <pre className='overflow-auto text-sm'>
            <code>{`// 目錄結構
app/
├── examples/
│   ├── intercepting/
│   │   ├── page.tsx (當前頁面)
│   │   ├── (.)../ (攔截上層路徑 - examples)
│   │   │   └── page.tsx (模態框版本)
│   │   └── (.).../ (攔截根路徑 - 首頁)
│   │       └── page.tsx (模態框版本)
│   └── page.tsx (範例列表頁)
└── page.tsx (首頁)`}</code>
          </pre>
        </div>
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>使用場景</h2>
          <ul className='list-disc space-y-2 pl-5'>
            <li>網站導航預覽</li>
            <li>麵包屑路徑快速查看</li>
            <li>相關內容預覽</li>
            <li>多層次導航系統</li>
            <li>內容探索介面</li>
          </ul>
        </div>

        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>實作技巧</h2>
          <ul className='list-disc space-y-2 pl-5'>
            <li>使用 Suspense 處理加載狀態</li>
            <li>設計漸進式展示動畫</li>
            <li>保持模態框內容簡潔</li>
            <li>提供明確的關閉與查看完整內容選項</li>
            <li>確保模態框具有適當的焦點管理</li>
          </ul>
        </div>
      </div>

      <div className='rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/30'>
        <h3 className='mb-2 text-lg font-semibold'>學習資源</h3>
        <p>
          查看 Next.js 文檔了解有關攔截路由的更多信息：
          <a
            href='https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary ml-1 underline'
          >
            攔截路由文檔
          </a>
        </p>
      </div>
    </div>
  )
}

export default InterceptingRoutesPage
