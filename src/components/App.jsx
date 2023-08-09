import { Suspense, lazy, useEffect } from "react";
import {NavLink, Route, Routes} from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { selectAuthenticated, selectToken } from "redux/authReducer";
import { logoutUserThunk, refreshUserThunk } from "redux/operations";


const HomePage = lazy(()=> import ("pages/HomePage"))
const RegisterPage = lazy(()=> import ("pages/RegisterPage"))
const LoginPage = lazy(()=> import ("pages/LoginPage"))
const ContactsPage = lazy(()=> import ("pages/ContactsPage"))


 const App = () =>{
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authenticated = useSelector(selectAuthenticated)

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  const handleLogout = () => {
    dispatch(logoutUserThunk())
  }

  return (
    <div>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          {authenticated ? (
          <>
          <NavLink to='/contacts'>Contacts</NavLink>
          <Button onClick={handleLogout}>LOGOUT</Button>
          </>
          ) : (
            <>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
            </>
          )
          }
          
        <Breadcrumb fontWeight='medium' fontSize='sm'>
          <BreadcrumbItem>
            <BreadcrumbLink to='/'>HOME</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink to='/register'>REGISTER</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem >
            <BreadcrumbLink to='/login'>LOAGIN</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem >
            <BreadcrumbLink to='/contacts'>CONTACTS</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        
        </nav>
      </header>  
      <main>
        <Suspense>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/contacts' element={<ContactsPage/>}/>
          </Routes>
        </Suspense>
      </main>
      </div>
    
  );
}
export default App



// import { useSelector, useDispatch } from 'react-redux';
// import{filterContacts,} from '../redux/filterSlice'

// import { useEffect} from 'react';
// import { selectContacts, selectFilter } from 'redux/selectors';
// import { deleteContactsThunk, fetchContactsThunk, postContactsThunk } from '../services/operations';

// import PropTypes from "prop-types";
// import ContactForm from './ContactForm';
// import Filter  from './Filter';
// import ContactList from './ContactList';
// import css from './App.module.css'


// const App = ()=> {
//   const dispatch = useDispatch()
//   const{ contacts, isLoading, error, } = useSelector(selectContacts)
  
//   const {filter} = useSelector(selectFilter)


// useEffect(()=> {
//   dispatch(fetchContactsThunk())
//  }, [dispatch])

//  const onAddContact=(data)=>{

//     const { name} = data;
//     const isExist = contacts.some(contact => contact.name && 
//     contact.name.toLowerCase() === name.toLowerCase());

//     if (isExist) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }
//    dispatch(postContactsThunk(data))
//   }

//   const onRemoveContact = (contactId) => {
//      dispatch(deleteContactsThunk(contactId))
//     };

//   const changeFilter = event=>{
//     dispatch(filterContacts(event.currentTarget.value));
//   }

//   const  getVisibleContacts = () => {
//     const normalizeFilter = typeof filter === "string" ? filter.toLocaleLowerCase() : "";
//    return contacts ? contacts.filter(
//     contact => contact.name &&
//     contact.name.toLowerCase().includes(normalizeFilter)) : [];    
//   }
//   const visibleContacts = getVisibleContacts()

//   return (
//         <div className={css.App}>
//           <h1 className={css.heroTitle}>Phonebook</h1>
//           <ContactForm onSubmitProps={onAddContact} />
//           <h2 className={css.title}>Contacts</h2>
//           <Filter value={filter} onChange={changeFilter}/>
//           {error && <b>mistake: {error}</b>}
//           {isLoading && <p>Loading contacts...</p>}
//           <ContactList contacts={visibleContacts} onDeleteContact={onRemoveContact}/>
//         </div>
//       )}

//       App.propTypes = {
//         contacts: PropTypes.arrayOf(
//           PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//           })
//         ),
//         filter: PropTypes.string,
//       }
//   export default App;

