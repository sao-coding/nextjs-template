'use server'

export async function submitFormAction(formData: FormData) {
  try {
    // 從 FormData 中取出數據
    const name = formData.get('name')
    const email = formData.get('email')

    console.log('Server Action received data:', { name, email })

    // 模擬延遲
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // 模擬處理邏輯
    return {
      success: true,
      message: '通過 Server Action 提交成功',
      data: { name, email }
    }
  } catch (error) {
    return {
      success: false,
      message: '提交失敗',
      error: (error as Error).message
    }
  }
}
