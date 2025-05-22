import Link from 'next/link'
import {
  ArrowRight,
  CodeIcon,
  LayersIcon,
  LayoutIcon,
  LightbulbIcon,
  ServerIcon,
  ZapIcon
} from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

import FeatureCard from './card'

export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const Home = () => {
  const features: Feature[] = [
    {
      icon: <ServerIcon className='text-primary h-10 w-10' />,
      title: 'App Router 路由系統',
      description: '使用最新的 Next.js App Router 為您的應用建構高效率的路由架構'
    },
    {
      icon: <ZapIcon className='text-primary h-10 w-10' />,
      title: 'React Server Components',
      description: '利用 React 19 的伺服器元件功能改善首次載入性能與 SEO'
    },
    {
      icon: <CodeIcon className='text-primary h-10 w-10' />,
      title: 'TypeScript 型別安全',
      description: '享受完整型別檢查帶來的開發效率與程式碼品質提升'
    },
    {
      icon: <LayoutIcon className='text-primary h-10 w-10' />,
      title: 'Tailwind CSS 樣式',
      description: '透過原子化 CSS 框架快速構建現代且響應式的界面'
    },
    {
      icon: <LightbulbIcon className='text-primary h-10 w-10' />,
      title: 'Shadcn UI 元件',
      description: '使用高品質、可客製化的 UI 元件加速開發進程'
    },
    {
      icon: <LayersIcon className='text-primary h-10 w-10' />,
      title: '完整路由範例',
      description: '包含動態、平行與攔截路由等多種實用範例'
    }
  ]

  return (
    <main className='flex min-h-screen flex-col'>
      {/* 主題切換按鈕 */}
      <div className='fixed top-4 right-4 z-10'>
        <ThemeToggle />
      </div>

      {/* 英雄區段 */}
      <section className='flex flex-col items-center justify-center px-4 pt-20 md:pt-32 lg:pt-40 xl:pt-48'>
        <div className='container max-w-5xl'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <h1 className='from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl'>
              Next.js 13+ 課程範本
            </h1>
            <p className='text-muted-foreground max-w-[700px] text-lg md:text-xl'>
              使用最新技術打造現代化網頁應用 — App Router, React 19, TypeScript 和 Tailwind CSS
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
              <Button size='lg' asChild>
                <Link href='/examples'>
                  查看範例頁面
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a href='https://nextjs.org/docs' target='_blank' rel='noopener noreferrer'>
                  Next.js 文件
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 功能展示區段 */}
      <section className='w-full py-20 md:py-28'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='flex flex-col items-center gap-12'>
            <div className='text-center'>
              <h2 className='mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                核心功能與特色
              </h2>
              <p className='text-muted-foreground mx-auto max-w-[700px] md:text-lg'>
                這個範本包含了現代 Web 開發所需的所有關鍵元素
              </p>
            </div>
            <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
