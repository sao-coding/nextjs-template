import {
  BookOpen,
  Boxes,
  Database,
  FileText,
  GalleryVertical,
  MousePointerClick,
  PanelLeft,
  Route,
  RouteOff,
  Server,
  Share2,
  Upload
} from 'lucide-react'

import ExampleCard from './card'

export interface Example {
  title: string
  href: string
  description: string
  icon: React.ReactNode
}

const ExamplesPage = () => {
  const examples = [
    {
      title: 'React Hooks',
      href: '/examples/react-hooks',
      description: '展示 React 三個最常用的 hooks：useState、useEffect 和 useRef 的使用方法。',
      icon: <BookOpen className='h-6 w-6' />
    },
    {
      title: '客戶端元件',
      href: '/examples/client-component',
      description: '展示如何在 Next.js 中使用客戶端元件處理前端互動和狀態。',
      icon: <MousePointerClick className='h-6 w-6' />
    },
    {
      title: '伺服器元件',
      href: '/examples/server-component',
      description: '展示 Next.js 中伺服器元件的基本使用方式和特性。',
      icon: <Server className='h-6 w-6' />
    },
    {
      title: '動態路由',
      href: '/examples/dynamic/123',
      description: '展示 Next.js 動態路由功能，允許使用參數處理不同頁面。',
      icon: <Route className='h-6 w-6' />
    },
    {
      title: '平行路由',
      href: '/examples/parallel-routes',
      description: '示範如何使用平行路由同時顯示多個獨立的頁面內容。',
      icon: <GalleryVertical className='h-6 w-6' />
    },
    {
      title: '攔截路由',
      href: '/examples/intercepting',
      description: '示範如何使用攔截路由實現無需離開當前頁面的 UI 覆蓋層。',
      icon: <RouteOff className='h-6 w-6' />
    },
    {
      title: '組合範例',
      href: '/examples/combined',
      description: '結合平行路由和攔截路由，實現更複雜的應用場景。',
      icon: <Share2 className='h-6 w-6' />
    },
    {
      title: '路由功能比較',
      href: '/examples/compare',
      description: '對比 Next.js 的平行路由與 React 的 Suspense 錯誤邊界。',
      icon: <Share2 className='h-6 w-6' rotate={45} />
    },
    {
      title: 'Suspense 邊界',
      href: '/examples/suspense-boundaries',
      description: '展示如何使用 React 的 Suspense 和錯誤邊界處理載入狀態和錯誤。',
      icon: <PanelLeft className='h-6 w-6' />
    },
    {
      title: '表單處理',
      href: '/examples/form',
      description: '示範如何處理表單提交，包括 Fetch API 和 Server Action 兩種方式。',
      icon: <FileText className='h-6 w-6' />
    },
    {
      title: '資料獲取',
      href: '/examples/data-fetching',
      description: '展示在 Server Components 中如何獲取和處理資料。',
      icon: <Database className='h-6 w-6' />
    },
    {
      title: 'React Query vs Fetch',
      href: '/examples/fetch',
      description: '比較使用 React Query 與普通 fetch API 獲取資料的差異。',
      icon: <Upload className='h-6 w-6' />
    },
    {
      title: 'Zustand 狀態管理',
      href: '/examples/zustand',
      description: '展示如何使用 Zustand 進行跨組件的狀態管理。',
      icon: <Boxes className='h-6 w-6' />
    }
  ]

  return (
    <div className='container mx-auto max-w-6xl py-12'>
      <div className='mb-12 flex flex-col items-center text-center'>
        <span className='text-primary bg-primary/10 mb-4 rounded-full px-4 py-1.5 text-sm font-medium'>
          範例展示
        </span>
        <h1 className='from-primary to-primary/60 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent'>
          Next.js 路由系統範例
        </h1>
        <p className='text-muted-foreground max-w-2xl text-lg'>
          Next.js App Router 提供了豐富的路由功能，以下範例展示各種路由技術和功能的使用方式。
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {examples.map((example) => (
          <ExampleCard key={example.href} example={example} />
        ))}
      </div>
    </div>
  )
}

export default ExamplesPage
