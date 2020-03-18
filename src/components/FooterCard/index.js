import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FooterCard({ iconName, cardTitle, cardText, shortText }) {
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

FooterCard.propTypes = {
  iconName: PropTypes.object, 
  cardTitle: PropTypes.string, 
  cardText: PropTypes.string, 
  shortText: PropTypes.string
}

export default FooterCard;