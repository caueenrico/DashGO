import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Flex, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard(){
  return(
    <Flex direction="column" h="100vh">
      <Header/>

      <Flex  w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <SideBar/>

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignI >
          
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}