import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CatchAllDefault() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>平行路由示範</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground mb-4'>平行路由允許在同一頁面同時呈現多個內容區域</p>
          <Link
            href='/examples/parallel-routes/error-demo'
            className='bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors'
          >
            前往錯誤示範頁面
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
