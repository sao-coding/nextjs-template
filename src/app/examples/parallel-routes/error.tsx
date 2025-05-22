'use client'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className='flex h-[50vh] flex-col items-center justify-center text-center'>
      <h2 className='mb-2 text-2xl font-bold'>發生錯誤</h2>
      <p className='text-muted-foreground mb-6'>{error.message || '無法載入頁面內容'}</p>
      <button
        onClick={() => reset()}
        className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors'
      >
        重試
      </button>
    </div>
  )
}
