import { useNavigate } from "react-router-dom";
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { NavigationLinks } from './NavigationLinks';
import { Profile } from "./Profile";

export function Header() {
    const navigate = useNavigate();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex 
            as="header" 
            w="100%"
            maxWidth={1480}
            bgColor="blue.500"
            h="20"
            mx="auto"
            px="6"
            align="center"
            >   

            <Text 
              color="white" 
              fontWeight="bold"
              _hover={{
                cursor: "pointer"
                }}
                onClick={() => {
                    navigate("/");
                }}
            >
                L O R E M
            </Text>         

            <Flex
              align="center"
              ml="auto"
            >
            <NavigationLinks/>
            <Profile showProfileData={isWideVersion}/>
            </Flex>            
        </Flex>
    )
}

