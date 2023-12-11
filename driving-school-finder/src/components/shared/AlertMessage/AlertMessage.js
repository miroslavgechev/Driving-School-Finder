import Alert from '@mui/material/Alert';

import styles from './alertMessage.module.css';

const AlertMessage = ({ children, severity }) => {

  return (
    <Alert
      className={styles.fullWidth}
      severity={severity}>
      {children}
    </Alert>
  );
};

export default AlertMessage;