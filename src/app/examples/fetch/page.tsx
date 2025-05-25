'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import FeaturesContent from './features-content'
// 引入拆分出去的組件
// react-query-vs-fetch-demo
import ReactQueryVsFetchDemo from './react-query-vs-fetch-demo'

export default function FetchComparisonPage() {
  return (
    <div className='container space-y-8 py-10'>
      <div>
        <h1 className='text-3xl font-bold'>React Query vs 一般 Fetch 比較</h1>
        <p className='text-muted-foreground mt-2'>
          這個範例展示了使用 React Query 與普通 fetch API 獲取資料的差異
        </p>
      </div>

      <Tabs defaultValue='comparison'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='comparison'>對比示範</TabsTrigger>
          <TabsTrigger value='features'>功能比較</TabsTrigger>
        </TabsList>

        <TabsContent value='comparison' className='mt-6'>
          <ReactQueryVsFetchDemo />
        </TabsContent>

        <TabsContent value='features' className='mt-6'>
          <FeaturesContent />
        </TabsContent>
      </Tabs>
    </div>
  )
}
