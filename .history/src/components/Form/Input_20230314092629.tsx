import { FormControl, FormLabel } from "@chakra-ui/react";

interface InputProps  {
  name: string;
  label?: string;
}

export function Input({name, label}: InputProps) {
  return (
    <FormControl>
            <FormLabel htmlFor={name}>E-mail</FormLabel>
            <Input
              name={name}
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