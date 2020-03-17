import React, { useState } from 'react';

import './styles.scss';

import { useCourses } from '../../context/Courses'; 

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ isModalOpen, closeModal }) {
  const { courses, setCourses } = useCourses();
  const [value, setValue] = useState(20000);
  if(!isModalOpen) return null
  return (
    <div className='modal'>
      <FontAwesomeIcon icon={faTimes} onClick={() => closeModal()} className='modal-close-icon' />
      <div className='modal-content'>
        <div className='modal-wrapper'> 
          <p className='modal-header-title'>Adicionar bolsa</p>
          <p className='modal-header-text'>Filtre e adicione as bolsas de seu interesse.</p>
          <form className='modal-form'>
            <div className='modal-form-select-wrapper'>
              <label htmlFor='cities' className='modal-form-select-label'>
                SELECIONE SUA CIDADE
              </label>
              <select name='city' id='cities' className='modal-form-select'>
                <option value='all'>Todas as cidades</option>
                <option value='cuiaba'>São José dos Campos</option>
              </select>
            </div>
            <div className='modal-form-select-wrapper'>
              <label htmlFor='courses' className='modal-form-select-label'>
                SELECIONE O CURSO DE SUA PREFERÊNCIA
              </label>
              <select name='course' id='courses' className='modal-form-select'>
                <option value='all'>Todos os cursos</option>
                <option value='cuiaba'>Cuiabá</option>
              </select>
            </div>
            <div className='modal-form-kind-wrapper'>
              <p className='modal-form-kind-text'>COMO VOCÊ QUER ESTUDAR?</p>
              <div className='modal-form-kind-checkbox-wrapper'>
                <input type='checkbox' name='presencial' id='presencial' className='modal-form-checkbox'/>
                <label htmlFor='presencial' className='modal-form-checkbox-label'>
                  Presencial
                </label>
              <input type='checkbox' name='ead' id='ead'  className='modal-form-checkbox'/>
              <label htmlFor='ead' className='modal-form-checkbox-label'>
                A distância
              </label>
              </div>
            </div>
            <div className='modal-form-price-wrapper'>
              <label htmlFor='prices' className='modal-form-price-label'>
                ATÉ QUANTO PODE PAGAR?
              </label>
              <p className='modal-form-price-value'>R${value}</p>
              <input 
                type='range' 
                name='prices' 
                id='prices' 
                min='0' max='10000'
                value={value}
                onChange={e => setValue(e.target.value)}
                className='modal-form-range'
              />
            </div>
          </form>
          <div className='modal-results-filters-wrapper'>
            <p className='modal-results-filters-text'>Resultado:</p>
            <div className='modal-results-filters-select-wrapper'>
              <label htmlFor='order-by' className='modal-results-filters-select-label'>Ordenar por</label>
              <select name='order' id='order-by' className='modal-results-filters-select'>
                <option value='all'>Nome da faculdade</option>
                <option value='cuiaba'>Nome do curso</option>
                <option value='cuiaba'>Valor</option>
              </select>
            </div>
          </div>
          <hr className='horizontal-line'/>
          {courses.map(course => (
          <>
            <div className='modal-results-wrapper'>
              <input type="checkbox" name="course" id="course" className='modal-results-checkbox'/>
              <label htmlFor='course' className='modal-results-university-logo-wrapper'>
                <img src={course.university.logo_url} alt="logo" className='modal-results-university-logo'/>
              </label>
              <div className='modal-results-info'>
                <div className='modal-results-course-name-and-level-wrapper'>
                  <p className='modal-results-course-name'>{course.course.name}</p>
                  <p className='modal-results-course-level'>{course.course.level}</p>
                </div>
                <div className="modal-results-course-price-and-discount-wrapper">
                  <div className='modal-results-course-discount-green'>
                    <p className='modal-results-course-discount'>Bolsa de &nbsp;</p>
                    <p className='modal-results-course-discount-green'>{course.discount_percentage}%</p>
                  </div>
                  <p className='modal-results-course-price'>R${course.price_with_discount}/mês</p>
                </div>
              </div>
            </div>
            <hr className='horizontal-line'/>
          </> 
          ))}
          <div className='course-buttons-wrapper'>
              <button className='course-delete-button'>Cancelar</button>
              <button className='course-see-offert'>Adicionar bolsa(s)</button>
            </div>
        </div>
      </div>
    </div>
  )
};