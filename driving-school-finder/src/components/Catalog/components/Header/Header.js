import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'layouts/Container/Container';

import styles from './header.module.css';

const title = 'Търсиш автошкола в София?';
const subtitle = 'Нека ти помогнем:';

const Header = () => {

  return (
    <Container
      className={styles.mainContainer}
      marginTop={-50}
    >
      <Box data-aos='fade-up' >
        <Typography
          variant='h3'
          gutterBottom
          className={styles.mainHeader}
          sx={{
            color: 'common.white',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant='h6'
          component='p'
          className={styles.subHeader}
          sx={{
            color: 'common.white',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;