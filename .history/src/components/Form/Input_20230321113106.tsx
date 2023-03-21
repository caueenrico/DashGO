import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import {forwardRef, ForwardRefRenderFunction} from 'react'

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldErro
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, error, label, ...rest }, ref) => {
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
        error={error}
        ref={ref} //aqui ele esta recebendo o {...register('nome do input') ex: {register('email')} 
      />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase)