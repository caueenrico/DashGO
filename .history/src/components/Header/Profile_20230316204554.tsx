import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
  return(
    <Flex align="center">
    {}
 
    <Avatar size="md" name="Caue Enrico" />
    
  </Flex>
  )
}