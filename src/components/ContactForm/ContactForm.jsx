import React, { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import shortid from 'shortid';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";


const ContactForm = ({onSubmitProps}) => {

const [name, setName] = useState('')
const [number, setNumber] = useState('')
const inputNameRef = useRef(null)

useEffect(()=>{
  inputNameRef.current.focus()
},[])
  const handleInputChange=(event)=>{

  const {name, value} = event.target
  
  if (name === 'name' && value.trim()!== '' ) {
    setName(value);
  } else if (name === 'number' && value.trim()!== '') {
    setNumber(value);
  }
}
  const handleSubmit=event=>{
    event.preventDefault()

    const contactData = {
        name: name,
        number: number,}

   onSubmitProps(contactData)
   reset()
}

const reset=()=>{
    setName('')
    setNumber('')
}
 const nameInputId = shortid.generate();
 const phoneInputId = shortid.generate();
 return (
  <div>
    <Flex bg="gray.100"
    align="center"
      justify="center"
      pt={{base:"10px", md:"24px", lg:"50px", xl:"50px"}}
      pb={{base:"5px", md:"12px", lg:"12px", xl:"25px"}}
      >
    <Box bg="white"
     pl={{base:"24px", md:"24px",lg:"24px", xl:"24px"}}
     pr={{base:"24px", md:"24px",lg:"24px", xl:"24px"}}
     pt={{base:"5px", md:"24px",lg:"24px", xl:"24px"}}
     pb={{base:"15px", md:"24px",lg:"24px", xl:"24px"}}

     rounded="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
        <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id={nameInputId}
              name="name"
              type="text"
              variant="filled"
              onChange={handleInputChange}
              ref={inputNameRef}
              value={name}
              minLength={2}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Number</FormLabel>
            <Input
              id={phoneInputId}
              name="number"
              type="tel"
              variant="filled"
              onChange={handleInputChange}
              value={number}
              maxLength={14}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
          Add contact
          </Button>
        </VStack>
      </form>
    </Box>
    </Flex>
  </div>
      );    
}
ContactForm.propTypes={
  onSubmitProps: PropTypes.func.isRequired,
}

export default ContactForm
  
  