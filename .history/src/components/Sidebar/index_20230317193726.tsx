import { Box, Drawer, DrawerOverlay, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerSidebar){
    return (
      <Drawer isOpen={true} placement="left" onClose={() => {}}>
        <DrawerOverlay>
          <Drawercon

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
