'use client'
import {Button, Flex, Input, Stack, FormControl, FormLabel} from '@chakra-ui/react'


export default function Home () {
    return (
       <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex as="form" w="100%" maxW={360} p={8} bg="gray.800" borderRadius={8} flexDirection="column">
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id='email' name='email' type='email' focusBorderColor='pink.500' bg="gray.900" variant="filled" 
                    _hover={{bgColor: 'gray.900'}} size="lg"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Senha</FormLabel>
                    <Input id='password' name='password' type='password' focusBorderColor='pink.500' bg="gray.900" variant="filled"  _hover={{bgColor: 'gray.900'}} size="lg"/>
                </FormControl>
            </Stack>
            <Button colorScheme='pink' type='submit' mt={6} size="lg">Entrar</Button>
        </Flex>
       </Flex>
    )
}