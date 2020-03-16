import React from 'react';

import './styles.scss'

import Star from '../Stars'

import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CourseCard({ courses }) {
  return (
    <div className='course-container'>
      <img src={courses[0].university.logo_url} alt='logo' className='course-university-logo' />
      <div className='course-name-and-university-name-wrapper'>
        <p className='course-university-name'>{courses[0].university.name}</p>
        <p className='course-name'>{courses[0].course.name}</p>
      </div>
      <div className='course-stars-wrapper'>
        <p className='course-score'>{courses[0].university.score}</p>
        <Star />
      </div>
      <hr/>
      <div className='course-kind-and-shift'>
        <p>{courses[0].course.kind.toUpperCase()}</p>
        &bull;
        <p>{courses[0].course.shift.toUpperCase()}</p>
      </div>
      <p className='course-start-date'>Início das aulas em: {courses[0].start_date}</p>
      <hr/>
      <div className='course-price-wrapper'>
        <p className='course-price-name'>Mensalidade com o Quero Bolsa:</p>
        <p className='course-full-price'>R${courses[0].full_price}</p>
        <div className='course-with-discount-wrapper'>
          <p className='course-with-discount'>R$ {courses[0].price_with_discount} </p>
          <p className='course-price-text'> {`/mês`} </p>
        </div>
      </div>
      <div className='course-buttons-wrapper'>
        <button className='course-delete-button'>Excluir</button>
        <button className='course-see-offert'>Ver Oferta</button>
      </div>
    </div>
  )
}