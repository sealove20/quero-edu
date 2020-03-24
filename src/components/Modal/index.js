import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { useScholarships } from '../../context/Scholarships'; 
import { useFavoritesScholarships } from '../../context/FavoritesScholarships';
import { compareObjects } from '../../utils/compareObjects'; 

import FormSelect from '../FormSelect';
import FormCheckbox from '../FormCheckbox';
import FormRangePrice from '../FormRangePrice';
import HorizontalLine from '../HorizontalLine';
import ResultCard from '../ResultCard';
import ActionButtons from '../ActionButtons';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Modal({ isModalOpen, closeModal }) {
  const { 
    scholarships, 
    filterByCity, 
    filterByCourse, 
    filterByPresential,
    filterByRemote,
    filterByPrice,
    sortUniversityName,
    sortCourseName,
    sortPrice
  } = useScholarships();
  
  const {
    favoritesScholarships, setFavoritesScholarships, setFavoritesStorage 
  } = useFavoritesScholarships();
  
  const [price, setPrice] = useState(20000);
  const [city, setCity] = useState('all');
  const [course, setCourse] = useState('all');
  const [presential, setPresential] = useState(true);
  const [remote, setRemote] = useState(true);
  const [sortScholarship, setSortScholarship] = useState('university');
  const [filteredScholarships, setFilteredScholarships] = useState(scholarships);
  const [memoModalFavoriteScholarships, setMemoModalFavoriteScholarships] = useState(favoritesScholarships);
  const [modalFavoriteScholarships, setModalFavoriteScholarships] = useState([]);

  const cities = [...new Set(scholarships.map(course => course.campus.city))];
  const courses = [...new Set(scholarships.map(course => course.course.name))];

  //applyFilters
  useEffect(() => {
    let result = filterByCity(scholarships, city);

    result = filterByCourse(result, course);
    result = filterByPresential(result, presential);
    result = filterByRemote(result, remote);
    result = filterByPrice(result, price);

    if(sortScholarship === 'university') {
      result = result.sort(sortUniversityName);
    } else if(sortScholarship === 'course') {
      result = result.sort(sortCourseName);
    } else if(sortScholarship === 'price') {
      result = result.sort(sortPrice);
    }

    setMemoModalFavoriteScholarships(favoritesScholarships);

    const favorites = JSON.stringify(favoritesScholarships);
    result = result.filter(filteredScholarship => {
      return !favorites.includes(JSON.stringify(filteredScholarship));
    });
    setFilteredScholarships(result);

  }, [city, course, presential, remote, price, sortScholarship, favoritesScholarships]);

  //modalReset
  useEffect(() => {
    setCity('all');
    setCourse('all');
    setPresential(true);
    setRemote(true);
    setPrice(20000);

    if(favoritesScholarships.length) {
      const favorites = JSON.stringify(favoritesScholarships);
      const duplicateFavorites = filteredScholarships.filter(filteredScholarship => {
        return !favorites.includes(JSON.stringify(filteredScholarship));
      });
      setFilteredScholarships(duplicateFavorites);
    };
  }, [isModalOpen]);

  function handleSelectCiTyChange(event) {
    setCity(event.target.value);
  }

  function handleSelectCourseChange(event) {
    setCourse(event.target.value);
  }
  
  function handleSelectSortChange(event) {
    setSortScholarship(event.target.value);
  }

  function handleCheckBoxPresentialChange() {
    setPresential(!presential);
  }

  function handleCheckBoxRemoteChange() {
    setRemote(!remote);
  }

  function handlePrice(event) {
    setPrice(event.target.value)
  }

  function handleCheckboxFavouriteScholarshipChange(event, favorite) {
    if(event.target.checked) {
      setModalFavoriteScholarships([...modalFavoriteScholarships, favorite]);
    } else {
      const removeFavorite = modalFavoriteScholarships.filter(modalFavorite => !compareObjects(modalFavorite, favorite ))
      setModalFavoriteScholarships(removeFavorite);
    }
  }

  function addFavouriteScholarships() {
    setFavoritesScholarships([...memoModalFavoriteScholarships,...modalFavoriteScholarships]);
    setFavoritesStorage([...memoModalFavoriteScholarships,...modalFavoriteScholarships]);
    setModalFavoriteScholarships([]);
    closeModal();
  }

  if(!isModalOpen) return null
  return (
    <div className='modal' data-test='modal-component'>
      <FontAwesomeIcon icon={faTimes} onClick={() => closeModal()} className='modal-close-icon' />
      <div className='modal-content'>
        <div className='modal-wrapper'> 
          <p className='modal-header-title'>Adicionar bolsa</p>
          <p className='modal-header-text'>Filtre e adicione as bolsas de seu interesse.</p>
          <form className='modal-form'>
            <div className='modal-form-select-container'>
              <FormSelect 
                name={'city'}
                id={'cities'}
                labelId={'cities'}
                label='SELECIONE SUA CIDADE' 
                items={cities} 
                handleSelectChange={handleSelectCiTyChange}
              />
              <FormSelect 
                name={'course'}
                id={'courses'}
                labelId={'courses'}
                label='SELECIONE O CURSO DE SUA PREFERÊNCIA' 
                items={courses} 
                handleSelectChange={handleSelectCourseChange}/>
            </div>
            <div className='modal-form-kind-and-price-wrapper'>
              <div className='modal-form-kind-wrapper'>
                <p className='modal-form-kind-text'>COMO VOCÊ QUER ESTUDAR?</p>
                <div className='modal-form-kind-checkbox-wrapper'>
                  <FormCheckbox 
                    title='Presencial' 
                    name='presencial' 
                    id='presencial' 
                    labelId='presencial' 
                    checked={presential} 
                    handleCheckboxChange={handleCheckBoxPresentialChange}
                  />
                  <FormCheckbox 
                    title='A distância' 
                    name='ead' 
                    id='ead' 
                    labelId='ead'                     
                    checked={remote} 
                    handleCheckboxChange={handleCheckBoxRemoteChange}
                  />
                </div>
              </div>
              <div className='modal-form-price-wrapper'>
                <FormRangePrice value={price} handlePrice={handlePrice} min='0' max='20000' />
              </div>
            </div>

          </form>
          <div className='modal-results-filters-wrapper'>
            <p className='modal-results-filters-text'>Resultado:</p>
            <div className='modal-results-filters-select-wrapper'>
              <label htmlFor='order-by' className='modal-results-filters-select-label'>Ordenar por</label>
              <select name='order' id='order-by' className='modal-results-filters-select' onChange={event => handleSelectSortChange(event)}>
                <option value='university'>Nome da faculdade</option>
                <option value='course'>Nome do curso</option>
                <option value='price'>Preço</option>
              </select>
            </div>
          </div>
          <HorizontalLine />
          {filteredScholarships.map((course, index) => (
          <Fragment key={`${index}FRAGMENT`}>
            <ResultCard 
              key={`${course.course.name}${course.university.name}MODAL`}
              item={course} 
              handleCheckboxFavouriteScholarshipChange={handleCheckboxFavouriteScholarshipChange}
            />
            <HorizontalLine key={`${index}HR`}/>
          </Fragment> 
          ))}
          <ActionButtons firstbuttonText='Cancelar' secondButtonText='Adicionar bolsa(s)'>
            <button className='modal-cancel' onClick={() => closeModal()}>Cancelar</button>
            <button className={modalFavoriteScholarships.length > 0 ? 'modal-add' : 'modal-add-disabled'} onClick={() => addFavouriteScholarships()} >Adicionar bolsa(s)</button>
          </ActionButtons>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool, 
  closeModal: PropTypes.func
}

export default Modal;