import * as z from 'zod'

// 表單驗證結構
export const formSchema = z.object({
  name: z.string().min(2, { message: '名稱至少需要2個字元' }),
  email: z.string().email({ message: '請輸入有效的電子郵件' })
})

export type FormValues = z.infer<typeof formSchema>
