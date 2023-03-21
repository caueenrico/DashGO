import { Header } from "@/components/Header";
import { Flex } from "@chakra-ui/react";

export default function Dashboard(){
  return(
    <Flex direction="column" h="100vh">
      <Header/>

      <Flex border="1px solid red" w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <Side
      </Flex>
    </Flex>
  )
}