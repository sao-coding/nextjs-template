// API 響應格式
export interface ApiResponse<T> {
  data: T
  message: string
  status: number
  success: boolean
}

// 分頁接口
export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    total: number
    currentPage: number
    lastPage: number
    perPage: number
  }
}

// 錯誤響應
export interface ApiError {
  statusCode: number
  message: string
  errors?: Record<string, string[]>
}

// API 請求參數
export interface ApiRequestParams {
  page?: number
  limit?: number
  sort?: string
  order?: 'asc' | 'desc'
  search?: string
  filter?: Record<string, string>
}

// 常見類型
export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}
