import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

import { useFavoritesScholarships } from '../../context/FavoritesScholarships';

import ActionButtons from '../ActionButtons';
import Star from '../Stars'

function CourseCard({ item }) {
  const { removeFavorite, removeFavoriteStorage } = useFavoritesScholarships();
  const { 
    university: { logo_url, name: universityName, score }, 
    course: { name: courseName, kind, shift }, start_date, full_price, price_with_discount} = item;

    function handleDelete(scholarshipToDelete) {
      removeFavorite(scholarshipToDelete);
      removeFavoriteStorage(scholarshipToDelete);
    }
  return (
    <div className='course-container'>
      <div className='course-logo-wrapper'>
        <img src={logo_url} alt='logo' className='course-university-logo' />
      </div>
      <div className='course-name-and-university-name-wrapper'>
        <p className='course-university-name'>{universityName}</p>
        <p className='course-name'>{courseName}</p>
      </div>
      <div className='course-stars-wrapper'>
        <p className='course-score'>{score}</p>
        <Star totalStars={5} score={score} />
      </div>
      <hr/>
      <div className='course-kind-and-shift'>
        <p className='course-kind'>{kind.toUpperCase()}</p>
        &bull;
        <p className='course-shift'>{shift.toUpperCase()}</p>
      </div>
      <p className='course-start-date'>Início das aulas em: {start_date}</p>
      <hr className='horizontal-line'/>
      <div className='course-price-wrapper'>
        <p className='course-price-name'>Mensalidade com o Quero Bolsa:</p>
        <p className='course-full-price'>R${full_price}</p>
        <div className='course-with-discount-wrapper'>
          <p className='course-with-discount'>R$ {price_with_discount} </p>
          <p className='course-price-text'> {`/mês`} </p>
        </div>
      </div>
      <ActionButtons className='course-buttons-wrapper'>
        <button className='course-delete' onClick={() => handleDelete(item)}>Excluir</button>
        <button className='course-see'>Ver Oferta</button>
      </ActionButtons>
    </div>
  );
}

CourseCard.propTypes = {
  item: PropTypes.object
}

export default CourseCard;