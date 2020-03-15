import React from 'react';

import './styles.scss';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ isModalOpen, closeModal }) {
  if(!isModalOpen) return null
  return (
    <div className="modal">
      <FontAwesomeIcon icon={faTimes} onClick={() => closeModal()}/>
      <div className="modal-content">
        <form>
          <input type="text" name="" id=""/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="text" name="" id=""/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="text" name="" id=""/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="text" name="" id=""/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="text" name="" id=""/>
          <textarea name="" id="" cols="30" rows="10"></textarea>

        </form>
      </div>
    </div>
  )
};