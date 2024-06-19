'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import theme from '../styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={theme}>{children}
      </ChakraProvider>
      <ReactQueryDevtools/>
  </QueryClientProvider>
)
}