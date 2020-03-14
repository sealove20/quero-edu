import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../tests/testUtils';
import Card from './';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Card {...setupProps} />);
}; 

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'card-component');
  expect(component.length).toBe(1);
});
