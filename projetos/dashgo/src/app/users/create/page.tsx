'use client'

import Input from "@/components/Form/Input";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Divider, Flex, HStack, Heading, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiSaveLine } from "react-icons/ri";

export default function CreateUser() {
    return (
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]} >
                    <Heading size="lg" fontSize="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" w="100%" spacing={["6","8"]}>
                            <Input name="nome" label="Nome Completo"/>
                            <Input name="email" type="email" label="E-mail"/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" w="100%" spacing={["6","8"]}>
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="confirmation_password" type="password" label="Confirmação de senha"/>
                        </SimpleGrid>
                    </VStack>
                    
                    <Flex mt="8" justify="flex-end">
                        <HStack  spacing="4">
                            <Link href="/users">
                            <Button as="a"  colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink" leftIcon={<Icon as={RiSaveLine}/>}>Salvar</Button>
                        </HStack>
                    </Flex>
                    
                </Box>
            </Flex>
        </Box>
    )
}