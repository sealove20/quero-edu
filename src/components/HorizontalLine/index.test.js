import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../tests/testUtils';
import HorizontalLine from './';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<HorizontalLine {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'horizontal-line-component');
  expect(component.length).toBe(1);
});