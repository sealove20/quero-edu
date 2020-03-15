import React from 'react';

import './styles.scss';

import FooterCard from '../FooterCard'

import { faComments, faHeart, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="cards-wrapper">
        <FooterCard iconName={faWhatsapp} cardTitle={'0800 123 2222'} cardText={'Segunda a sexta de 8h às 22h'} shortText={"Seg - Sex 8h-22h"} className='whats' />
        <FooterCard iconName={faComments} cardTitle={'Chat ao vivo'} cardText={'Seg - Sex 8h-22h'} shortText={'Chat'} className='chat'/>
        <FooterCard iconName={faEnvelope} cardTitle={'Mande um e-mail'} cardText={'Respondemos rapidinho'} shortText={'E-mail'} className='mail'/>
        <FooterCard iconName={faInfoCircle} cardTitle={'Central de Ajuda'} cardText={'Encontre todas as pessoas'} shortText={'Ajuda'} className='help'/>
      </div>
        <div className='footer-message-wrapper'>
          <p className='footer-message'>Feito com <FontAwesomeIcon icon={ faHeart } className='footer-icon' /> pela Quero Educação</p>
        </div>

    </footer>
  )
}