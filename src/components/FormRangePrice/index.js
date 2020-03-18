import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function FormRangePrice({ value, handlePrice, min, max }) {
  return (
    <>
      <label htmlFor='prices' className='modal-form-price-label'>
      ATÉ QUANTO PODE PAGAR?
      </label>
      <p className='modal-form-price-value'>R${value}</p>
      <input 
        type='range' 
        name='prices' 
        id='prices' 
        min={min} max={max}
        value={value}
        onChange={e => handlePrice(e)}
        className='modal-form-range'
      />
    </>
  )
}

FormRangePrice.propTypes = {
  value: PropTypes.number, 
  handlePrice: PropTypes.func, 
  min: PropTypes.string, 
  max: PropTypes.string
}

export default FormRangePrice;