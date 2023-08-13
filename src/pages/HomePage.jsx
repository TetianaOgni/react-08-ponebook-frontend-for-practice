import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import  css from "./HomePage.module.css"
const HomePage = () => {
  return (
    <Flex bg="gray.100"
        align="center"
        flexDir = "column"
         justify="center"
          p={5}
          w="100%"  // Занимает 100% ширины экрана
          h="100vh"
        
>
      <div className={css.Container}>
       <Box
        p={10}
        bg="white"
         rounded="md" 
         alignItems="center"
         textAlign="center"
         >

        "Hello, you are on the page of a very simple phone book. You can register and use the application to store your contacts. You can add, search by name, and delete your contacts. Good luck!"

      </Box>
      </div>
</Flex>
  )
}

export default HomePage
