import React, {useState} from 'react';

import './styles.scss';

import DropDown from '../DropDown';

export default function Nav() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  function toggleDropDown() {
    setIsDropDownOpen(!isDropDownOpen);
  }
  
  return (
    <nav className='nav-container' data-test='nav-component'>
      <p className='nav-current-menu'>Minha conta</p>
      <DropDown toggleDropDown={toggleDropDown} isDropDownOpen={isDropDownOpen} text={'Menu'} items={['Pré-matrículas','Bolsas Favoritas']}/>
    </nav>
  );
}
