import React, { useState } from 'react';

import './styles.scss';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  function toggleDropDown() {
    setIsDropDownOpen(!isDropDownOpen);
  }

  return (
    <>
      <button className='dropdown-button' onClick={toggleDropDown}>
        <p className='dropdown-button-text'>Menu</p>
        <FontAwesomeIcon
          icon={isDropDownOpen ? faAngleUp : faAngleDown}
          className='dropdown-icon'
        />
      </button>
      {isDropDownOpen ? (
        <ul className={isDropDownOpen ? 'dropdown-content' : ''}>
          <li> Menu 1 </li>
          <li> Menu 2 </li>
        </ul>
      ) : null}
    </>
  );
}
