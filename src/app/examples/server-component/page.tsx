import { Metadata } from 'next'

// 自定義頁面元數據
export const metadata: Metadata = {
  title: '伺服器元件範例 | Next.js 課程',
  description: '展示 React Server Components 的基本使用方式'
}

// 這是一個伺服器元件 (默認)
// 無需添加 'use client' 指令
export default async function ServerComponentPage() {
  // 模擬從伺服器獲取數據
  const data = await getData()

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='mb-4 text-3xl font-bold'>伺服器元件</h1>
        <p className='text-muted-foreground mb-6 text-lg'>
          Next.js 中的伺服器元件可以在伺服器上渲染，減少客戶端 JavaScript
          體積並允許直接訪問伺服器資源。
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>伺服器元件特點</h2>
          <ul className='list-disc space-y-2 pl-5'>
            <li>直接從數據庫或檔案系統獲取數據</li>
            <li>將敏感信息保留在伺服器端</li>
            <li>減少客戶端 JavaScript 體積</li>
            <li>提高首次載入性能</li>
            <li>在伺服器上進行複雜運算</li>
          </ul>
        </div>

        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>從伺服器獲取的數據</h2>
          <div className='space-y-4'>
            {data.map((item) => (
              <div key={item.id} className='bg-background rounded-md p-3 shadow-sm'>
                <h3 className='font-medium'>{item.title}</h3>
                <p className='text-muted-foreground text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-muted/30 mt-6 rounded-lg border p-6'>
        <h2 className='mb-4 text-xl font-semibold'>代碼示例</h2>
        <div className='bg-muted rounded-md p-4'>
          <pre className='overflow-auto text-sm'>
            <code>{`// app/examples/server-component/page.tsx
// 伺服器元件是默認的（不需要 'use client' 指令）
export default async function Page() {
  // 直接從數據庫獲取數據
  const data = await db.query('SELECT * FROM items')
  
  // 在伺服器上處理數據
  const processedData = processDataOnServer(data)
  
  return (
    <div>
      {processedData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className='rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/30'>
        <h3 className='mb-2 text-lg font-semibold'>學習資源</h3>
        <p>
          查看 Next.js 文檔了解有關伺服器元件的更多信息：
          <a
            href='https://nextjs.org/docs/app/building-your-application/rendering/server-components'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary ml-1 underline'
          >
            伺服器元件文檔
          </a>
        </p>
      </div>
    </div>
  )
}

// 模擬從伺服器獲取數據的函數
async function getData() {
  // 在實際應用中，這可能是對數據庫或 API 的調用
  await new Promise((resolve) => setTimeout(resolve, 500)) // 模擬延遲

  return [
    {
      id: 1,
      title: '用戶認證服務',
      description: '安全處理用戶登入和身份驗證的伺服器端實現'
    },
    {
      id: 2,
      title: '數據分析報告',
      description: '在伺服器端生成的複雜報表和數據分析結果'
    },
    {
      id: 3,
      title: '圖像處理結果',
      description: '伺服器端處理的圖像優化和轉換結果'
    },
    {
      id: 4,
      title: '個人化內容',
      description: '基於用戶偏好和歷史數據生成的個人化內容推薦'
    }
  ]
}
