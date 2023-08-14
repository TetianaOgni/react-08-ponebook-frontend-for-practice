import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "redux/operations";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import { selectAuthenticated } from 'redux/authReducer';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  
  const dispatch = useDispatch()
  const authenticated = useSelector(selectAuthenticated)
 
      const formik = useFormik({
        initialValues: { 
          email: "",
          password: "",  
        },
        onSubmit: (values) => {
        console.log(values)
        dispatch(loginUserThunk(values))
        }
      });

      if (authenticated) return <Navigate to="/contacts"/>

      return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
          <Box bg="white" p={6} rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
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
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      )
}

export default LoginPage
