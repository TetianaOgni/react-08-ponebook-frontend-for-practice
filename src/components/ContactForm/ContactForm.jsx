import React, { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import shortid from 'shortid';
import css from './ContactForm.module.css'

const ContactForm = ({onSubmitProps}) => {
 const [name, setName] = useState('')
 const [number, setNumber] = useState('')
const inputNameRef = useRef(null)
useEffect(()=>{
  inputNameRef.current.focus()
},[])
  const handleInputChange=(event)=>{

  const {name, value} = event.target
  
  if (name === 'name' && value.trim()!== '' ) {
    setName(value);
  } else if (name === 'number' && value.trim()!== '') {
    setNumber(value);
  }
}
  const handleSubmit=event=>{
    event.preventDefault()

    const contactData = {
        name: name,
        number: number,}

   onSubmitProps(contactData)
   console.log("dataFromForm", contactData)
   
   reset()
}

const reset=()=>{
    setName('')
    setNumber('')
}
 const nameInputId = shortid.generate();
 const phoneInputId = shortid.generate();
 return (
          <form onSubmit={handleSubmit} className={css.form}>
            <label htmlFor={nameInputId} className={css.labelName}>Name</label>
            <input
            className={css.inputName}
              value={name}
              onChange={handleInputChange}
              type="text"
              name="name"
              ref={inputNameRef}
              id={nameInputId}
              pattern="^[A-Za-z\u0080-\uFFFF ']+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor={phoneInputId} className={css.labelNumber}>Number</label>
            <input
            className={css.inputNumber}
              value={number}
              onChange={handleInputChange}
              type="tel"
              name="number"
              id={phoneInputId}
              pattern="^(\+?[0-9.\(\)\-\s]*)$"           
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required/>
            <button className={css.formBtn} type="submit">Add contact</button>
          </form>
      );    
}
ContactForm.propTypes={
  onSubmitProps: PropTypes.func.isRequired,
}

export default ContactForm
  
