import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function FormSelect({ label, items, handleSelectChange, name, id, labelId }) {
  return (
    <div className='modal-form-select-wrapper'>
      <label htmlFor={labelId} className='modal-form-select-label'>{label}</label>
      <select name={name} id={id} className='modal-form-select' onChange={event => handleSelectChange(event)}>
        <option value='all'></option>
        {items.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

FormSelect.propTypes = {
  label: PropTypes.string, 
  items: PropTypes.array,
  handleSelectChange: PropTypes.func
}

export default FormSelect;