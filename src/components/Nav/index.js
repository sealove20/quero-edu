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
      <div className='nav-current-menu-wrapper'>
        <p className='nav-current-menu'>Minha conta</p>
        <span className='nav-current-menu-desktop-wrapper'>
          <p className='nav-current-menu-desktop'>Pré-matrículas</p>
        </span>
        <span className='nav-current-menu-desktop-wrapper'>
          <p className='nav-current-menu-desktop'>Bolsas favoritas</p>
        </span>

      </div>
      <DropDown toggleDropDown={toggleDropDown} isDropDownOpen={isDropDownOpen} text={'Menu'} items={['Pré-matrículas','Bolsas Favoritas']}/>
    </nav>
  );
}
