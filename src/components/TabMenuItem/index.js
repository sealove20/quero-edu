import React from 'react';
import PropTypes from 'prop-types'

import './styles.scss'

function TabMenuItem({ text, onClick, value, active }) {
  return (
    <div className={`tab-menu-item ${active === value ? "active" : ""}`} onClick={onClick} data-value={value}> 
      <p className='tab-menu-text'>{text}</p>
    </div>
  );
}

TabMenuItem.propTypes = {
  text: PropTypes.string, 
  onClick: PropTypes.func, 
  value: PropTypes.string, 
  active: PropTypes.string 
}

export default TabMenuItem;