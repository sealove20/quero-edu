import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { useScholarships } from '../../context/Scholarships'; 

import FormSelect from '../FormSelect';
import FormCheckbox from '../FormCheckbox';
import FormRangePrice from '../FormRangePrice';
import HorizontalLine from '../HorizontalLine';
import ResultCard from '../ResultCard';
import ActionButtons from '../ActionButtons';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Modal({ isModalOpen, closeModal }) {
  const { scholarships, filterByCity, filterByCourse } = useScholarships();
  const [value, setValue] = useState(20000);
  const [city, setCity] = useState('all');
  const [course, setCourse] = useState('all');
  const [filteredScholarships, setFilteredScholarships] = useState(scholarships);

  const filters = {
    city: 'all',
    course: 'all'
  }

  useEffect(() => {
    let result = filterByCity(scholarships, city);
    console.log('111111111', result);
    result = filterByCourse(result, course);
    console.log('222222222222222',result);
    setFilteredScholarships(result);
  }, [city, course]);

  // useEffect(() => {
  //   course === 'all' 
  //   ? setFilteredScholarships(scholarships)
  //   : setFilteredScholarships(scholarships.filter(scholarship => scholarship.course.name === course));
  // }, [course]);

  const cities = [...new Set(scholarships.map(course => course.campus.city))];
  const courses = [...new Set(scholarships.map(course => course.course.name))];

  function handlePrice(event) {
    setValue(event.target.value)
  }

  function handleSelectCiTyChange(event) {
    setCity(event.target.value);
  }

  function handleSelectCourseChange(event) {
    setCourse(event.target.value);
  }

  if(!isModalOpen) return null
  return (
    <div className='modal'>
      <FontAwesomeIcon icon={faTimes} onClick={() => closeModal()} className='modal-close-icon' />
      <div className='modal-content'>
        <div className='modal-wrapper'> 
          <p className='modal-header-title'>Adicionar bolsa</p>
          <p className='modal-header-text'>Filtre e adicione as bolsas de seu interesse.</p>
          <form className='modal-form'>
            <div className='modal-form-select-container'>
              <FormSelect label='SELECIONE SUA CIDADE' items={cities} handleSelectChange={handleSelectCiTyChange}/>
              <FormSelect label='SELECIONE O CURSO DE SUA PREFERÊNCIA' items={courses} handleSelectChange={handleSelectCourseChange}/>
            </div>
            <div className='modal-form-kind-and-price-wrapper'>
              <div className='modal-form-kind-wrapper'>
                <p className='modal-form-kind-text'>COMO VOCÊ QUER ESTUDAR?</p>
                <div className='modal-form-kind-checkbox-wrapper'>
                  <FormCheckbox title='Presencial' name='presencial' id='presencial' labelId='presencial'/>
                  <FormCheckbox title='A distância' name='ead' id='ead' labelId='ead'/>
                </div>
              </div>
              <div className='modal-form-price-wrapper'>
                <FormRangePrice value={value} handlePrice={handlePrice} min='0' max='10000' />
              </div>
            </div>

          </form>
          <div className='modal-results-filters-wrapper'>
            <p className='modal-results-filters-text'>Resultado:</p>
            <div className='modal-results-filters-select-wrapper'>
              <label htmlFor='order-by' className='modal-results-filters-select-label'>Ordenar por</label>
              <select name='order' id='order-by' className='modal-results-filters-select'>
                <option value='university'>Nome da faculdade</option>
                <option value='course'>Nome do curso</option>
                <option value='price'>Preço</option>
              </select>
            </div>
          </div>
          <HorizontalLine />
          {filteredScholarships.map((course, index) => (
          <>
            <ResultCard key={index} index={index} item={course} />
            <HorizontalLine />
          </> 
          ))}
          <ActionButtons firstbuttonText='Cancelar' secondButtonText='Adicionar bolsa(s)'>
            <button className='modal-delete'>Cancelar</button>
            <button className='modal-see'>Adicionar bolsa(s)</button>
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