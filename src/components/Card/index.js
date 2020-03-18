import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

function Card({ children }) {
  return (
    <div className='card-wrapper'  data-test='card-component'>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.object
}

export default Card;