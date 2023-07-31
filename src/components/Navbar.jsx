import { Box, Button, Flex, HStack, Heading, Spacer, Text, useToast  } from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top', 
      variant: 'subtle'
    })
  }

  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
        <Heading as="h1">Dojo Tasks</Heading>
        <Spacer />

        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>parker@netninja.dev</Text>
            <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
