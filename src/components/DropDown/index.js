import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DropDown({ toggleDropDown,  isDropDownOpen, text, items }) {
  return (
    <div data-test='dropdown-component'>
      <button className='dropdown-button' onClick={toggleDropDown} data-test='dropdown-button'>
        <p className='dropdown-button-text'>{text}</p>
        <FontAwesomeIcon
          icon={isDropDownOpen ? faAngleUp : faAngleDown}
          className='dropdown-icon'
        />
      </button>
      {isDropDownOpen ? (
        <ul className={isDropDownOpen ? 'dropdown-content' : ''} data-test='dropdown-menu'>
          {items.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
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