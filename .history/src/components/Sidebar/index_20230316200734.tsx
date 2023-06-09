import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">

        <NavSection title="GERAL">

          <NavLink icon={RiDashboardLine} ></NavLink>
          <Link display="flex" alignItems="center">
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Dashboard</Text>
          </Link>
          <Link display="flex" alignItems="center">
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Usuários</Text>
          </Link>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <Link display="flex" alignItems="center">
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Formulários</Text>
          </Link>

          <Link display="flex" alignItems="center">
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Automação</Text>
          </Link>
        </NavSection>

      </Stack>
    </Box>
  );
}
