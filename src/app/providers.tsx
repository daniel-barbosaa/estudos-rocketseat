'use client'
<<<<<<< HEAD
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
=======

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
}