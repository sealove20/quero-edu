import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function ResultCardCheckbox({ item, handleCheckbox }) {
  return (
    <div className='modal-results-checkbox-wrapper' data-test='result-card-checkbox-component'>
      <input type='checkbox' className='modal-results-checkbox' onChange={(event) => handleCheckbox(event, item)}/>
      <label className='modal-results-checkbox-label'></label>
    </div>
  );
}

ResultCardCheckbox.propTypes = {
  index: PropTypes.number
}

export default ResultCardCheckbox;