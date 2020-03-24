import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import ResultCardCheckbox from './';

const defaultProps = {
  item: {}, 
  handleCheckbox: () => {}
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ResultCardCheckbox {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'result-card-checkbox-component');
  expect(component.length).toBe(1);
});
test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(ResultCardCheckbox, expectedProps);
});