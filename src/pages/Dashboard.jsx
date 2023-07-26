import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color:  "white",
    m: "10px",
    textAlign: "center",
    filter: 'blur(2px)',
    ':hover': {
      color: "black",
      bg: "blue.200",
      filter: 'none'
    }
  }

  return (
    <Container as="section" maxW="4xl" py="20px">
      <Heading my="30px" p="10px">Chakra UI Components</Heading>
      <Text ml="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos?</Text>
      <Text marginLeft="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos?</Text>

      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a box</Text>
      </Box>

      <Box sx={boxStyles}>
        Hello, Everyone!
      </Box>
    </Container>
  )
}
