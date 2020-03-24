import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import TabMenuItem from './';

const defaultProps = {
  text: 'Todos os semestres', 
  onClick: () => {}, 
  value: 'all', 
  active: 'all'
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps,...props };
  return  shallow(<TabMenuItem {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(TabMenuItem, expectedProps);
});