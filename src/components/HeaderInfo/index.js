import React from 'react';
import PropTypes from 'prop-types';


import './styles.scss';

import FooterCard from '../FooterCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function HeaderInfo({ headerInfoCLass, iconName, mobileText, desktopText }) {
  return (
    <>
      <span className={headerInfoCLass} data-test='header-info-component'>
        <FontAwesomeIcon className='header-icons' icon={iconName} />
        <p className='header-info-mobile-text'>{mobileText}</p>
        <p className='header-info-desktop-text'>{desktopText}</p>
      </span>
      <div className='header-card-wrapper'>
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </>
  );
}

HeaderInfo.propTypes = {
  headerInfoCLass: PropTypes.string,
  iconName: PropTypes.object,
  mobileText: PropTypes.string,
  desktopText: PropTypes.string
};

export default HeaderInfo;
