interface ParallelRoutesLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  content: React.ReactNode
}

export default function ParallelRoutesLayout({
  children,
  sidebar,
  content
}: ParallelRoutesLayoutProps) {
  return (
    <div className='container py-8'>
      <div className='mb-8'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>專案管理系統</h1>
            <p className='text-muted-foreground'>使用平行路由實現的多面板界面</p>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200'>
              線上演示
            </div>
            <div className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'>
              平行路由示例
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
        <div className='bg-card rounded-lg border shadow-sm md:col-span-3'>
          <div className='border-b p-4'>
            <h2 className='font-semibold'>專案導航</h2>
          </div>
          <div className='p-3'>{sidebar}</div>
        </div>

        <div className='bg-card rounded-lg border shadow-sm md:col-span-9'>
          <div className='p-6'>{content}</div>
        </div>
      </div>

      <div className='mt-12 border-t pt-6'>{children}</div>
    </div>
  )
}
