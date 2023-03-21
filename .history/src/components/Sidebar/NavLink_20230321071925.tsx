import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps{
  icon: React.ElementType;
  children: string;
}

export function NavLink({ icon, children,...rest}: NavLinkProps) {
  return (
    <ChakraLinkdisplay="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}
