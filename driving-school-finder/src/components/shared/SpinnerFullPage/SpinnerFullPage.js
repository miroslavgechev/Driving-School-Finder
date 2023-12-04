import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './spinnerFullPage.module.css';

const SpinnerFullPage = () => {
  return (
    <Box className={styles.fullPage}>
      <CircularProgress />
    </Box>
  );
};

export default SpinnerFullPage;