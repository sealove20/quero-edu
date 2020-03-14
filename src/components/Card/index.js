import React from 'react';

import './styles.scss'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card() {
  return (
    <div className='card-wrapper' data-test='card-component'>
      <FontAwesomeIcon icon={faPlusCircle} className='card-icon' />
      <p className='card-title'>Adicionar bolsa</p>
      <p className='card-text'>Clique para adicionar bolsas de cursos do seu interesse</p>
    </div>
  )
}