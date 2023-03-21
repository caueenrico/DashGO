import { Link, Icon, Text, LinkProps as Chakra } from "@chakra-ui/react";

interface NavLinkProps extends {
  icon: React.ElementType;
  children: string;
}

export function NavLink({ icon, children,  }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}
