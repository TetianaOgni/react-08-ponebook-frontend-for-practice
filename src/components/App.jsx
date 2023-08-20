import { Suspense, lazy, useEffect } from "react";
import {NavLink, Route, Routes} from 'react-router-dom'
import {
  Button,
  Stack,
  Box,
  Text,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
// import { selectAuthenticated, selectToken } from "redux/authReducer";
import { selectAuthenticated, selectToken, selectUserData } from "redux/selectors";
import { logoutUserThunk, refreshUserThunk } from "redux/operations";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


const HomePage = lazy(()=> import ("pages/HomePage"))
const RegisterPage = lazy(()=> import ("pages/RegisterPage"))
const LoginPage = lazy(()=> import ("pages/LoginPage"))
const ContactsPage = lazy(()=> import ("pages/ContactsPage"))


const App = () => {
const dispatch = useDispatch();
const token = useSelector(selectToken);
const authenticated = useSelector(selectAuthenticated)
const userData = useSelector(selectUserData)
console.log("userData", userData)

  useEffect(() => {
    if (!token || authenticated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authenticated]);

  const handleLogout = () => {
    dispatch(logoutUserThunk())
  }

  return (
    <div >
      <header 
      >
       <nav>
       <Stack direction='row' spacing={4} align='center'
       justifyContent={"space-between"}
       gap='5px'
       p={{base:"10px", md:"10px", lg:"15px", xl:"20px"}}
         >
      
          <Button colorScheme='teal' variant='link'as={NavLink} to='/'
           fontSize={{base:'10px', md:'15px', lg:'15px', xl:'20px'}} 
          >
          HOME
          </Button>
            {authenticated ? (
              <Box display={"flex"}
               alignItems={"center"}
               gap={{base:"10px", md:"20px", lg:"20px", xl:"20px"}}
              >
              {userData!== null && <Text 
               fontSize={{base:"7px", md:"10px", lg:"15px", xl:"20px"}}
               minW={{base:"80px", md:"300px"}}
               whiteSpace={"nowrap"} 
               overflow={"hidden"}
               color='purple'
               fontWeight={600}
               >
                {userData.email}
                </Text>}
              <Button 
              fontSize={{base:'10px', md:'15px', lg:'15px', xl:'20px'}}
               colorScheme='teal'  variant='link' as={NavLink} to='/contacts'>
                    CONTACTS
                  </Button>
                    <Button  
                    fontSize={{base:'10px', md:'15px', lg:'15px', xl:'20px'}}
                     colorScheme='teal'  variant='link' onClick={handleLogout} >
                      LOGOUT
                    </Button>
              </Box> 
             ) : (
              <Box
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}             
              >
                <Button  
                fontSize={{base:'10px', md:'15px', lg:'15px', xl:'20px'}}
                colorScheme='teal' variant='link' as={NavLink} to='/register'>
                  REGISTER
                </Button>
                <Button 
                fontSize={{base:'10px', md:'15px', lg:'15px', xl:'20px'}}
                colorScheme='teal' variant='link' as={NavLink} to='/login'>
                  LOGIN
                </Button>
              </Box>
            )}
         
       </Stack>
       </nav>
      </header>  
      <main>
        <Suspense>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/contacts' element={
              <PrivateRoute redirectTo='/login'>
                <ContactsPage/>
              </PrivateRoute>
            }/>
          </Routes>
        </Suspense>
      </main>
      </div>
  );
}

export default App


