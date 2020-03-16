import React from 'react';

import './styles.scss';

import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function renderStars(score) {
  const num = 3.2;
  const intPart = Math.floor(num);
  const decimalPart = num - Math.floor(num);
  console.log(num)
}

export default function Stars() {
  const totalStars = 5;
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className='star'/>
      ))}
    </>
  )
}