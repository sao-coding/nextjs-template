export default function ParallelRoutesPage() {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='mb-4 text-3xl font-bold'>平行路由 (Parallel Routes)</h1>
        <p className='text-muted-foreground mb-6 text-lg'>
          平行路由允許您在同一個頁面中同時呈現多個頁面內容。這對於需要獨立導航和狀態的複雜頁面佈局非常有用。
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>主要特點</h2>
          <ul className='list-disc space-y-2 pl-5'>
            <li>同時載入和呈現多個頁面或UI區塊</li>
            <li>每個路由都有自己的載入和錯誤處理機制</li>
            <li>每個路由可以獨立導航，而不影響其他內容</li>
            <li>支持條件渲染和默認UI狀態</li>
          </ul>
        </div>

        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>實現方式</h2>
          <p className='mb-4'>
            平行路由是通過命名為 <code>@folder</code> 的特殊資料夾實現的：
          </p>
          <div className='bg-muted rounded-md p-3 font-mono text-sm'>
            app/
            <br />
            ├── @dashboard/
            <br />
            │ └── page.tsx
            <br />
            ├── @analytics/
            <br />
            │ └── page.tsx
            <br />
            └── layout.tsx
          </div>
          <p className='mt-4'>
            <code>layout.tsx</code> 可以接收與資料夾名稱對應的 props，如 <code>dashboard</code> 和{' '}
            <code>analytics</code>。
          </p>
        </div>
      </div>

      <div className='bg-muted/30 mt-6 rounded-lg border p-6'>
        <h2 className='mb-4 text-xl font-semibold'>代碼示例</h2>
        <div className='bg-muted rounded-md p-4'>
          <pre className='overflow-auto text-sm'>
            <code>{`// app/layout.tsx
export default function Layout({ 
  dashboard,  // 映射到 app/@dashboard
  analytics   // 映射到 app/@analytics
}) {
  return (
    <div className="flex">
      <div className="w-1/2">
        {dashboard}
      </div>
      <div className="w-1/2">
        {analytics}
      </div>
    </div>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className='rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/30'>
        <h3 className='mb-2 text-lg font-semibold'>學習資源</h3>
        <p>
          查看 Next.js 文檔了解有關平行路由的更多信息：
          <a
            href='https://nextjs.org/docs/app/building-your-application/routing/parallel-routes'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary ml-1 underline'
          >
            平行路由文檔
          </a>
        </p>
      </div>
    </div>
  )
}
