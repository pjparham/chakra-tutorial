import { Box, Button, Flex, HStack, Heading, Spacer, Text  } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
        <Heading as="h1">Dojo Tasks</Heading>
        <Spacer />

        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>parker@netninja.dev</Text>
            <Button colorScheme="purple">Logout</Button>
        </HStack>
    </Flex>
  )
}
