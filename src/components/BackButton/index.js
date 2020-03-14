import React from 'react';

import './styles.scss'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function() {
  return (
    <button className="back-button" data-test='back-button-component'>
      <FontAwesomeIcon icon={faAngleLeft} />
      <p>Minha Conta</p>
    </button>
  )
}