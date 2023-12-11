import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from './headline.module.css';

const Headline = ({ text, logoUrl }) => {

  return (
    <Box className={styles.headline}>

      {
        logoUrl
          ?
          <Box className={styles.imageBox}>
            <img src={logoUrl} alt="logo" className={styles.image} />
          </Box>
          :
          <Box className={styles.textBox}>
            <Typography
              variant='h4'
              marginY={2}
            >
              {text}
            </Typography>
          </Box>
      }

    </Box>
  );
};

export default Headline;
