import React from 'react';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import Nav from './'

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Nav {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'nav-component');
  expect(component.length).toBe(1);
});
test('click dropdown will show menu', () => {
  const wrapper = mount(<Nav />);
  const button  = findByTestAttr(wrapper, 'dropdown-button');

  button.simulate('click');

  const dropdownMenu = findByTestAttr(wrapper, 'dropdown-menu');
  expect(dropdownMenu.length).toBe(1);
});