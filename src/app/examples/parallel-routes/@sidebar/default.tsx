import Link from 'next/link'

export default function CatchAllDefault() {
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
          <Link
            href='/examples/parallel-routes/error-demo'
            className='hover:bg-muted block rounded-md px-2 py-1 text-sm transition-colors'
          >
            錯誤示範
          </Link>
        </div>
      </div>

      <div className='rounded-lg border p-3'>
        <h3 className='mb-2 text-sm font-medium'>平行路由提示</h3>
        <p className='text-muted-foreground text-xs'>
          平行路由的錯誤邊界互相隔離。在內容區塊發生錯誤時，側邊欄不會受到影響。
        </p>
      </div>
    </div>
  )
}
