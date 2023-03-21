import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
}

const InputBase = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} 
      <ChakraInput
        name={name}
        id={name}
        {...rest} //tenho que fazer para que ele receba as propriedades do InputProps
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

export const Input = forwar