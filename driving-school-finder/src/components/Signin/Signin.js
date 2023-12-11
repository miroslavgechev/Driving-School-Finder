import Box from '@mui/material/Box';

import Container from 'layouts/Container/Container';
import SigninForm from './components/FormSignin/FormSignin';
import RightSidePhotoCover from '../shared/RightSidePhotoCover/RightSidePhotoCover';

import styles from './signin.module.css';

const Signin = () => {

  return (
    <Box className={styles.mainBox}>
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box className={styles.mainContainerBox}>
          <Box className={styles.formContainerBox}>
            <Container>
              <SigninForm />
            </Container>
          </Box>

          <RightSidePhotoCover imgSrc={'/signin.jpg'} />

        </Box>
      </Container>
    </Box>
  );
};

export default Signin;
