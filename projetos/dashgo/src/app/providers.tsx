'use client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={theme}>{children}
      </ChakraProvider>
  </QueryClientProvider>
)
}