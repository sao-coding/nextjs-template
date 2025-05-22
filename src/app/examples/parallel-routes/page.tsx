export default function ParallelRoutesPage() {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='mb-4 text-3xl font-bold'>平行路由示範</h1>
        <p className='text-muted-foreground mb-6 text-lg'>
          平行路由允許您在同一個頁面中同時呈現多個頁面內容，每個區域可以獨立導航和處理錯誤。
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
          <h2 className='mb-4 text-xl font-semibold'>錯誤邊界示範</h2>
          <p className='mb-4'>在平行路由中，每個槽都有自己的錯誤邊界，彼此互不影響：</p>
          <div className='text-center'>
            <a
              href='/examples/parallel-routes/error-demo'
              className='bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors'
            >
              前往錯誤示範頁面
            </a>
          </div>
        </div>
      </div>

      <div className='bg-muted/30 mt-6 rounded-lg border p-6'>
        <h2 className='mb-4 text-xl font-semibold'>檔案結構</h2>
        <p className='mb-4'>
          平行路由是通過命名為 <code>@folder</code> 的特殊資料夾實現的：
        </p>
        <div className='bg-muted rounded-md p-3 font-mono text-sm'>
          ├── error-demo/ <span className='text-muted-foreground'>// 錯誤示範入口頁面</span>
          <br />
          ├── @sidebar/ <span className='text-muted-foreground'>// 側邊欄槽</span>
          <br />│ ├── error-demo/page.tsx{' '}
          <span className='text-muted-foreground'>// 錯誤示範的側邊欄</span>
          <br />│ └── [...catchAll]/default.tsx{' '}
          <span className='text-muted-foreground'>// 默認側邊欄</span>
          <br />
          ├── @content/ <span className='text-muted-foreground'>// 內容區域槽</span>
          <br />
          │ ├── error-demo/
          <br />│ │ ├── page.tsx <span className='text-muted-foreground'>// 錯誤觸發頁面</span>
          <br />│ │ └── error.tsx <span className='text-muted-foreground'>// 錯誤處理組件</span>
          <br />│ └── [...catchAll]/default.tsx
        </div>
      </div>

      <div className='rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/30'>
        <h3 className='mb-2 text-lg font-semibold'>嘗試錯誤示範</h3>
        <p>
          點擊「觸發直接錯誤」按鈕，觀察錯誤邊界如何捕獲錯誤並僅影響內容區域，而側邊欄保持正常：
          <a href='/examples/parallel-routes/error-demo' className='text-primary ml-1 underline'>
            前往錯誤示範頁面
          </a>
        </p>
      </div>
    </div>
  )
}
