import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { useEffect} from 'react';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactsThunk, fetchContactsThunk, postContactsThunk } from '../services/operations';

// import PropTypes from "prop-types";
// import ContactForm from './ContactForm';
import Filter  from '../components/Filter';
import ContactList from 'components/ContactList';
import{filterContacts,} from '../redux/filterSlice'
import ContactForm from 'components/ContactForm';
import { selectAuthenticated } from 'redux/authReducer';
import css from "./ContactsPage.module.css"
import { Box } from '@chakra-ui/react';

const ContactsPage = () => {
// -----
const dispatch = useDispatch()
  const{ contacts, isLoading, error, } = useSelector(selectContacts)
  const {filter} = useSelector(selectFilter)
  const authenticated = useSelector(selectAuthenticated)

useEffect(()=> {
  dispatch(fetchContactsThunk())
 }, [dispatch])

 const onAddContact=(data)=>{
   if (!authenticated) return

   console.log("data", data)
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
    console.log("event", event.currentTarget)
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
    // display: flex;
    // gap: 50px;
    // justify-content: center;
    // align-items: center;
    >
      {/* <div className={css.Wr}> */}
      <Box background={{lg: "gray"}}>
      <ContactForm onSubmitProps={onAddContact} />
      <Filter value={filter} onChange={changeFilter}/>
      </Box>
{contacts && <ContactList contacts={visibleContacts} onDeleteContact={onRemoveContact}/>}      {error && <b>mistake: {error}</b>}
      {isLoading && <p>Loading contacts...</p>}
      {/* </div> */}
     </Box>
  )
}

export default ContactsPage
