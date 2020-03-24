import React from 'react';

import './styles.scss';

export default function BreadCrumb() {
  return (
    <ul className='breadcrumb-container' data-test='breadcrumb-component'>
      <li className='breadcrumb-item'>Home</li>
      <li>/</li>
      <li className='breadcrumb-item'>Minha conta</li>
      <li>/</li>
      <li className='breadcrumb-item breadcrumb-active'>Bolsas favoritas</li>
    </ul>
  )
}