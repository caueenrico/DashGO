import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

export default function UserList() {
  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

        <SideBar />
        
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}/>} >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">

            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8" >
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Caue Enrico</Text>
                    <Text fontSize="sm" color="gray.300">
                      caueenrico@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2023</Td>
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={Rip}/>} >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>

          </Table>

        </Box>

      </Flex>
    </Box>
  )
}