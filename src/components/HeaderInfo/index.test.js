import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../tests/testUtils';
import HeaderInfo from './';

const defaultProps = {
  headerInfoCLass: 'className',
  iconName: { prefix: 'fas', iconName: 'info-circle' },
  text: 'Ajuda',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<HeaderInfo {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(HeaderInfo, expectedProps);
});
