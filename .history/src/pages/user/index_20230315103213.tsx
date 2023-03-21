import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Box, Flex } from "@chakra-ui/react";

export default function UserList() {
  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

        <SideBar />
        
        <Box flex="1"  >

        </Box>

      </Flex>
    </Box>
  )
}