import React, {useState} from 'react';

import './styles.scss';

import DropDown from '../DropDown';

export default function Nav() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  function toggleDropDown() {
    setIsDropDownOpen(!isDropDownOpen);
  }
  return (
    <nav className='container' data-test="nav-component">
      <p className='nav-current-menu'>Minha conta</p>
      <DropDown toggleDropDown={toggleDropDown} isDropDownOpen={isDropDownOpen}/>
    </nav>
  );
}
