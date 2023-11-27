import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from './headline.module.css';

const Headline = ({ text }) => {
  return (
    <Box className={styles.headline}>

      <Box className={styles.textBox}>
        <Typography
          variant={'h4'}
          marginY={2}
        >
          {text}
        </Typography>
      </Box>

    </Box>
  );
};

export default Headline;
