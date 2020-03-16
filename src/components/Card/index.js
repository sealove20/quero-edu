import React from 'react';

import './styles.scss'

export default function Card({ children }) {
  return (
    <div className='card-wrapper'  data-test='card-component'>
      {children}
    </div>
  )
}