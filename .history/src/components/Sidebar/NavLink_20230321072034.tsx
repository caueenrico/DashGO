import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Link from "next/link";

interface NavLinkProps extends ChakraLinkProps{
  icon: React.ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children,...rest}: NavLinkProps) {
  return (
    <Link >
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  );
}
