import Link from 'next/link'
import { Menu } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { href: '/examples', label: '範例首頁' },
    { href: '/examples/server-component', label: '伺服器元件' },
    { href: '/examples/client-component', label: '客戶端元件' },
    { href: '/examples/dynamic/123', label: '動態路由' },
    { href: '/examples/parallel-routes', label: '平行路由' },
    { href: '/examples/intercepting', label: '攔截路由' },
    { href: '/examples/combined', label: '組合範例' },
    { href: '/examples/react-hooks', label: 'React Hooks' },
    { href: '/examples/compare', label: '路由功能比較' },
    { href: '/examples/suspense-boundaries', label: 'Suspense 邊界' },
    { href: '/examples/form', label: '表單處理' },
    { href: '/examples/data-fetching', label: '資料獲取' },
    { href: '/examples/fetch', label: 'React Query vs Fetch' },
    { href: '/examples/zustand', label: 'Zustand 狀態管理' }
  ]

  return (
    <div className='flex min-h-screen flex-col bg-[url("/bg.png")] bg-cover'>
      {/* 毛玻璃效果導航欄 */}
      <header className='fixed top-4 right-0 left-0 z-50 mx-auto w-[95%] max-w-7xl overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-black/10 dark:bg-black/5'>
        <div className='flex h-12 items-center justify-between'>
          <Link href='/'>
            <span className='font-bold'>Next.js 課程</span>
          </Link>

          <div className='flex items-center gap-4'>
            {/* 桌面導航 - 使用毛玻璃效果 */}
            <nav className='hidden md:flex'>
              <div className='flex items-center gap-1 rounded-lg bg-white/10 p-1 backdrop-blur-md dark:bg-black/10'>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='hover:text-primary rounded-md px-3 py-1.5 text-sm font-medium transition-all hover:bg-white/10 hover:shadow-sm dark:hover:bg-black/20'
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* 行動版導航 */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='ml-2 md:hidden'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>打開選單</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='w-[80vw] max-w-md bg-white/80 backdrop-blur-xl dark:bg-black/80'
              >
                <SheetTitle>
                  <span className='font-bold'>Next.js 課程</span>
                </SheetTitle>
                <div className='mt-6 grid gap-3 py-4'>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 dark:hover:bg-black/20'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <div className='flex items-center rounded-lg bg-white/10 p-1 backdrop-blur-md dark:bg-black/10'>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* 主要內容 - 加入頂部間距 */}
      <main className='mt-24 flex-1 p-6'>{children}</main>

      {/* 現代化頁尾 */}
      <footer className='bg-muted/40 border-t px-6'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
          <div className='flex flex-col items-center gap-4 md:flex-row md:gap-2'>
            <p className='text-muted-foreground text-center text-sm leading-loose md:text-left'>
              © {new Date().getFullYear()} Next.js 13+ 範本
            </p>
          </div>
          <Button variant='outline' size='sm' asChild>
            <Link href='/' className='flex items-center gap-1'>
              回到首頁
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}
