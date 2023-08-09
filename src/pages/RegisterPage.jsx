import React from "react";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "redux/operations";
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


const RegisterPage = () => {

  const dispatch = useDispatch()

      const formik = useFormik({
        initialValues: {
          name: "",  
          email: "",
          password: "",
          
        },
        onSubmit: (values) => {
        console.log(values)
        dispatch(registerUserThunk(values))
    
        }
      });

      return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
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
        </Flex>
    
      )
        }



    // const handleSubmit = event => {
    //     event.preventDefault();
    
    //     const form = event.currentTarget;
    
    //     const name = form.elements.userName.value;
    //     const email = form.elements.userEmail.value;
    //     const password = form.elements.userPassword.value;
    
    //     dispatch(
    //       registerUserThunk({
    //         name,
    //         email,
    //         password,
    //       })
    //     );
    //   };
    //   return (
    //     <div>
    //       <h1>Register Your Account</h1>
    //       <form onSubmit={handleSubmit}>
    //         <label>
    //           <p>Name:</p>
    //           <input name="userName" type="text" required minLength={2} />
    //         </label>
    //         <br />
    //         <label>
    //           <p>Email:</p>
    //           <input name="userEmail" type="email" required />
    //         </label>
    //         <br />
    //         <label>
    //           <p>Password:</p>
    //           <input name="userPassword" type="password" required minLength={7} />
    //         </label>
    //         <br />
    //         <button type="submit">Sign Up</button>
    //       </form>
    //     </div>
    //   );
    // };
    // return (
    //     <Flex bg="gray.100" align="center" justify="center" h="100vh">
    //       <Box bg="white" p={6} rounded="md">
    //         <form onSubmit={handleSubmit}>
    //           <VStack spacing={4} align="flex-start">
    //           <FormControl>
    //               <FormLabel htmlFor="name">Username</FormLabel>
    //               <Input
    //                 id="name"
    //                 name="name"
    //                 type="text"
    //                 variant="filled"
    //                 // value={values.name}
    //                 minLength={2}
    //                 required
    //               />
    //             </FormControl>
    //             <FormControl>
    //               <FormLabel htmlFor="email">Email Address</FormLabel>
    //               <Input
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //                 variant="filled"
    //                 // value={values.email}
    //                 required
    //               />
    //             </FormControl>
    //             <FormControl>
    //               <FormLabel htmlFor="password">Password</FormLabel>
    //               <Input
    //                 id="password"
    //                 name="password"
    //                 type="password"
    //                 variant="filled"
    //                 // value={values.password}
    //                 minLength={7}
    //                 required
    //               />
    //             </FormControl>
    //             <Button type="submit" colorScheme="purple" width="full">
    //               Login
    //             </Button>
    //           </VStack>
    //         </form>
    //       </Box>
    //     </Flex>
    
    //   )
        // }

        


    // export default RegisterForm
  export default RegisterPage