import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function ActionButtons({ children }) {
  return (
    <div className='course-buttons-wrapper' data-test='action-buttons-component'>
      {children}
    </div>
  )
}

ActionButtons.propTypes = {
  children: PropTypes.object,
}

export default ActionButtons;