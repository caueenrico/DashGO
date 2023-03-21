import {
  Flex,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";

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

         

          
        </Stack>

        <Button type="submit" mt="6" colorScheme={"pink"} size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
