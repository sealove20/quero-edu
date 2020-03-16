import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DropDown({ toggleDropDown,  isDropDownOpen}) {
  return (
    <div data-test='dropdown-component'>
      <button className='dropdown-button' onClick={toggleDropDown} data-test='dropdown-button'>
        <p className='dropdown-button-text'>Menu</p>
        <FontAwesomeIcon
          icon={isDropDownOpen ? faAngleUp : faAngleDown}
          className='dropdown-icon'
        />
      </button>
      {isDropDownOpen ? (
        <ul className={isDropDownOpen ? 'dropdown-content' : ''} data-test='dropdown-menu'>
          <li> Pré-matrículas </li>
          <li> Bolsas Favoritas </li>
        </ul>
      ) : null}
    </div>
  );
}

DropDown.propTypes = {
  toggleDropDown: PropTypes.func,
  isDropDownOpen: PropTypes.bool,
}

export default DropDown;