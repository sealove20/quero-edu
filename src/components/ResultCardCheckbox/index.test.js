import { checkProps } from '../../../tests/testUtils';
import ResultCardCheckbox from './';

const defaultProps = {
  item: {}, 
  handleCheckbox: () => {}
}

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(ResultCardCheckbox, expectedProps);
});