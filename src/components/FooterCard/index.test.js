import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import FooterCard from './';

const defaultProps = { 
  iconName: { user: 'user' }, 
  cardTitle: 'Mail', 
  cardText: 'Fale conosco enviando um email', 
  shortText: '0800 611 99 999'
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FooterCard {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'footer-card-component');
  expect(component.length).toBe(1);
});
test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(FooterCard, expectedProps);
});