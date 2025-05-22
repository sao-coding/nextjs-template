'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import UseEffectExample from './use-effect-example'
import UseRefExample from './use-ref-example'
import UseStateExample from './use-state-example'

export default function ReactHooksPage() {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='mb-4 text-3xl font-bold'>React Hooks 範例</h1>
        <p className='text-muted-foreground mb-6 text-lg'>
          瞭解 React 三個最常用的 hooks：useState、useEffect 和 useRef 的使用方法與範例。
        </p>
      </div>

      <Tabs defaultValue='useState' className='w-full'>
        <TabsList className='mb-4 w-full justify-start'>
          <TabsTrigger value='useState'>useState</TabsTrigger>
          <TabsTrigger value='useEffect'>useEffect</TabsTrigger>
          <TabsTrigger value='useRef'>useRef</TabsTrigger>
        </TabsList>

        <TabsContent value='useState' className='space-y-6'>
          <UseStateExample />
        </TabsContent>

        <TabsContent value='useEffect' className='space-y-6'>
          <UseEffectExample />
        </TabsContent>

        <TabsContent value='useRef' className='space-y-6'>
          <UseRefExample />
        </TabsContent>
      </Tabs>
    </div>
  )
}
