
import { checkProps } from '../../../tests/testUtils';
import CourseCard from './';

const defaultProps = {
  item: {}
};

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(CourseCard, expectedProps);
});