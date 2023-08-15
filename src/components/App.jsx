import { Suspense, lazy, useEffect } from "react";
import {NavLink, Route, Routes} from 'react-router-dom'
import {
  Button,
  Stack,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { selectAuthenticated, selectToken } from "redux/authReducer";
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
        p={{base:"5px", md:"10px", lg:"15px", xl:"20px"}}
        fontSize={{base:"5px", md:"10px", lg:"15px", xl:"20px"}}
         >
          <Button colorScheme='teal' variant='link'as={NavLink} to='/'>
          HOME
          </Button>
            {authenticated ? (
              <>
              <Button colorScheme='teal' variant='link' as={NavLink} to='/contacts'>
                    CONTACTS
                  </Button>
                  <></>
                  <Button colorScheme='teal' variant='link' onClick={handleLogout} >
                    LOGOUT
                  </Button>
              </> 
             ) : (
              <>
                <Button colorScheme='teal' variant='link' as={NavLink} to='/register'>
                  REGISTER
                </Button>
                <Button colorScheme='teal' variant='link' as={NavLink} to='/login'>
                  LOGIN
                </Button>
              </>
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


