import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import ActionButtons from './';

const defaultProps = {
  children: []
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ActionButtons {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'action-buttons-component');
  expect(component.length).toBe(1);
});
test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(ActionButtons, expectedProps);
});