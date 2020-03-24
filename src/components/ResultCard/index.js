import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import ResultCardCheckbox from '../ResultCardCheckbox';

function ResultCard({ item, handleCheckboxFavouriteScholarshipChange }) {
  const { university : {logo_url}, course : { name, level}, discount_percentage, price_with_discount } = item;

  return (
    <div className='modal-results-wrapper'>
      <ResultCardCheckbox  item={item} handleCheckbox={handleCheckboxFavouriteScholarshipChange}/>
      <img src={logo_url} alt='logo' className='modal-results-university-logo'/>
      <div className='modal-results-info'>
        <div className='modal-results-course-name-and-level-wrapper'>
          <p className='modal-results-course-name'>{name}</p>
          <p className='modal-results-course-level'>{level}</p>
        </div>
        <div className='modal-results-course-price-and-discount-wrapper'>
          <div className='modal-results-course-discount-green-wrapper'>
            <p className='modal-results-course-discount'>Bolsa de &nbsp;</p>
            <p className='modal-results-course-discount-green'>{Math.floor(discount_percentage)}%</p>
          </div>
          <p className='modal-results-course-price'>R${price_with_discount}/mês</p>
        </div>
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  item: PropTypes.object
}

export default ResultCard;