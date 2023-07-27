// import React, { useState,  } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import{setFilter, setContacts, removeContact} from '../redux/phoneBookReducer'
import PropTypes from "prop-types";
import shortid from 'shortid';
import ContactForm from './ContactForm';
import Filter  from './Filter';
import ContactList from './ContactList';
import css from './App.module.css'



const App = ()=> {
  // const [contacts, setContacts] = useState([])
  // const [filter, setFilter] = useState('')
  
  const contacts = useSelector((state) =>  { 
    console.log("state", state)
    return state.phoneBook.contacts
  })
  const filter = useSelector((state) =>  {
    return state.phoneBook.filter
  })
  const dispatch = useDispatch()

  // localStorage не работает 
useEffect(()=>{

  const storedContacts = localStorage.getItem('contacts')
  const parsedContacts = JSON.parse(storedContacts)
  if(parsedContacts){
   dispatch(setContacts(parsedContacts))
  //  dispatch({type: "phoneContacts/setContacts", payload: parsedContacts}) 
  // setContacts(parsedContacts)
}
},[dispatch])

useEffect(()=>{  
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

 const onAddContact=(data)=>{

    const { name } = data;
    const isExist = contacts.some(contact => 
    contact.name.toLowerCase() === name.toLowerCase());

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
  
    const contactData = {
      ...data,
      id: shortid.generate(), 
    }
    dispatch(setContacts([...contacts, contactData]))
    // dispatch({type: "phoneContacts/setContacts", payload: [...contacts, contactData]});
  }

 const onRemoveContact = contactId => {
    dispatch(removeContact(contactId));
    // dispatch({type: "phoneContacts/removeContact", payload: contactId})
    // setContacts(contacts.filter(contact => contact.id !== contactID))
  };
  const changeFilter = event=>{
    dispatch(setFilter(event.currentTarget.value));
    // dispatch({type:"phoneContacts/setFilter", payload: event.currentTarget.value});
    // setFilter(event.currentTarget.value)
  }

  const  getVisibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase()
   return  contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))    
  }
  const visibleContacts = getVisibleContacts()

  return (
        <div className={css.App}>
          <h1 className={css.heroTitle}>Phonebook</h1>
          <ContactForm onSubmitProps={onAddContact} />
          <h2 className={css.title}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter}/>
          <ContactList contacts={visibleContacts} onDeleteContact={onRemoveContact}/> 
          
        </div>
      )}

      App.propTypes = {
        contacts: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
          })
        ),
        filter: PropTypes.string,
        
      }
  export default App;

