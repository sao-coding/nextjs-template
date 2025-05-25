'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function FeaturesContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>React Query 與一般 Fetch 的關鍵差異</CardTitle>
        <CardDescription>了解為什麼 React Query 能提升應用程式的資料獲取體驗</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          <FeatureComparison
            feature='狀態管理'
            reactQuery='自動管理 pending、error、success 等狀態，不需手動設置'
            regularFetch='需要手動維護 loading、error、data 狀態'
          />
          <FeatureComparison
            feature='緩存機制'
            reactQuery='內建智能緩存系統，避免重複請求，可設置緩存時間'
            regularFetch='無內建緩存，每次都會發送新請求'
          />
          <FeatureComparison
            feature='資料同步'
            reactQuery='支援窗口聚焦時自動重新獲取資料，保持資料新鮮'
            regularFetch='需手動實現資料同步機制'
          />
          <FeatureComparison
            feature='錯誤處理'
            reactQuery='內建錯誤重試、錯誤狀態管理'
            regularFetch='需手動實現錯誤處理與重試邏輯'
          />
          <FeatureComparison
            feature='樂觀更新'
            reactQuery='支援樂觀更新與回滾功能'
            regularFetch='需手動實現樂觀更新邏輯'
          />
          <FeatureComparison
            feature='分頁/無限加載'
            reactQuery='內建分頁與無限滾動功能'
            regularFetch='需自行實現分頁邏輯'
          />
        </div>
      </CardContent>
    </Card>
  )
}

// 功能比較組件
function FeatureComparison({
  feature,
  reactQuery,
  regularFetch
}: {
  feature: string
  reactQuery: string
  regularFetch: string
}) {
  return (
    <div className='grid grid-cols-12 gap-4 rounded-md border p-3'>
      <div className='col-span-3 font-medium'>{feature}</div>
      <div className='col-span-4 text-sm'>
        <div className='text-primary mb-1 font-medium'>React Query</div>
        <div>{reactQuery}</div>
      </div>
      <div className='col-span-5 text-sm'>
        <div className='text-muted-foreground mb-1 font-medium'>一般 Fetch</div>
        <div>{regularFetch}</div>
      </div>
    </div>
  )
}
