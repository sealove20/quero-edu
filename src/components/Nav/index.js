import React from 'react';

import './styles.scss';

import DropDown from '../DropDown';

export default function Nav() {
  return (
    <nav className='container'>
      <p className='nav-current-menu'>Minha conta</p>
      <DropDown />
    </nav>
  );
}
