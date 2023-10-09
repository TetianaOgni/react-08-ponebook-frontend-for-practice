import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "redux/operations";
import { useFormik } from "formik";
import {
  Box,
  Button,
  css,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
// import { selectAuthenticated } from "redux/authReducer";
import { selectAuthenticated } from "redux/selectors";

import { Navigate } from "react-router-dom";

const RegisterPage = () => {

  const dispatch = useDispatch()

  const authenticated = useSelector(selectAuthenticated)

      const formik = useFormik({
        initialValues: {
          name: "",  
          email: "",
          password: "",
          
        },
        onSubmit: (values) => {
        dispatch(registerUserThunk(values))
    
        }
      });
  if (authenticated){
    console.log(111)
    return < Navigate to='/contacts' />  
  }

  return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
          <div className={css.Container}>
          <Box bg="white" p={6} rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormControl>
                  <FormLabel htmlFor="name">Username</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    minLength={2}
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                    maxLength={30}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    minLength={7}
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Register
                </Button>
              </VStack>
            </form>
          </Box>
          </div>
        </Flex>
    
      )
        }

  export default RegisterPage