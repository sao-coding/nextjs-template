import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  return NextResponse.json({ message: 'Hello World' })
}

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  return NextResponse.json({ message: 'Hello World', body })
}
