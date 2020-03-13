import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import HeaderInfo from '../HeaderInfo';

import queroIcon from '../../assets/images/quero.svg';
import './styles.scss';

export default function Header() {
  return (
    <header>
      <HeaderInfo
        wrapperClass={'header-info'}
        iconName={faInfoCircle}
        text={'Ajuda'}
      />
      <div className="header-logo-wrapper">
        <img src={queroIcon} alt="Quero Educação Logo" />
      </div>
      <HeaderInfo
        wrapperClass={'header-user'}
        iconName={faUserCircle}
        text={'Conta'}
      />
    </header>
  );
}
