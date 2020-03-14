import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../tests/testUtils';
import Header from './';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Header {...setupProps} />);
}; 

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'header-component');
  expect(component.length).toBe(1);
});
