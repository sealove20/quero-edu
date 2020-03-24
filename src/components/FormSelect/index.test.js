import { checkProps } from '../../../tests/testUtils';
import FormSelect from './';

const defaultProps = {
  label: 'user', 
  items: [], 
  handleSelectChange: () => {}, 
  name: 'user', 
  id: '10', 
  labelId: 'username'
}
test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(FormSelect, expectedProps);
});