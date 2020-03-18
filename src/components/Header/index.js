import React from 'react';

import './styles.scss';

import HeaderInfo from '../HeaderInfo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import queroIcon from '../../assets/images/quero.svg';

export default function Header() {
  return (
    <header id='header' data-test='header-component'>
      <>
      <span className='header-info' data-test='header-info-component'>
        <FontAwesomeIcon className='header-icons' icon={faInfoCircle} />
        <p className='header-info-mobile-text'>Ajuda</p>
        <p className='header-info-desktop-text'>Como Funciona</p>
      </span>
        <div className='header-card-wrapper'>
          <FontAwesomeIcon icon={faWhatsapp} className='header-whats-icon' />
          <div className='header-card-info-text-wrapper'>
            <p className='header-card-info-text-number'>0800 123 2222</p>
            <p className='header-card-info-text-message'>Envie mensagem ou ligue</p>
          </div>
        </div>
      </>
      <div className='header-logo-wrapper'>
        <img
          className='header-logo'
          src={queroIcon}
          alt='Quero Educação Logo'
        />
      </div>
      <span className='header-user' data-test='header-info-component'>
        <FontAwesomeIcon className='header-icons' icon={faUserCircle} />
        <p className='header-user-mobile-text'>Conta</p>
        <p className='header-user-desktop-text'>Nome Sobrenome</p>
      </span>
    </header>
  );
}
