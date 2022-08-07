import React from "react";
import { Box, Button, Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { Header } from '../../components/Header';

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      <Header />
      <Box
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        my="auto"
        px="6"
      >
        <Text fontSize='6xl' fontWeight="bold">
          Lorem ipsum
        </Text>
        <Text fontSize='4xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>

        <Button
          mt="6" 
          colorScheme="blue"
          size='lg'
          onClick={() => {
            navigate("/auth");
           }}
        >
          Sign In
        </Button>
        </Box>
    </Box>
  );
}

export default Home;
