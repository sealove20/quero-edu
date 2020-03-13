import React from 'react';

import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import HeaderInfo from '../HeaderInfo';

import queroIcon from '../../assets/images/quero.svg';
import './styles.scss';

export default function Header() {
  return (
    <header id='header' data-test='header-component'>
      <HeaderInfo
        headerInfoCLass={'header-info'}
        iconName={faInfoCircle}
        text={'Ajuda'}
      />
      <div className='header-logo-wrapper'>
        <img
          className='header-logo'
          src={queroIcon}
          alt='Quero Educação Logo'
        />
      </div>
      <HeaderInfo
        headerInfoCLass={'header-user'}
        iconName={faUserCircle}
        text={'Conta'}
      />
    </header>
  );
}
