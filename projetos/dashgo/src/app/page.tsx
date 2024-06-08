'use client'
import {Button, Flex, Stack} from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from '@/components/Form/Input'

interface SignInFormData {
    email: string,
    password: string
}

// Corrigir erro da linha 23 

export default function SignIn () {
    const {register, handleSubmit} = useForm()

    const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
        console.log(values)
    }


    return (
       <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex as="form" w="100%" maxW={360} p={8} bg="gray.800" borderRadius={8} flexDirection="column" onSubmit={handleSubmit(handleSignIn)}>
            <Stack spacing={4}>
               <Input type="email" label="E-mail" {...register('email')}/>
               <Input  type="password" label='Senha' {...register('password')}/>
            </Stack>
            <Button colorScheme='pink' type='submit' mt={6} size="lg">Entrar</Button>
        </Flex>
       </Flex>
    )
}