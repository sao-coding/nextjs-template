import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // 模擬處理表單數據
    console.log('API Route received data:', data)

    // 模擬延遲
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      message: '通過 API 提交成功',
      data
    })
  } catch (error) {
    return NextResponse.json(
      { message: '提交失敗', error: (error as Error).message },
      { status: 400 }
    )
  }
}
