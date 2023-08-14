import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Flex bg="gray.100"
        align="center"
        flexDir = "column"
         justify="center"
          p={5}
          w="100%"  
          h="100vh"
        
>
       <Box
        p={10}
        bg="white"
         rounded="md" 
         alignItems="center"
         textAlign="center"
         >
          <Text fontWeight={"700"} color={"purple"}>
            Hello!!! 
          </Text>
          <Text fontWeight={"400"} color={"teal"}>
            You are on the page of a very simple phone book.<br/>
             You can register and use the application to store your contacts.<br/>
              You can add, search by name, and delete your contacts.
          </Text>
          <Text fontWeight={"700"} color={"purple"}>
            Good luck!!!!
          </Text>

      </Box>
</Flex>
  )
}

export default HomePage
