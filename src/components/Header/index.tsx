import { useSideBarDrawer } from "@/context/SideBarDrawerContext";
import { Flex, useBreakpointValue, Icon, IconButton} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {

  const {onOpen} = useSideBarDrawer() //esse aqui é o context
  
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
      {!isWideVersion && ( // aqui esta a parte onde o botão de menu aparece 
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen} //aqui esta consumindo uma informação do context
          mr="2"
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
