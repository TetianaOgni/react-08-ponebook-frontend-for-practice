// import { useSelector, useDispatch } from 'react-redux';
// // import{ addContacts, removeContact, filterContacts,} from '../redux/phoneBookSlice'
// import{ addContacts, removeContact} from '../redux/contactsSlice'
// import{filterContacts,} from '../redux/filterSlice'

// import PropTypes from "prop-types";
// import shortid from 'shortid';
// import ContactForm from './ContactForm';
// import Filter  from './Filter';
// import ContactList from './ContactList';
// import css from './App.module.css'
// // import { selectContacts, selectFilter } from 'redux/selectors';



// const App = ()=> {
 
//   const contacts = useSelector((state) => state.contacts)
//   // console.log("state", contacts)
//   const filter = useSelector((state) => state.filter)
//   // const contacts = useSelector(selectContacts)
//   // console.log("state", selectContacts)
//   // const filter = useSelector(selectFilter)

//   const dispatch = useDispatch()

//  const onAddContact=(data)=>{

//     const { name} = data;
//     const isExist = contacts.some(contact => contact.name && 
//     contact.name.toLowerCase() === name.toLowerCase());

//     if (isExist) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }
  
//     const contactData = {
//       ...data,
//       id: shortid.generate(), 
//     }
   
//     dispatch(addContacts(contactData))

//   }

//  const onRemoveContact = contactId => {
//     dispatch(removeContact(contactId));
    
//   };
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


import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { selectContacts } from 'redux/selectors';
import { fetchContactsThunk } from 'services/operations';
import PropTypes from "prop-types";
import css from './App.module.css'


const App = ()=> {
  const dispatch = useDispatch()
  const{ contacts, isLoading, error} = useSelector(selectContacts)
  // const contacts = useSelector(state => state.contacts) 
  // const isLoading = useSelector(state => state.contacts.isLoading )
  // const error = useSelector(state => state.contacts.error )


  console.log("1state", contacts)
  console.log("2state", isLoading)
  console.log("3state", error)

 useEffect(()=> {
  dispatch(fetchContactsThunk())

 }, [dispatch])
   
console.log(contacts)
  return (
        <div className={css.App}>
         {isLoading && <b>Loading task ...</b>}
         {error && <b>{error}</b>}
         <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p>
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




