import React from 'react';

import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterCard({ iconName, cardTitle, cardText, shortText }) {
  return (
    <div className='container'>
      <div className='footer-wrapper'>        
        <FontAwesomeIcon icon={ iconName } className='footer-icon' />
        <div className='card-text-wrapper'>
          <p className='card-title'>{cardTitle}</p>
          <p className='card-text'>{cardText}</p>
          <p className='card-short-text'>{shortText}</p>
        </div>
      </div>
    </div>
  )
}

