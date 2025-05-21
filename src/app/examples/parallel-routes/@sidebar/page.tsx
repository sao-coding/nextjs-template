'use client'

import { useState } from 'react'

export default function SidebarPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const menuItems = ['儀表板', '專案', '任務', '日曆', '報表', '設定']

  return (
    <div>
      <h3 className='mb-3 font-medium'>側邊欄選單</h3>
      <nav className='space-y-1'>
        {menuItems.map((item) => (
          <button
            key={item}
            className={`w-full rounded-md px-3 py-2 text-left transition-colors ${
              selectedItem === item ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            }`}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      {selectedItem && (
        <div className='mt-4 border-t pt-4'>
          <p className='text-muted-foreground text-sm'>
            已選擇: <span className='text-foreground font-medium'>{selectedItem}</span>
          </p>
        </div>
      )}
    </div>
  )
}
