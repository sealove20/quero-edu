import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import BreadCrumb from './';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<BreadCrumb {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'breadcrumb-component');
  expect(component.length).toBe(1);
});