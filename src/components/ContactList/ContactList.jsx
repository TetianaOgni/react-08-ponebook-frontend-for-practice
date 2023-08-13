import { List, Flex, ListIcon, ListItem, Stack, Button, Divider, Box, Text} from "@chakra-ui/react";
import {PhoneIcon} from '@chakra-ui/icons'
import PropTypes from "prop-types";

import css from './ContactList.module.css'

const ContactList = ({contacts, onDeleteContact}) => {
  
 return (
      <List
       spacing={3} 
      display="flex"
       alignItems="center"
      flexDir = "column"
       justify="center"
       padding={{ base: "10px", md: "10px", lg: "40px", xl: "40px" }}
       //  maxWidth={320}
       >
      {contacts.map(({name, number, id}) => (
      
        <ListItem key={id}>
            <Flex alignItems="center" gap={{base:"5px"}}>
         <ListIcon as={PhoneIcon} color='teal' m="0px" />
         <Box className={css.box}
         display={{base: "block", md: "flex", lg: "flex", xl:"flex"}}
         border={{ base: '1px solid teal', md:'none' }}
         w={[200, 300, 500, 300]}
         borderRadius={{base:"7px", md:"0px"}}
         padding={{base:"10px 20px", md:"0px 0px"}}
         >
          <Text>{name}:</Text>
          <Text >{number}</Text>
         </Box>
             <Stack spacing={4} direction='row' align='center'>
                <Button colorScheme='red'
                 size='xs'
                 hover={{ backgroundColor: 'red.500',
                  color: 'white' }} // Стили для ховера
                  cursor='pointer'
                  onClick={() => {onDeleteContact(id)}}>
                  Delete
                </Button>
             </Stack>
        </Flex>
        <Divider orientation='horizontal' />
        </ListItem>
          ))} 
      </List>
 )
}
   
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList

//  {/* <div  
//        className={css.Wrap}
//        >
//             <p className={css.ContactName}>{name}:</p>
//             <span className={css.ContactNumber}>{number}</span> 
//            </div>  */}
 //  <ul className={css.ContactList}>
  //  {contacts.map(({name, number, id}) => (
  //         <li key={id} className={css.ContactItem}>
  //           <div className={css.wrap}>
  //           <p className={css.ContactName}>{name}:</p>
  //           <span className={css.ContactNumber}>{number}</span>
  //           </div>
  //           <button className={css.ContactBtn}onClick={() => {onDeleteContact(id)}}>
  //             Delete
  //           </button>
  //         </li>
  //       ))}
  //  </ul>