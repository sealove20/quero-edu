import React from 'react';

import './styles.scss'

import Star from '../Stars'

export default function CourseCard({ course }) {
  return (
    <div className='course-container'>
      <img src={course.university.logo_url} alt='logo' className='course-university-logo' />
      <div className='course-name-and-university-name-wrapper'>
        <p className='course-university-name'>{course.university.name}</p>
        <p className='course-name'>{course.course.name}</p>
      </div>
      <div className='course-stars-wrapper'>
        <p className='course-score'>{course.university.score}</p>
        <Star totalStars={5} score={course.university.score} />
      </div>
      <hr/>
      <div className='course-kind-and-shift'>
        <p className='course-kind'>{course.course.kind.toUpperCase()}</p>
        &bull;
        <p className='course-shift'>{course.course.shift.toUpperCase()}</p>
      </div>
      <p className='course-start-date'>Início das aulas em: {course.start_date}</p>
      <hr className='horizontal-line'/>
      <div className='course-price-wrapper'>
        <p className='course-price-name'>Mensalidade com o Quero Bolsa:</p>
        <p className='course-full-price'>R${course.full_price}</p>
        <div className='course-with-discount-wrapper'>
          <p className='course-with-discount'>R$ {course.price_with_discount} </p>
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