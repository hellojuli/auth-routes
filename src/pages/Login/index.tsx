import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Input, Stack, useToast, FormLabel } from '@chakra-ui/react'

import AuthService from "../../services/AuthService";

export default function SignIn() {
  const [username, setUsername] = useState<string>("kminchelle")
  const [password, setPassword] = useState<string>("0lelplR")

  const [submitting, setSubmitting] = useState<boolean>(false)

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    setSubmitting(true);

    AuthService.login(username, password).then(
      () => {
        navigate("/products");
      },
      (error) => {
        toast({
          title: "Invalid data.",
          description: "Try again.",
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        })
        setSubmitting(false);
      }
    );
  };
  
  return (

    <Flex 
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
      >
        <Flex 
          as="form"
          w='100%'
          maxWidth={450}
          bg='gray.100'
          p='8'
          borderRadius={3}
          flexDir='column'    
        > 
          <Stack spacing='4'>
            <FormLabel htmlFor="username">Username*</FormLabel>
            <Input 
              name="username"
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              focusBorderColor="blue.500"
              bg="#ffffff"
            />

            <FormLabel htmlFor="username">Password*</FormLabel>
            <Input 
              name="password"
              id="password"
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              focusBorderColor="blue.500"
              bg="#ffffff"
            />
          </Stack>
          
          <Button 
            type='submit' 
            onClick={handleSubmit}
            mt="6" 
            colorScheme="blue"
            isLoading={submitting}
            textTransform="uppercase"
          >
            Continue
          </Button>

          <Button 
            mt="6" 
            colorScheme="black"
            textTransform="uppercase"
            onClick={() => {
              navigate("/");
            }}
          >
            Back Home
          </Button>          
      </Flex>      
    </Flex>
  )
}
