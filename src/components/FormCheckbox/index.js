import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function FormCheckBox({ title, name, id, labelId, handleCheckboxChange, checked }) {
  return (
    <>
      <input 
        type='checkbox' 
        name={name} 
        id={id} 
        className='modal-form-checkbox' 
        defaultChecked={checked} 
        onChange={() => handleCheckboxChange()}
      />
      <label htmlFor={labelId} className='modal-form-checkbox-label'>
        {title}
      </label>
    </>
  )
}

FormCheckBox.propTypes = {
  title: PropTypes.string, 
  name: PropTypes.string, 
  id: PropTypes.string, 
  labelId: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
  checked: PropTypes.bool
}

export default FormCheckBox;
