// 這是一個動態路由頁面
// [id] 在 URL 中會被實際的值替換
const DynamicRoutePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params
  const { id } = resolvedParams

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='mb-4 text-3xl font-bold'>動態路由範例</h1>
        <p className='text-muted-foreground mb-6 text-lg'>
          這個頁面展示了 Next.js 中動態路由的用法，目前顯示的 ID 參數為:{' '}
          <span className='bg-muted rounded px-2 py-1 font-mono'>{id}</span>
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>動態路由說明</h2>
          <p className='mb-4'>
            動態路由使用特殊的檔案命名方式 <code>[param]</code> 來捕獲 URL 中的參數。
            這對於建立產品頁面、使用者設定檔或任何需要根據 ID 顯示不同內容的頁面非常有用。
          </p>
          <p>
            在這個範例中，URL 路徑是 <code>/examples/dynamic/{id}</code>， 您可以嘗試更改 URL 中的
            ID 來查看不同的結果。
          </p>
        </div>

        <div className='bg-muted/30 rounded-lg border p-6'>
          <h2 className='mb-4 text-xl font-semibold'>如何獲取參數</h2>
          <div className='bg-muted rounded-md p-4'>
            <pre className='overflow-auto text-sm'>
              <code>{`// app/examples/dynamic/[id]/page.tsx
export default function Page({ params }) {
  // params 包含路由參數
  return <div>動態 ID: {params.id}</div>
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className='bg-muted/30 mt-6 rounded-lg border p-6'>
        <h2 className='mb-4 text-xl font-semibold'>更多動態路由特性</h2>
        <ul className='list-disc space-y-2 pl-5'>
          <li>
            可以在同一個路徑中使用多個動態部分: <code>/shop/[category]/[product]</code>
          </li>
          <li>
            支持捕獲所有後續路徑段: <code>/docs/[...slug]</code>
          </li>
          <li>
            可選的捕獲參數: <code>/blog/[[...slug]]</code>
          </li>
          <li>
            可以在 <code>generateStaticParams</code> 函數中預先產生動態路由
          </li>
        </ul>
      </div>

      <div className='rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/30'>
        <h3 className='mb-2 text-lg font-semibold'>了解更多</h3>
        <p>
          查看 Next.js 文檔了解有關動態路由的更多信息：
          <a
            href='https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary ml-1 underline'
          >
            動態路由文檔
          </a>
        </p>
      </div>
    </div>
  )
}

export default DynamicRoutePage
