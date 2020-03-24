import { checkProps } from '../../../tests/testUtils';
import FormCheckBox from './';

const defaultProps = {
  title: 'user', 
  name: 'Jane', 
  id: '10', 
  labelId: 'user', 
  handleCheckboxChange: () => {}, 
  checked: true
}


test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(FormCheckBox, expectedProps);
});