'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { submitFormAction } from '@/actions/formActions'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema, FormValues } from '@/schemas/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function FormExample() {
  const [isLoading, setIsLoading] = useState(false)
  const [isActionLoading, setIsActionLoading] = useState(false)

  // 使用 fetch 的表單
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  })

  // 使用 Server Action 的表單
  const actionForm = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  })

  // 處理 fetch 表單提交
  async function onSubmit(values: FormValues) {
    setIsLoading(true)
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('表單提交成功', {
          description: `名稱: ${values.name}, 電子郵件: ${values.email}`,
          duration: 5000,
          action: {
            label: '確認',
            onClick: () =>
              toast('已收到數據', {
                description: `使用 Fetch API 提交的數據：\n名稱: ${values.name}\n電子郵件: ${values.email}`
              })
          }
        })
        form.reset()
      } else {
        toast.error('表單提交失敗', {
          description: result.message || '請稍後再試'
        })
      }
    } catch (error) {
      toast.error('表單提交出錯', {
        description: (error as Error).message
      })
    } finally {
      setIsLoading(false)
    }
  }

  // 處理 Server Action 表單提交
  async function onActionSubmit(values: FormValues) {
    setIsActionLoading(true)
    try {
      // 將表單數據轉為 FormData
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('email', values.email)

      const result = await submitFormAction(formData)

      if (result.success) {
        toast.success('表單提交成功', {
          description: `使用 Server Action 提交:\n名稱: ${values.name}, 電子郵件: ${values.email}`,
          duration: 5000,
          action: {
            label: '詳細資訊',
            onClick: () => {
              toast('提交的表單數據', {
                description: (
                  <div className='space-y-2'>
                    <p>
                      <strong>名稱:</strong> {values.name}
                    </p>
                    <p>
                      <strong>電子郵件:</strong> {values.email}
                    </p>
                    <p className='text-muted-foreground text-xs'>透過 Server Action 提交</p>
                  </div>
                )
              })
            }
          }
        })
        actionForm.reset()
      } else {
        toast.error('表單提交失敗', {
          description: result.message || '請稍後再試'
        })
      }
    } catch (error) {
      toast.error('表單提交出錯', {
        description: (error as Error).message
      })
    } finally {
      setIsActionLoading(false)
    }
  }

  return (
    <div className='container py-10'>
      <h1 className='mb-8 text-3xl font-bold'>表單提交範例</h1>

      <div className='grid gap-8 md:grid-cols-2'>
        {/* Fetch API 表單 */}
        <Card>
          <CardHeader>
            <CardTitle>使用 Fetch API</CardTitle>
            <CardDescription>通過前端 fetch 呼叫 API 路由提交表單</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>名稱</FormLabel>
                      <FormControl>
                        <Input placeholder='請輸入名稱' {...field} />
                      </FormControl>
                      <FormDescription>請輸入您的全名</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>電子郵件</FormLabel>
                      <FormControl>
                        <Input placeholder='請輸入電子郵件' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' disabled={isLoading}>
                  {isLoading ? '提交中...' : '提交 (Fetch)'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Server Action 表單 */}
        <Card>
          <CardHeader>
            <CardTitle>使用 Server Action</CardTitle>
            <CardDescription>直接使用 Server Action 提交表單</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...actionForm}>
              <form onSubmit={actionForm.handleSubmit(onActionSubmit)} className='space-y-6'>
                <FormField
                  control={actionForm.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>名稱</FormLabel>
                      <FormControl>
                        <Input placeholder='請輸入名稱' {...field} />
                      </FormControl>
                      <FormDescription>請輸入您的全名</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={actionForm.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>電子郵件</FormLabel>
                      <FormControl>
                        <Input placeholder='請輸入電子郵件' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' disabled={isActionLoading}>
                  {isActionLoading ? '提交中...' : '提交 (Server Action)'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
