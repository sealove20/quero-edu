import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import starOff from '../../assets/images/star-regular.svg';

function Stars({ totalStars, score, item }) {
  const intPart = Math.floor(score);
  let decimalPart = score - Math.floor(score);

  return (
    <>
      {[...Array(totalStars)].map((n, i) => {
        if (i + 1 <= intPart) {
          return <FontAwesomeIcon key={`${item.course.name}${item.university.name}${i}`} icon={faStar} className='star' swapOpacity />
        } else if (decimalPart > 0) {
          decimalPart = 0;
          return <FontAwesomeIcon key={i} icon={faStarHalfAlt} className='star'/>
        } else {
          return <img key={i} src={starOff} alt="" className="star-off" />
        }
      })}
    </>
  );
}

Stars.propTypes = {
  totalStars: PropTypes.number, 
  score: PropTypes.number,
  item: PropTypes.object
}

export default Stars;