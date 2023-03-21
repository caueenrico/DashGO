import { Link, Icon, Text } from "@chakra-ui/react";

interface NavLinkProps {

export function NavLink() {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={} fontSize="20" />
      <Text ml="4" fontWeight="medium">Dashboard</Text>
    </Link>
  );
}
