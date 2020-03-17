import React, { useState } from 'react';

import './styles.scss';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ isModalOpen, closeModal }) {
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
          <div className='modal-results-wrapper'>
            <p className='modal-results-text'>Resultado:</p>
            <div className='modal-results-select-wrapper'>
              <label htmlFor='order-by' className='modal-results-select-label'>Ordenar por</label>
              <select name='order' id='order-by' className='modal-results-select'>
                <option value='all'>Nome da faculdade</option>
                <option value='cuiaba'>Nome do curso</option>
                <option value='cuiaba'>Valor</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};