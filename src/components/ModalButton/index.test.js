import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import ModalButton from './';

const defaultProps = {
  openModal: () => {}
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ModalButton {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'modal-button-component');
  expect(component.length).toBe(1);
});
test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(ModalButton, expectedProps);
});