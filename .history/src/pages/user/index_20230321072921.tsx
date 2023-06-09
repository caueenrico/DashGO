import { Header } from "@/components/Header";
import { SideBar } from "../../components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "@/components/Pagination";
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

        <SideBar />
        
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href={'/user/create'} pas>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}/>} >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">

            <Thead>

              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8" >
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="8" ></Th>
              </Tr>

            </Thead>

            <Tbody>
              <Tr>

                <Td px={["4", "4", "6"]}>
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

                {isWideVersion && <Td>04 de Abril, 2023</Td>}

                {isWideVersion && <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine}/>} >
                    Editar
                  </Button>
                </Td>}

              </Tr>

              <Tr>

                <Td px={["4", "4", "6"]}>
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

                {isWideVersion && <Td>04 de Abril, 2023</Td>}

                {isWideVersion && <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine}/>} >
                    Editar
                  </Button>
                </Td>}

              </Tr>

            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}