import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box} from '@chakra-ui/react';
import { useEffect} from 'react';

import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactsThunk, fetchContactsThunk, postContactsThunk } from '../services/operations';
import Filter  from '../components/Filter';
import ContactList from 'components/ContactList';
import{filterContacts,} from '../redux/filterSlice'
import ContactForm from 'components/ContactForm';
// import { selectAuthenticated } from 'redux/authReducer';
import { selectAuthenticated } from 'redux/selectors';

import Loader from 'components/Loader/Loader';

const ContactsPage = () => {

const dispatch = useDispatch()
  const{ contacts, isLoading, error} = useSelector(selectContacts)
  const {filter} = useSelector(selectFilter)
  const authenticated = useSelector(selectAuthenticated)
  // console.log("authenticated", authenticated)

useEffect(()=> {
  dispatch(fetchContactsThunk())
 }, [dispatch])

 const onAddContact=(data)=>{
   if (!authenticated) return

    const { name} = data;
    const isExist = contacts.some(contact => contact.name && 
    contact.name.toLowerCase() === name.toLowerCase());

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
   dispatch(postContactsThunk(data))
  }

  const onRemoveContact = (contactId) => {
     dispatch(deleteContactsThunk(contactId))
    };

  const changeFilter = event=>{
    dispatch(filterContacts(event.currentTarget.value));
  }

  const  getVisibleContacts = () => {
    const normalizeFilter = typeof filter === "string" ? filter.toLocaleLowerCase() : "";
   return contacts ? contacts.filter(
    contact => contact.name &&
    contact.name.toLowerCase().includes(normalizeFilter)) : [];    
  }
  const visibleContacts = getVisibleContacts()


  return (
    <Box display={{lg:"flex"}}
    gap={{lg:"50px"}}
    justifyContent= {{lg:"center"}}
    alignItems={{lg:"flex-start"}}
    background={{lg:"gray.100"}}
    pt={{lg:"50px", xl:"50px"}}
    pb={{lg:"50px", xl:"50px"}}
    pr={{ lg: "50px", xl:"50px"}}
    pl={{lg: "50px", xl:"50px"}}
    >
     
      <Box 
      // background={ "gray.100"}
      w={{lg:"30%"}}
      >
        <ContactForm onSubmitProps={onAddContact} />
        <Filter value={filter} onChange={changeFilter}/>
      </Box>
      <Box   
      >
        {/* {error && <Text fw={"700"} color={"red"}>{error}</Text>} */}
        {isLoading && <Loader/>}
        {contacts && <ContactList contacts={visibleContacts} onDeleteContact={onRemoveContact} />}      {error && <b>mistake: {error}</b>}

      </Box>
    </Box>
  )
}


export default ContactsPage
