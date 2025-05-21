import Link from 'next/link'
import { Home, Menu } from 'lucide-react'

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
    { href: '/examples/combined', label: '組合範例' }
  ]

  return (
    <div className='flex min-h-screen flex-col'>
      {/* 現代化導航欄 */}
      <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b px-6 backdrop-blur'>
        <div className='container flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='bg-primary text-primary-foreground rounded-md p-1'>
              <Home className='h-5 w-5' />
            </div>
            <span className='hidden font-bold sm:inline-block'>Next.js 課程</span>
          </Link>

          <div className='flex items-center gap-4'>
            {/* 桌面導航 */}
            <nav className='hidden items-center space-x-6 md:flex'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='hover:text-primary text-sm font-medium transition-colors'
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* 行動版導航 */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>打開選單</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right'>
                <SheetTitle>
                  <div className='flex items-center gap-2'>
                    <Home className='h-5 w-5' />
                    <span className='font-bold'>Next.js 課程</span>
                  </div>
                </SheetTitle>
                <div className='flex flex-col gap-4 py-4'>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='hover:text-primary text-sm font-medium transition-colors'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* 主要內容 */}
      <main className='flex-1 p-6'>{children}</main>

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
              <Home className='h-4 w-4' />
              回到首頁
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}
