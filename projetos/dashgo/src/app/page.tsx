'use client'
import {Button, Flex, Stack} from '@chakra-ui/react'

import Input from '@/components/Form/Input'


export default function SignIn () {
    return (
       <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex as="form" w="100%" maxW={360} p={8} bg="gray.800" borderRadius={8} flexDirection="column">
            <Stack spacing={4}>
               <Input type="email" name="email" label="E-mail"/>
               <Input  type="password" name="password" label='Senha'/>
            </Stack>
            <Button colorScheme='pink' type='submit' mt={6} size="lg">Entrar</Button>
        </Flex>
       </Flex>
    )
}