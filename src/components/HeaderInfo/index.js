import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

export default function HeaderInfo({ wrapperClass, iconName, text }) {
  return (
    <span className={wrapperClass}>
      <FontAwesomeIcon className="header-icons" icon={iconName} />
      <p>{text}</p>
    </span>
  );
}
