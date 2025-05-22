import Link from 'next/link'
import { notFound } from 'next/navigation'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const resolvedParams = await params
  const { id } = resolvedParams

  const products = [
    {
      id: 'p1',
      name: '無線耳機',
      price: 3200,
      category: '電子產品',
      stock: 45,
      description: '高音質無線藍牙耳機，提供長達20小時的電池續航力與主動降噪功能。'
    },
    {
      id: 'p2',
      name: '有線耳機',
      price: 1200,
      category: '電子產品',
      stock: 67,
      description: '高保真有線耳機，適合專業音樂人員使用。'
    },
    {
      id: 'p3',
      name: '藍牙音響',
      price: 4500,
      category: '電子產品',
      stock: 23,
      description: '便攜式藍牙音響，支援AUX/USB連接，音質清晰。'
    },
    {
      id: 'p4',
      name: '行動電源',
      price: 1800,
      category: '電子產品',
      stock: 50,
      description: '超高容量行動電源，支援快充，輕巧便攜。'
    },
    {
      id: 'p5',
      name: '手機殼',
      price: 600,
      category: '手機配件',
      stock: 100,
      description: '多款式手機殼，採用環保材質製作，保護手機不受損傷。'
    },
    {
      id: 'p6',
      name: '螢幕保護貼',
      price: 400,
      category: '手機配件',
      stock: 80,
      description: '高透明度鋼化玻璃螢幕保護貼，防刮耐磨。'
    },
    {
      id: 'p7',
      name: '手機支架',
      price: 900,
      category: '手機配件',
      stock: 70,
      description: '可調式手機支架，適用於各型手機，方便觀看影片。'
    },
    {
      id: 'p8',
      name: '藍牙耳機',
      price: 3500,
      category: '電子產品',
      stock: 30,
      description: '降噪藍牙耳機，音質卓越，佩戴舒適。'
    },
    {
      id: 'p9',
      name: 'USB-C 轉接器',
      price: 800,
      category: '電腦配件',
      stock: 90,
      description: '多功能USB-C轉接器，支援HDMI/VGA/USB3.0等接口。'
    },
    {
      id: 'p10',
      name: 'HDMI線',
      price: 500,
      category: '電腦配件',
      stock: 75,
      description: '高品質HDMI線，支援4K畫質，傳輸穩定。'
    }
  ]

  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className='container py-8'>
      <Breadcrumb className='mb-8'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>首頁</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/examples'>範例</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/examples/combined'>組合範例</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>{product.name}</h1>
        <Link
          href='/examples/combined'
          className='bg-muted hover:bg-muted/80 rounded-md px-4 py-2 transition-colors'
        >
          返回商品列表
        </Link>
      </div>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        <div className='md:col-span-1'>
          <div className='bg-muted/30 flex aspect-square items-center justify-center rounded-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-muted-foreground'
            >
              <rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>
              <line x1='8' y1='21' x2='16' y2='21'></line>
              <line x1='12' y1='17' x2='12' y2='21'></line>
            </svg>
          </div>
        </div>

        <div className='md:col-span-2'>
          <div className='mb-6 rounded-lg border p-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              <div>
                <h3 className='text-muted-foreground text-sm'>價格</h3>
                <p className='text-xl font-bold'>${product.price.toLocaleString()}</p>
              </div>
              <div>
                <h3 className='text-muted-foreground text-sm'>分類</h3>
                <p>{product.category}</p>
              </div>
              <div>
                <h3 className='text-muted-foreground text-sm'>庫存</h3>
                <p>{product.stock} 件</p>
              </div>
            </div>
          </div>

          <h2 className='mb-3 text-xl font-semibold'>商品說明</h2>
          <p className='text-muted-foreground mb-6'>{product.description}</p>

          <div className='flex space-x-4'>
            <button className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-2'>
              加入購物車
            </button>
            <button className='hover:bg-muted rounded-md border px-6 py-2'>收藏商品</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
