import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectContacts } from "redux/selectors";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";


const Filter = ({value, onChange}) => {
const {contacts} = useSelector(selectContacts)

  return(
    <div>
      { contacts.length !== 0 && (
        <Flex 
        bg="gray.100"
        align="center"
        flexDir = "column"
         justify="center"
          pt={{base:"5px", md:"12px", lg:"12px", xl:"25px"}}
          // pb={{base:"10px", md:"24px",lg:"50px", xl:"50px"}}
          pb={{base:"10px", md:"24px",lg:"0px", xl:"0px"}}
          >
       <Box 
          bg="white"
          p={6}
          rounded="md"
          w={260}
          pl={{base:"24px", md:"24px",lg:"24px", xl:"24px"}}
          pr={{base:"24px", md:"24px",lg:"24px", xl:"24px"}}
          pt={{base:"5px", md:"24px",lg:"24px", xl:"24px"}}
          pb={{base:"15px", md:"24px",lg:"24px", xl:"24px"}}
      >
         <form >
           <VStack spacing={4} align="flex-start">
           <FormControl>
               <FormLabel htmlFor="name">Find contacts by name</FormLabel>
                <Input
                  type="text"
                  onChange={onChange}
                  variant="filled"
                  value={value}
                />
               
             </FormControl>
            </VStack>
         </form>
       </Box>
     </Flex>
      )
      } 
    </div>         
  )   
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

export default Filter

