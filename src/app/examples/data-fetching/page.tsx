import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Post } from '@/types'

// 獲取資料的函數
async function fetchPosts() {
  // 使用 Next.js 增強的 fetch (自動緩存)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4', {
    // next: { revalidate: 60 } // 可選：設置重新驗證時間
  })

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json()
}

// 這是一個伺服器元件，資料獲取發生在伺服器端
export default async function DataFetchingPage() {
  // 在伺服器元件中獲取資料
  const posts: Post[] = await fetchPosts()

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='mb-2 text-3xl font-bold'>資料獲取</h1>
        <p className='text-muted-foreground'>
          展示如何在 Server Components 中獲取資料，伺服器端直接渲染結果
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>伺服器端資料獲取</CardTitle>
          <CardDescription>使用 fetch API 進行資料獲取</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <h3 className='font-semibold'>優點：</h3>
            <ul className='list-disc space-y-1 pl-5'>
              <li>資料在伺服器端獲取，減少客戶端請求</li>
              <li>避免客戶端請求瀑布流問題</li>
              <li>自動緩存和去重重複請求</li>
              <li>可以在生成靜態內容時獲取資料</li>
              <li>確保敏感資訊不暴露給客戶端</li>
            </ul>
          </div>

          <div className='mt-4 space-y-3'>
            <h3 className='font-semibold'>獲取的資料：</h3>
            <div className='grid gap-4 sm:grid-cols-2'>
              {posts.map((post) => (
                <Card key={post.id} className='overflow-hidden'>
                  <div className='p-4'>
                    <h4 className='truncate font-medium'>{post.title}</h4>
                    <p className='text-muted-foreground mt-2 line-clamp-3 text-sm'>{post.body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
