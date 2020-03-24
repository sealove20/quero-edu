import { checkProps } from '../../../tests/testUtils';
import ResultCard from './';

const defaultProps = {
  item: {}, 
  handleCheckboxFavouriteScholarshipChange: () => {}
}

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(ResultCard, expectedProps);
});