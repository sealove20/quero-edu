import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function FormSelect({ label, items }) {
  return (
    <div className='modal-form-select-wrapper'>
      <label htmlFor='cities' className='modal-form-select-label'>{label}</label>
      <select name='city' id='cities' className='modal-form-select'>
        <option value='all'></option>
        {items.map((item, index) => (
          <option key={index} value='cuiaba'>{item}</option>
        ))}
      </select>
    </div>
  )
}

FormSelect.propTypes = {
  label: PropTypes.string, 
  items: PropTypes.array
}

export default FormSelect;