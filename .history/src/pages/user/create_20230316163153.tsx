import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { SideBar } from "@/components/SideBar";
import { Box, Divider, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

export default function UserList() {
  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <SideBar />
        
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Inp
            </SimpleGrid>
          </VStack>
         
    
        </Box>
      </Flex>
    </Box>
  )
}