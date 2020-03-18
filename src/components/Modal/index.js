import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { useCourses } from '../../context/Courses'; 

import FormSelect from '../FormSelect';
import FormCheckbox from '../FormCheckbox';
import FormRangePrice from '../FormRangePrice';
import HorizontalLine from '../HorizontalLine';
import ResultCard from '../ResultCard';
import ActionButtons from '../ActionButtons';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Modal({ isModalOpen, closeModal }) {
  const { courses } = useCourses();
  const [value, setValue] = useState(20000);
  const [city, setCity] = useState('');

  const filter = courses.filter(course => course.course.kind === 'EaD');

  const cities = [... new Set(courses.map(course => course.campus.city))];

  const coursesNames = ['Ciências Contábeis', 'Ciências da computação'];

  function handlePrice(event) {
    setValue(event.target.value)
  }

  function handleSelectChange(event) {
    setCity(event.target.value);
    console.log(city);
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
              <FormSelect label='SELECIONE SUA CIDADE' items={cities} handleSelectChange={handleSelectChange}/>
              <FormSelect label='SELECIONE O CURSO DE SUA PREFERÊNCIA' items={coursesNames} />
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
          {filter.map((course, index) => (
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