import { Flex } from "@chakra-ui/react";
import { Input } from "../Form/Input";

export function SearchBox(){
  return (
    <Flex
    as="label"
    flex="1"
    py="4"
    px="8"
    ml="6"
    maxWidth={400}
    alignSelf="center"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderRadius="full"
  >
    <Input
      color="gray.50"
      variant="unstyled"
      px="4"
      mr="4"
      placeholder="Buscar na plataforma"
      _placeholder={{ color: "gray.400" }}
    />

    <Icon as={RiSearchLine} fontSize="20" />
    {/* tive que fazer isso acima, por uma recomendação do chakra, entao no caso Icon vem do chakra e o RiSearchLine vem do react-icons */}
  </Flex>
  )
}