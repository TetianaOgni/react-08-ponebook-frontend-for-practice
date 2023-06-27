import PropTypes from "prop-types";
import css from './Filter.module.css'

const Filter = ({value, onChange}) => {
  return(
    <label className={css.labelFilter}>Find contacts by name
        <input className={css.inputFilter} type="text" 
        value={value} onChange={onChange} />
    </label>            
  )
    
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

export default Filter