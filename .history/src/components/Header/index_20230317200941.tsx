import { useSideBarDrawer } from "@/context/SideBarDrawerContext";
import { Flex, IconButton, useBreakpointValue, Icon, IconButton} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {

  const {onOpen} = useSideBarDrawer()
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          
        >

        </IconButton>
      )}
      <Logo/>

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  );
}