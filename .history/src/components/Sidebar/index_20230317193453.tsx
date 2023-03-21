import { Box, useBreakpoint } from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
  const isDrawerSidebar = useBreakpointVa

  return (
    <Box as="aside" w="64" mr="8">

     <SideBarNav />
      
    </Box>
  );
}
