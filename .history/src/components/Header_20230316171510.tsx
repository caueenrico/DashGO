import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";
import { NotificationNav } from "./Header/NotificationsNav";
import { Profile } from "./Header/Profile";
import { SearchBox } from "./Header/SearchBox";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight" //para deixar a letra mais apertada
        w="64"
      >
        dashGO
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
