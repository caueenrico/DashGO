import { useSideBarDrawer } from "@/context/SideBarDrawerContext";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
  const {isOpenonClose} = useSideBarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerSidebar){
    return (
      <Drawer isOpen={true} placement="left" onClose={() => {onClose}}>
        <DrawerOverlay>
          <DrawerContent bg={"gray.800"}>
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
            

          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">

     <SideBarNav />
      
    </Box>
  );
}
