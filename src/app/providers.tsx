'use client'

import React from 'react'

// import Cookies from 'js-cookie'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Providers = ({
  children
  // session
}: {
  children: React.ReactNode
  // session: Session | null
}) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    // <SessionProvider session={session}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    // </SessionProvider>
  )
}

export default Providers
