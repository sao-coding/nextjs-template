'use client'

import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  // 創建狀態來保存和更新值
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    // 從本地存儲獲取初始值
    const storedValue = localStorage.getItem(key)

    if (storedValue !== null) {
      try {
        setValue(JSON.parse(storedValue))
      } catch (error) {
        console.error(`Error parsing stored value for key "${key}":`, error)
        setValue(initialValue)
      }
    }
  }, [key, initialValue])

  // 更新函數 - 同時更新本地存儲和狀態
  const updateValue = (newValue: T | ((val: T) => T)) => {
    try {
      // 如果是函數，調用它得到新值
      const valueToStore = newValue instanceof Function ? newValue(value) : newValue

      // 保存到狀態
      setValue(valueToStore)

      // 保存到本地存儲
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error saving to localStorage for key "${key}":`, error)
    }
  }

  return [value, updateValue] as const
}
