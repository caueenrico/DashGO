import { Button, Stack } from "@chakra-ui/react";

export function Pagination (){
  return (
    <Stack>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        1
      </Button>

      <Button
        size="sm"
        fontSize="xs"
        width="4"
      >
        1
      </Button>
    </Stack>  
  )
}