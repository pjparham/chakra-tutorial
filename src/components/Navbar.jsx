import { Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
        <Box w="150px" h="50px" bg="red">1</Box>
        <Box w="150px" h="50px" bg="blue">2</Box>
        <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
        <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    </Flex>
  )
}
