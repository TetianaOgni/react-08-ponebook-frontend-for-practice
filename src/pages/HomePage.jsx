import { Box, Flex, Text, } from '@chakra-ui/react'
import React from 'react'
import phoneImageBg from '../image/screen-phone-and-notebook-bg.jpg';
import phoneImageMd from '../image/screen-phone-and-notebook-md.jpg';
import phoneImageSm from '../image/screen-phone-and-notebook-sm.jpg';

// import phoneImageSm from '../image/wepik1x.jpg';



const HomePage = () => {
 
  return (
    <Flex 
    backgroundImage={{base: `url(${phoneImageSm})`,
    md: `url(${phoneImageMd})`, lg: `url(${phoneImageBg})`}}
    backgroundSize = 'cover'
    backgroundPosition='center'
    backgroundRepeat='no-repeat'

    // bg="gray.100"
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
         boxShadow="0 15px 10px #777"
         transform= "rotate(-6deg)"
         >
          <Text fontWeight={"700"}>
            Hello!!! 
          </Text>
          <Text fontWeight={"400"} >
            You are on the page of a very simple phone book.<br/>
             You can register and use the application to store your contacts.<br/>
              You can add, search by name, and delete your contacts.
          </Text>
          <Text fontWeight={"700"} >
            Good luck!!!!
          </Text>

      </Box>
</Flex>
  )
}

export default HomePage
