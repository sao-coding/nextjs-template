import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function ComparePage() {
  return (
    <div className='container mx-auto space-y-8 p-6'>
      <div>
        <h1 className='mb-2 text-3xl font-bold'>平行路由 vs Suspense Boundaries</h1>
        <p className='text-muted-foreground'>
          對比 Next.js 的平行路由與 React 的 Suspense 錯誤邊界
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>平行路由 (Parallel Routes)</CardTitle>
            <CardDescription>Next.js 13+ 的平行路由功能</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc space-y-2 pl-5'>
              <li>允許在同一頁面上同時展示多個獨立頁面</li>
              <li>每個路由可以有自己的加載狀態和錯誤處理</li>
              <li>基於檔案系統來組織</li>
              <li>支持路由級的錯誤隔離</li>
              <li>支持伺服器端組件</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href='/examples/parallel-routes/error-demo' passHref>
              <Button variant='outline' className='w-full'>
                查看平行路由示例 <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suspense Boundaries</CardTitle>
            <CardDescription>React 內置的 Suspense 和錯誤邊界</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='list-disc space-y-2 pl-5'>
              <li>處理異步加載資料和組件的方式</li>
              <li>以元件為基礎的錯誤和載入狀態隔離</li>
              <li>可以在組件層級細粒度控制</li>
              <li>更靈活的組件結構</li>
              <li>可用於任何 React 應用</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href='/examples/suspense-boundaries' passHref>
              <Button variant='outline' className='w-full'>
                查看 Suspense 示例 <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Card className='mt-8'>
        <CardHeader>
          <CardTitle>詳細對比</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>特性</TableHead>
                <TableHead>平行路由</TableHead>
                <TableHead>Suspense Boundaries</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>錯誤隔離範圍</TableCell>
                <TableCell>路由層級</TableCell>
                <TableCell>組件層級</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>配置方式</TableCell>
                <TableCell>基於檔案系統 (@folder)</TableCell>
                <TableCell>使用 React 組件 (Suspense, ErrorBoundary)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>服務器端渲染支持</TableCell>
                <TableCell>完全支持</TableCell>
                <TableCell>部分支持 (需要特殊處理)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>適用場景</TableCell>
                <TableCell>多個獨立區域的複雜頁面</TableCell>
                <TableCell>細粒度組件加載控制</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>與 Next.js 集成</TableCell>
                <TableCell>原生支持</TableCell>
                <TableCell>需要額外配置</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <p className='text-muted-foreground text-sm'>
            兩種方法可以結合使用，以達到最佳的用戶體驗和開發體驗。平行路由適合頁面級別的隔離， 而
            Suspense 更適合細粒度的組件級控制。
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
