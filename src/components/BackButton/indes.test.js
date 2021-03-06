import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../tests/testUtils';
import BackButton from './' 

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<BackButton {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'back-button-component');
  expect(component.length).toBe(1);
});