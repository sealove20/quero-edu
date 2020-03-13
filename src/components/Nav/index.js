import React from 'react';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
  return (
    <nav>
      <p>Minha conta</p>
      <span>
        <p>Menu</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </span>
    </nav>
  );
}
