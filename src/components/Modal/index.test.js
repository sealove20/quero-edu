import { checkProps } from '../../../tests/testUtils';
import Modal from './';

const defaultProps = {
  isModalOpen: true, 
  closeModal: () => {}
}

test('does not throw warning with expected props', () => {
  const expectedProps = defaultProps;
  checkProps(Modal, expectedProps);
});