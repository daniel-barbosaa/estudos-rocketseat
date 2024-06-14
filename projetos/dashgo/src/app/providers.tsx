'use client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { makeServer } from '@/services/miraje';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

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