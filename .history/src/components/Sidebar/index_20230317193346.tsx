import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">

     <SideBarNav /
      
    </Box>
  );
}
