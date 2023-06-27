import PropTypes from "prop-types";
import css from './ContactList.module.css'


const ContactList = ({contacts, onDeleteContact}) => {

 return (
   <ul className={css.ContactList}>
   {contacts.map(({name, number, id}) => (
          <li key={id} className={css.ContactItem}>
            <div className={css.wrap}>
            <p className={css.ContactName}>{name}:</p>
            <span className={css.ContactNumber}>{number}</span>
            </div>
            <button className={css.ContactBtn}onClick={() => {onDeleteContact(id)}}>
              Delete
            </button>
          </li>
        ))}
   </ul>
 )
}
   
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList