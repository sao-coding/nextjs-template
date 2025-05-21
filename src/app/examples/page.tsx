import Link from 'next/link'
import {
  ArrowRight,
  GalleryVertical,
  MousePointerClick,
  Route,
  RouteOff,
  Share2
} from 'lucide-react'

export default function ExamplesPage() {
  const examples = [
    {
      title: '伺服器元件',
      href: '/examples/server-component',
      description: '展示 Next.js 中伺服器元件的基本使用方式和特性。',
      icon: <Server className='h-6 w-6' />
    },
    {
      title: '客戶端元件',
      href: '/examples/client-component',
      description: '展示如何在 Next.js 中使用客戶端元件處理前端互動和狀態。',
      icon: <MousePointerClick className='h-6 w-6' />
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
          Next.js App Router 提供了豐富的路由功能，以下範例展示各種路由技術的使用方式。
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {examples.map((example) => (
          <Link
            key={example.href}
            href={example.href}
            className='group border-muted bg-background hover:border-primary/50 relative block overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg'
          >
            <div className='text-primary absolute top-4 right-4 opacity-70 transition-opacity group-hover:opacity-100'>
              <ArrowRight className='h-5 w-5' />
            </div>

            <div className='text-primary mb-3'>{example.icon}</div>

            <h2 className='group-hover:text-primary mb-2 text-xl font-semibold transition-colors'>
              {example.title}
            </h2>

            <p className='text-muted-foreground group-hover:text-foreground/80 transition-colors'>
              {example.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Server(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <rect width='20' height='8' x='2' y='2' rx='2' ry='2' />
      <rect width='20' height='8' x='2' y='14' rx='2' ry='2' />
      <line x1='6' x2='6.01' y1='6' y2='6' />
      <line x1='6' x2='6.01' y1='18' y2='18' />
    </svg>
  )
}
