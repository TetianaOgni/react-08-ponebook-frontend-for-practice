import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import Filter  from './Filter';
import ContactList from './ContactList';
import css from './App.module.css'


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddContact=(data)=>{
    const { name } = data;
    const {contacts} = this.state
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

    this.setState(prevState => ({
      contacts: [contactData, ...prevState.contacts]
    }))
  }

  onRemoveContact = contactID => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  changeFilter = event=>{
    this.setState({
      filter: event.currentTarget.value
    })
  }

  getVisibleContacts = () => {
    const {filter, contacts} = this.state
    const normalizeFilter = filter.toLocaleLowerCase()
   return  contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))    
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if(parsedContacts){
      this.setState({contacts: parsedContacts})
    } 
  }

  componentDidUpdate(prevState){
    if (this.state.contacts !== prevState.contacts){
      
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    } 
  }

  render() {

    const visibleContacts = this.getVisibleContacts()
    const {filter} = this.state

    return (
      <div className={css.App}>
        <h1 className={css.heroTitle}>Phonebook</h1>
        <ContactForm onSubmitProps={this.onAddContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.onRemoveContact}/> 
      </div>
    );
  }
}
export default App;