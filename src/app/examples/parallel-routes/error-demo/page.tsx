import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '錯誤處理示範 - 平行路由',
  description: '展示平行路由中的錯誤邊界和錯誤隔離功能'
}

export default function ErrorDemoRouteWrapper() {
  // 實際內容由平行路由槽提供
  return null
}
