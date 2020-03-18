import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function ActionButtons({ firstbuttonText, secondButtonText }) {
  return (
    <div className='course-buttons-wrapper'>
      <button className='course-delete-button'>{firstbuttonText}</button>
      <button className='course-see-offert'>{secondButtonText}</button>
    </div>
  )
}

ActionButtons.propTypes = {
  firstbuttonText: PropTypes.string,
  secondButtonText: PropTypes.string
}

export default ActionButtons;