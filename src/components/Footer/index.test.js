import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../tests/testUtils';
import Footer from './';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Footer {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'footer-component');
  expect(component.length).toBe(1);
});