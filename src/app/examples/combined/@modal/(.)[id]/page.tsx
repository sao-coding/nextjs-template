'use client'

import { use, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { IconCalendarOff, IconLink, IconPaperclip } from '@tabler/icons-react'

interface ProductModalProps {
  params: Promise<{
    id: string
  }>
}

const ProductModal = ({ params }: ProductModalProps) => {
  const router = useRouter()
  const resolvedParams = use(params)
  const { id } = resolvedParams

  const dismiss = useCallback(() => {
    router.back()
  }, [router])

  const products = [
    {
      id: 'p1',
      name: '無線耳機',
      price: 3200,
      category: '電子產品',
      stock: 45,
      description: '高音質無線藍牙耳機，提供長達20小時的電池續航力與主動降噪功能。',
      date: '2023-10-15'
    },
    {
      id: 'p2',
      name: '智慧手錶',
      price: 5500,
      category: '電子產品',
      stock: 32,
      description: '多功能智慧手錶，支援健康監測、運動追蹤與通知提醒功能。',
      date: '2023-11-05'
    },
    {
      id: 'p3',
      name: '藍牙喇叭',
      price: 2800,
      category: '電子產品',
      stock: 18,
      description: '便攜式防水藍牙喇叭，具有360度環繞音效與震撼低音效果。',
      date: '2023-09-20'
    },
    {
      id: 'p4',
      name: '筆記型電腦',
      price: 32000,
      category: '電子產品',
      stock: 12,
      description: '輕薄高效能筆記型電腦，搭載最新處理器與高解析度螢幕。',
      date: '2023-12-01'
    },
    {
      id: 'p5',
      name: '智慧型手機',
      price: 24500,
      category: '電子產品',
      stock: 27,
      description: '頂級智慧型手機，配備專業級相機系統與5G連網能力。',
      date: '2023-08-15'
    },
    {
      id: 'p6',
      name: '桌上型螢幕',
      price: 8800,
      category: '電子產品',
      stock: 15,
      description: '超寬曲面電競螢幕，支援高刷新率與HDR顯示技術。',
      date: '2023-11-25'
    }
  ]

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <Dialog open onOpenChange={() => dismiss()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>商品不存在</DialogTitle>
          </DialogHeader>
          <p>找不到 ID 為 {id} 的商品</p>
          <div className='mt-6 flex justify-end'>
            <Button onClick={() => dismiss()}>返回列表</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open onOpenChange={() => dismiss()}>
      <DialogContent className='p-0 md:max-w-3xl'>
        <div className='h-14'>
          <DialogTitle className='mr-6 line-clamp-2 px-3 pt-3 text-xl font-bold md:text-2xl'>
            {product.name}
          </DialogTitle>
        </div>

        <div className='overflow-y-auto p-3 md:p-6'>
          <div className='flex justify-between'>
            <div>
              <div className='flex items-center gap-2'>
                <div>{product.category}</div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-1'>
                <IconCalendarOff size={20} />
                <div>{product.date}</div>
              </div>
            </div>
          </div>

          <div className='mt-4 break-words whitespace-pre-line md:p-1'>{product.description}</div>

          <div className='mt-4 grid grid-cols-2 gap-4'>
            <div className='rounded-lg border p-3'>
              <p className='text-muted-foreground text-sm font-medium'>價格</p>
              <p className='mt-1 font-bold'>${product.price.toLocaleString()}</p>
            </div>
            <div className='rounded-lg border p-3'>
              <p className='text-muted-foreground text-sm font-medium'>庫存</p>
              <p className='mt-1'>{product.stock} 件</p>
            </div>
          </div>

          <div className='mt-6 flex w-full justify-end gap-2'>
            <Link
              href={`/examples/combined/${id}`}
              className='text-primary text-sm hover:underline'
            >
              查看完整詳情
            </Link>
          </div>

          <div className='mt-4 rounded-xl border-2 border-dashed p-1 md:border md:border-solid'>
            <div className='flex items-center'>
              <IconPaperclip size={20} />
              <div className='pl-1 text-gray-500'>沒有附件</div>
            </div>
            <div className='flex items-center'>
              <IconLink size={20} />
              <div className='pl-1 text-gray-500'>沒有連結</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductModal
