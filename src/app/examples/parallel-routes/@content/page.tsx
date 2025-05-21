'use client'

import { useState } from 'react'

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState('概觀')

  const tabs = ['概觀', '統計資料', '活動', '設定']

  return (
    <div>
      <div className='mb-4 border-b'>
        <div className='flex space-x-2'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`-mb-px px-4 py-2 ${
                activeTab === tab
                  ? 'border-primary border-b-2 font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className='min-h-[300px]'>
        {activeTab === '概觀' && (
          <div>
            <h2 className='mb-4 text-xl font-semibold'>專案概觀</h2>
            <p className='mb-4'>
              這是一個示範平行路由的範例，此區域為 <code>@content</code> 插槽。
              當你在側邊欄選擇不同項目時，這裡的內容保持獨立狀態。
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <div className='rounded-lg border p-4'>
                <h3 className='mb-2 font-medium'>今日工作</h3>
                <p className='text-muted-foreground text-sm'>完成 3 / 8 項目</p>
              </div>
              <div className='rounded-lg border p-4'>
                <h3 className='mb-2 font-medium'>當前進度</h3>
                <p className='text-muted-foreground text-sm'>整體完成度 65%</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === '統計資料' && (
          <div>
            <h2 className='mb-4 text-xl font-semibold'>統計資料</h2>
            <p className='text-muted-foreground'>此處會顯示統計圖表和數據分析。</p>
          </div>
        )}

        {activeTab === '活動' && (
          <div>
            <h2 className='mb-4 text-xl font-semibold'>近期活動</h2>
            <ul className='space-y-2'>
              <li className='text-sm'>使用者小明更新了專案狀態</li>
              <li className='text-sm'>新增了 3 項任務至待辦清單</li>
              <li className='text-sm'>完成了「頁面設計」里程碑</li>
            </ul>
          </div>
        )}

        {activeTab === '設定' && (
          <div>
            <h2 className='mb-4 text-xl font-semibold'>內容設定</h2>
            <p className='text-muted-foreground'>設定頁面內容與顯示方式。</p>
          </div>
        )}
      </div>
    </div>
  )
}
