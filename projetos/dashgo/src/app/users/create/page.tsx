"use client";

import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RiSaveLine } from "react-icons/ri";
import * as yup from "yup";
import { api } from "@/services/api";
import { makeServer } from "@/services/miraje";


type CreteUserFormData = {
  name: string;
  email: string;
  password: string;
  confirmation_password?: string;
};

const CreateUserDataSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo 6 caracteres"),
  confirmation_password: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreteUserFormData>({
    resolver: yupResolver(CreateUserDataSchema),
  });

  const handCreateUser: SubmitHandler<CreteUserFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  };

  useEffect(() => {
    const busca = async () => {
      const response = await api.get('/users')
    console.log(response.data)
    }
    busca()
  })
  
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          onSubmit={handleSubmit(handCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontSize="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" w="100%" spacing={["6", "8"]}>
              <Input
                label="Nome Completo"
                {...register("name")}
              />
              <Input
                error={errors.email?.message}
                type="email"
                label="E-mail"
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" w="100%" spacing={["6", "8"]}>
              <Input
                error={errors.password?.message}
                type="password"
                label="Senha"
                {...register("password")}
              />
              <Input
                error={errors.confirmation_password?.message}
                type="password"
                label="Confirmação de senha"
                {...register("confirmation_password")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                leftIcon={<Icon as={RiSaveLine} />}
                isLoading={isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
