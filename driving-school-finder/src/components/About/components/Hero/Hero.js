import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Container from 'components/Container';

import styles from './hero.module.css';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      className={styles.container}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        paddingTop: 10,
      }}
    >
      <Box
        className={styles.background}
        sx={{
          background: alpha(theme.palette.primary.dark, 0.3),
        }}
      />

      <Container className={styles.textContainer}>
        <Box>
          <Typography
            variant='h2'
            gutterBottom
            className={styles.mainHeader}
            sx={{
              color: 'common.white',
            }}
          >
            За нас
          </Typography>
          <Typography
            variant='h6'
            component='p'
            color='text.primary'
            className={styles.subHeader}
            sx={{
              color: 'common.white',
            }}
          >
            Какви ни докара до тук
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

