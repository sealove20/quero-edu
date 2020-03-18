import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function ResultCardCheckbox({ index }) {
  return (
    <div className='modal-results-checkbox-wrapper'>
      <input type="checkbox" id={index}  className='modal-results-checkbox'/>
      <label htmlFor={index} className='modal-results-checkbox-label'></label>
    </div>
  );
}

ResultCardCheckbox.propTypes = {
  index: PropTypes.number
}

export default ResultCardCheckbox;