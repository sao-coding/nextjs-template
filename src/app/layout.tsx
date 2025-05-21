import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

import Providers from './providers'

import './globals.css'

// 使用 Google 字體
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Next.js 13+ 課程範本',
  description: 'Next.js 13+, React, TypeScript 與 Tailwind CSS 學習範本'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='zh-TW' suppressHydrationWarning>
      <body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>
        <div className='via-background to-background fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/20 dark:from-sky-900/30' />
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <Providers>
            {children}
            <Toaster position='top-center' closeButton />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
