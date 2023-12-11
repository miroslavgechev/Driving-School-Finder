import Box from '@mui/material/Box';

import styles from './logo.module.css';

const Logo = () => {
  return (
    <Box>
      <img src="/logo.webp" alt="logo" className={styles.logo} />
    </Box>
  );
};

export default Logo;
