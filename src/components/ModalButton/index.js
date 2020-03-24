import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ModalButton({ openModal }) {
  return (
    <div className='modal-button-wrapper' onClick={() => openModal()} data-test='modal-button-component'>
      <FontAwesomeIcon icon={faPlusCircle} className='modal-button-icon' />
      <p className='modal-button-title'>Adicionar bolsa</p>
      <p className='modal-button-text'>Clique para adicionar bolsas de cursos do seu interesse</p>
    </div>
  );
}

ModalButton.propTypes = {
  openModal: PropTypes.func
}

export default ModalButton