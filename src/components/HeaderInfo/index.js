import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

function HeaderInfo({ headerInfoCLass, iconName, text }) {
  return (
    <span className={headerInfoCLass} data-test="header-info-component">
      <FontAwesomeIcon className="header-icons" icon={iconName} />
      <p>{text}</p>
    </span>
  );
}

HeaderInfo.propTypes = {
  headerInfoCLass: PropTypes.string,
  iconName: PropTypes.object,
  text: PropTypes.string,
};

export default HeaderInfo;
