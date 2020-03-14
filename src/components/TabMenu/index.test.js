import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../tests/testUtils';
import TabMenu from './';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<TabMenu {...setupProps} />);
}; 

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'tab-menu-component');
  expect(component.length).toBe(1);
});
