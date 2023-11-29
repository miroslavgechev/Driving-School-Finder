import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';
import RightSidePhotoCover from 'components/shared/RightSidePhotoCover/RightSidePhotoCover';

import { Link } from 'react-router-dom';
import styles from './notFound.module.css';

const NotFound = () => {

  return (
    <Box className={styles.boxContainer}>
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box className={styles.outerBox}>
          <Box className={styles.textBoxContainer}>
            <Container>
              <Box>
                <Typography
                  variant='h1'
                  component={'h1'}
                  className={`${styles.textBox} ${styles.headerText}`}
                >
                  Опааа!
                </Typography>
                <Typography
                  variant='h6'
                  component='p'
                  color='text.secondary'
                  className={styles.textBox}
                >
                  Изглежда, че тази страница не съществува.
                </Typography>
                <Box
                  marginTop={4}
                  className={styles.buttonBoxContainer}
                >
                  <Button
                    component={Link}
                    to='/'
                    variant='contained'
                    color='primary'
                    size='large'
                  >
                    Начална страница
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>

          <RightSidePhotoCover imgSrc={'notfound.avif'} />
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
