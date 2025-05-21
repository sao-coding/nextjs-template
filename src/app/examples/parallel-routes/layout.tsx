interface ParallelRoutesLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  content: React.ReactNode
}

export default function ParallelRoutesLayout({
  children,
  sidebar,
  content
}: ParallelRoutesLayoutProps) {
  return (
    <div className='container py-8'>
      <h1 className='mb-6 text-3xl font-bold'>平行路由範例</h1>
      <p className='text-muted-foreground mb-6'>
        平行路由允許同時渲染同一布局中的多個頁面，每個頁面擁有獨立的狀態和導航。
      </p>

      <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-4'>
        <div className='rounded-lg border p-4 md:col-span-1'>{sidebar}</div>
        <div className='rounded-lg border p-6 md:col-span-3'>{content}</div>
      </div>

      <div className='mt-8 border-t pt-6'>{children}</div>
    </div>
  )
}
