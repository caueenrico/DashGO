import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Header";

import { Pagination } from "@/components/Pagination";
import { SideBar } from "../../components/Sidebar";

import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

export default function UserList() {
  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <SideBar />
        
        <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
          <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="senha" />
              <Input name="password_confirmation" type="password" label="confirmação da senha" />
            </SimpleGrid>
          </VStack>
         
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>

            </HStack>

          </Flex>
              
        </Box>
      </Flex>
    </Box>
  )
}