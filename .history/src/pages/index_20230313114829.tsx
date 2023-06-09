import { Flex, Input, Button, Stack, FormLabel } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">

          <FormControl>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            name="email"
            id="email"
            type="email"
            focusBorderColor="pink.500"
            bg={"gray.900"}
            variant="filled"
            _hover={{
              bg: "gray.900",
            }}
            size="lg"
          />
          </FormControl>

          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            name="password"
            id="password" 
            type="password"
            focusBorderColor="pink.500"
            bg={"gray.900"}
            variant="filled"
            _hover={{
              bg: "gray.900",
            }}
            size="lg"
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme={"pink"} size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
