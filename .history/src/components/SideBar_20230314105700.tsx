import { Box, Stack, Text } from "@chakra-ui/react";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start" >
        <Box>
          <Text fontWeight="bold" color="gra"  >
            GERAL
          </Text>
        </Box>
      </Stack>

    </Box>
  )
}