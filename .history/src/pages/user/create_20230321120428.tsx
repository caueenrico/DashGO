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
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <SideBar />
        
        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6","8"]} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input label="Nome Completo" error={errors.name} {...register("name")}/>
              <Input type="email" label="E-mail" error={errors.email} {...register("email")} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input type="password" label="senha" error={errors.password} {...register("password")}/>
              <Input type="password" label="confirmação da senha" error={errors.password_confirmation} {...register("password_confirmation")} />
            </SimpleGrid>
          </VStack>
         
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href={'/user'}>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" type="submit"  >Salvar</Button>

            </HStack>

          </Flex>
              
        </Box>
      </Flex>
    </Box>
  )
}