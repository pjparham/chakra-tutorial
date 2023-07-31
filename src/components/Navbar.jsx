import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast  } from "@chakra-ui/react";

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
            <Avatar name="Mario" bg="purple.200" src="/img/mario.png">
              <AvatarBadge w="1.3em" bg="teal.400">
                <Text fontSize="xs" color="white">3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>parker@netninja.dev</Text>
            <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
