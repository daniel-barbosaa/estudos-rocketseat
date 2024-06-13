'use client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { makeServer } from '@/services/miraje';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}


export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}