import { Box, Flex,  Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return(
        <Flex align="center">
        { showProfileData && (<Box mr="4" textAlign="right">
            <Text color="white">Juliana Santos</Text>
            <Text color="white" fontSize="small">
              kuasejulia@gmail.com
            </Text>
        </Box>
    )}
        <Avatar size="md" name="Juliana Santos" />
    </Flex>
    );
}