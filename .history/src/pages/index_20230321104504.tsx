import { Input } from "@/components/Form/Input";
import {
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form"; //para o typescript reconhecer o handleSubmit

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm()

  const handleSignIn:SubmitHandler<SignInFormData> = async (data) => {
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
         <Input type="email" label="E-mail"  {...register('email')} />
         <Input type="password" label="Senha" {...register('password')}/>
        </Stack>

        <Button type="submit" mt="6" colorScheme={"pink"} size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}