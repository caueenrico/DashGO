import { FormControl, FormLabel } from "@chakra-ui/react";

interface InputProps {
  name: string;
  label?: string;
}

export function Input({ name, label }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} se uma label
      existir
      <Input
        name={name}
        id={name}
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
  );
}
