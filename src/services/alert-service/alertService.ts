import Swal from 'sweetalert2';
import { ErrorAlertProps } from './types';

const errorAlert = (props: ErrorAlertProps): void => {
  const { title, message } = props;
  Swal.fire({
    icon: 'error',
    title,
    text: message,
  });
};

const alertService = { errorAlert };

export default alertService;
