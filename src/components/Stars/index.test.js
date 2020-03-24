import { checkProps } from '../../../tests/testUtils';

import Stars from './';

const defaultProps = {
  totalStars: 10, 
  score: 5.2, 
  item: {}
}

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(Stars, expectedProps);
});