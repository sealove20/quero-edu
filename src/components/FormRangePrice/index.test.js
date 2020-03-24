import { checkProps } from '../../../tests/testUtils';
import FormRangePrice from './';

const defaultProps = {
  value: 10000, 
  handlePrice: () => {}, 
  min: '100', 
  max: '1000'
}

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(FormRangePrice, expectedProps);
});