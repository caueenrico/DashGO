import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { SideBar } from "@/components/SideBar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

        <SideBar />
        
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}