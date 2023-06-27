import React, { Component } from 'react';
import shortid from 'shortid';
import css from './ContactForm.module.css'


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  
  handleInputChange=(event)=>{

  this.setState({
    [event.target.name]: event.target.value, 
  })

  }
  handleSubmit=event=>{
    event.preventDefault()

    const contactData = {
        name: this.state.name,
        number: this.state.number,}
     
   this.props.onSubmitProps(contactData)

   this.reset()
}

reset=()=>{
    this.setState({name:'', number:''})
}

  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  render() {
    const {name, number} = this.state
    return (
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label htmlFor={this.nameInputId} className={css.labelName}>Name</label>
          <input
          className={css.inputName}
            value={name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={this.phoneInputId} className={css.labelNumber}>Number</label>
          <input
          className={css.inputNumber}
            value={number}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"           
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
          <button className={css.formBtn} type="submit">Add contact</button>
        </form>
    );
  }
}

export default ContactForm;