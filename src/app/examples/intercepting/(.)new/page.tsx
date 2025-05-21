'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NewProjectModal() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    deadline: '',
    status: '規劃中'
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // 在實際應用中，這裡會處理提交邏輯
    alert('表單已提交！在實際應用中，這將創建一個新項目。')
    router.back()
  }

  return (
    <div className='bg-background/80 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm'>
      <div className='bg-background relative w-full max-w-md rounded-lg border p-6 shadow-lg'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-xl font-bold'>新增項目</h2>
          <Link
            href='/examples/intercepting'
            className='text-muted-foreground hover:text-foreground'
          >
            <span className='sr-only'>關閉</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 6 6 18'></path>
              <path d='m6 6 12 12'></path>
            </svg>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='mb-1 block text-sm font-medium'>
                項目名稱
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formState.name}
                onChange={handleChange}
                className='w-full rounded-md border px-3 py-2'
                required
              />
            </div>

            <div>
              <label htmlFor='description' className='mb-1 block text-sm font-medium'>
                項目說明
              </label>
              <textarea
                id='description'
                name='description'
                value={formState.description}
                onChange={handleChange}
                rows={3}
                className='w-full rounded-md border px-3 py-2'
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label htmlFor='deadline' className='mb-1 block text-sm font-medium'>
                  截止日期
                </label>
                <input
                  type='date'
                  id='deadline'
                  name='deadline'
                  value={formState.deadline}
                  onChange={handleChange}
                  className='w-full rounded-md border px-3 py-2'
                />
              </div>

              <div>
                <label htmlFor='status' className='mb-1 block text-sm font-medium'>
                  狀態
                </label>
                <select
                  id='status'
                  name='status'
                  value={formState.status}
                  onChange={handleChange}
                  className='w-full rounded-md border px-3 py-2'
                >
                  <option value='規劃中'>規劃中</option>
                  <option value='進行中'>進行中</option>
                  <option value='已完成'>已完成</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mt-6 flex justify-end space-x-3'>
            <Link
              href='/examples/intercepting'
              className='hover:bg-muted rounded-md border px-4 py-2 transition-colors'
            >
              取消
            </Link>
            <button
              type='submit'
              className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors'
            >
              建立項目
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
