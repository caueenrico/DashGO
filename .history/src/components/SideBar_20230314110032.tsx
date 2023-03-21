import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start" >
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAl</Text>
          <Stack spacing="4" mt="8" align="stretch" >
            <Link>
              <Icon as={RiDas}/>
            </Link>

          </Stack>
        </Box>
      </Stack>

    </Box>
  )
}