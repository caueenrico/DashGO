import { FormControl, FormLabel } from "@chakra-ui/react";

interface InputProps extends  {
  name: string;
  label?: string;
}

export function Input(){
  return (
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
  )
}