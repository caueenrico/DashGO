import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Header";
import { SideBar } from "../../components/Sidebar";
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { SubmitHandler, FieldValues, useForm } from "react-hook-form"; //para o typescript reconhecer o handleSubmit
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf(["", yup.ref('password')], 'As senhas precisam ser iguais')
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<FieldValues> = async (data) => {
    
  }

  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <SideBar />
        
        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6","8"]} onSubmit={handleSubmit()}>
          <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="password" type="password" label="senha" />
              <Input name="password_confirmation" type="password" label="confirmação da senha" />
            </SimpleGrid>
          </VStack>
         
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href={'/user'}>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>

            </HStack>

          </Flex>
              
        </Box>
      </Flex>
    </Box>
  )
}