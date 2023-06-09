import { Stack } from "@chakra-ui/react";

export function SideBarNav(){
  return(
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}> DashBoard</NavLink>
        <NavLink icon={RiContactsLine}> Usuários</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
  </Stack>
  )
}