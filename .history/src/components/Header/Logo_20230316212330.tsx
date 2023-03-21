import { Text } from "@chakra-ui/react";

export function Logo (){
  return(
    <Text
        fontSize={["2xl", "3xl"]} //para deixar o texto responsivo primeiro valor é para mobile e o segundo para desktop
        fontWeight="bold"
        letterSpacing="tight" //para deixar a letra mais apertada
        w="64"
      >
        maaaaaaa

        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
  )
}