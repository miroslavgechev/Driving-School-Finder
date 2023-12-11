import Alert from '@mui/material/Alert';

import styles from './customAlert.module.css';

const CustomAlert = ({ children, severity }) => {

  return (
    <Alert
      className={styles.fullWidth}
      severity={severity}>
      {children}
    </Alert>
  );
};

export default CustomAlert;