import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import DropDown from './'

const setup = (props = {}) => {
  const setupProps = { ...props };
  return  shallow(<DropDown {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'dropdown-component');
  expect(component.length).toBe(1);
});
test('dropdown menu starts hidden', () => {
  const wrapper = setup();
  
  const dropdownMenu = findByTestAttr(wrapper, 'dropdown-menu');
  expect(dropdownMenu.length).toBe(0);
})