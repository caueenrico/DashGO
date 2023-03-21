import { Input } from "@/components/Form/Input";
import {
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler,FieldValues, useForm } from "react-hook-form";//para o typescript reconhecer o handleSubmit
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


export default function SignIn() {
  const {register, handleSubmit, formState} = useForm()
  const 

  const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória')
  })

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
         <Input type="email" label="E-mail"  {...register('email', {required: 'tetstetst'})} />
         <Input type="password" label="Senha" {...register('password')}/>
        </Stack>

        <Button type="submit" mt="6" colorScheme={"pink"} size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
