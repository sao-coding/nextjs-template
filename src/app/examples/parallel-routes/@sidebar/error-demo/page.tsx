import Link from 'next/link'

export default function ErrorDemoSidebar() {
  return (
    <div className='space-y-5'>
      <div className='rounded-lg border p-3'>
        <h3 className='mb-2 text-sm font-medium'>導航</h3>
        <div className='space-y-1'>
          <Link
            href='/examples/parallel-routes'
            className='hover:bg-muted block rounded-md px-2 py-1 text-sm transition-colors'
          >
            返回儀表板
          </Link>
          <div className='bg-primary/10 text-primary block rounded-md px-2 py-1 text-sm font-medium'>
            錯誤示範
          </div>
        </div>
      </div>

      <div className='rounded-lg border p-3'>
        <h3 className='mb-2 text-sm font-medium'>錯誤處理信息</h3>
        <p className='text-muted-foreground text-xs'>
          即使內容區域顯示錯誤，這個側邊欄仍然可以正常工作。這展示了平行路由的錯誤隔離性。
        </p>
      </div>
    </div>
  )
}
