import Box from '@mui/material/Box';

import styles from './container.module.css';

const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    margin={'0 auto'}
    paddingX={2}
    paddingY={{ xs: 4, sm: 6, md: 8 }}
    className={styles.boxContainer}
    {...rest}
  >
    {children}
  </Box>
);

export default Container;
