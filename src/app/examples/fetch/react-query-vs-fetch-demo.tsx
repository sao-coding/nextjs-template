'use client'

import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'

// 共用的介面定義
interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export default function FetchContent() {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <FetchExample />
      <ReactQueryExample />
    </div>
  )
}

// 一般 Fetch 示例
function FetchExample() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [refetchCount, setRefetchCount] = useState(0)

  // 使用標準 fetch API 獲取數據
  const fetchPosts = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      setPosts(data)
      setRefetchCount((prev) => prev + 1)
      toast.success('使用 Fetch API 成功獲取資料')
    } catch (err) {
      setError(err instanceof Error ? err.message : '發生未知錯誤')
      toast.error('獲取資料失敗', {
        description: err instanceof Error ? err.message : '發生未知錯誤'
      })
    } finally {
      setIsLoading(false)
    }
  }

  // 首次加載時獲取數據
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Card className='flex h-full flex-col'>
      <CardHeader>
        <CardTitle>使用一般 Fetch API</CardTitle>
        <CardDescription>使用傳統 fetch + useState + useEffect 的方法</CardDescription>
      </CardHeader>
      <CardContent className='flex-grow'>
        <div className='mb-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='text-sm font-medium'>狀態: </div>
            <div className='text-sm'>
              {isLoading ? (
                <span className='flex items-center gap-1 text-yellow-500'>
                  <Loader2 className='h-3 w-3 animate-spin' />
                  載入中...
                </span>
              ) : error ? (
                <span className='text-red-500'>錯誤</span>
              ) : (
                <span className='text-green-500'>完成</span>
              )}
            </div>
          </div>
          <div className='text-muted-foreground text-xs'>重新獲取次數: {refetchCount}</div>
        </div>

        {error ? (
          <div className='rounded-md bg-red-50 p-4 text-sm text-red-500'>錯誤: {error}</div>
        ) : isLoading && posts.length === 0 ? (
          <div className='flex justify-center py-8'>
            <Loader2 className='text-muted-foreground h-8 w-8 animate-spin' />
          </div>
        ) : (
          <div className='space-y-4'>
            {posts.map((post) => (
              <div key={post.id} className='rounded-md border p-3'>
                <h3 className='truncate text-sm font-medium'>{post.title}</h3>
                <p className='text-muted-foreground mt-1 line-clamp-2 text-xs'>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className='border-t pt-4'>
        <Button onClick={fetchPosts} disabled={isLoading} className='w-full'>
          {isLoading ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              獲取中...
            </>
          ) : (
            '手動重新獲取'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

// React Query 示例
function ReactQueryExample() {
  const [refetchCount, setRefetchCount] = useState(0)

  // 使用 React Query 獲取數據
  const {
    data: posts,
    isLoading,
    isFetching,
    error,
    refetch,
    isError,
    status,
    fetchStatus
  } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      // 人為添加短暫延遲，以便更好地展示加載狀態
      await new Promise((resolve) => setTimeout(resolve, 500))

      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      return response.json()
    },
    staleTime: 10000, // 10秒後數據變成過時 (stale)
    refetchOnWindowFocus: true // 窗口獲得焦點時重新獲取
  })

  // 監控 refetch 操作
  useEffect(() => {
    if (isFetching) {
      setRefetchCount((prev) => prev + 1)
    }
  }, [isFetching])

  // 手動觸發重新獲取並顯示通知
  const handleRefetch = () => {
    toast.info('正在重新獲取資料', {
      description: 'React Query 將自動管理資料的加載狀態'
    })
    refetch()
  }

  return (
    <Card className='flex h-full flex-col'>
      <CardHeader>
        <CardTitle>使用 React Query</CardTitle>
        <CardDescription>使用 TanStack Query 的聲明式資料獲取</CardDescription>
      </CardHeader>
      <CardContent className='flex-grow'>
        <div className='mb-4 space-y-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='text-sm font-medium'>狀態: </div>
              <div className='text-sm'>
                {isLoading ? (
                  <span className='flex items-center gap-1 text-yellow-500'>
                    <Loader2 className='h-3 w-3 animate-spin' />
                    初始載入...
                  </span>
                ) : isFetching ? (
                  <span className='flex items-center gap-1 text-blue-500'>
                    <Loader2 className='h-3 w-3 animate-spin' />
                    背景更新中...
                  </span>
                ) : isError ? (
                  <span className='text-red-500'>錯誤</span>
                ) : (
                  <span className='text-green-500'>成功</span>
                )}
              </div>
            </div>
            <div className='text-muted-foreground text-xs'>重新獲取次數: {refetchCount}</div>
          </div>

          <div className='grid grid-cols-2 gap-2 text-xs'>
            <div className='bg-muted rounded px-2 py-1'>
              <span className='font-medium'>Query 狀態:</span> {status}
            </div>
            <div className='bg-muted rounded px-2 py-1'>
              <span className='font-medium'>Fetch 狀態:</span> {fetchStatus}
            </div>
          </div>
        </div>

        {isError ? (
          <div className='rounded-md bg-red-50 p-4 text-sm text-red-500'>
            錯誤: {error instanceof Error ? error.message : '未知錯誤'}
          </div>
        ) : isLoading && !posts ? (
          <div className='flex justify-center py-8'>
            <Loader2 className='text-muted-foreground h-8 w-8 animate-spin' />
          </div>
        ) : (
          <div className='relative space-y-4'>
            {isFetching && !isLoading && (
              <div className='absolute inset-0 flex items-center justify-center rounded-md bg-white/50'>
                <Loader2 className='text-primary h-6 w-6 animate-spin' />
              </div>
            )}
            {posts?.map((post) => (
              <div key={post.id} className='rounded-md border p-3'>
                <h3 className='truncate text-sm font-medium'>{post.title}</h3>
                <p className='text-muted-foreground mt-1 line-clamp-2 text-xs'>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className='border-t pt-4'>
        <Button onClick={handleRefetch} disabled={isLoading && !isFetching} className='w-full'>
          {isFetching ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              更新中...
            </>
          ) : (
            '手動重新獲取'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
