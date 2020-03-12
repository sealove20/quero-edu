import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../tests/testUtils';
import App from './App';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<App {...props} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'div-component');
  expect(component.length).toBe(1);
});
