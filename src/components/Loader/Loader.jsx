import { Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    // <div>
    //   <p>Loading ...please wait</p>
    // </div>
  <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  />
   
  )
}

export default Loader
