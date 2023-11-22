import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';
import SignupForm from './components/Form/FormSignup';
import RightSidePhotoCover from '../shared/RightSidePhotoCover/RightSidePhotoCover';

import styles from './signup.module.css';

const Signup = () => {
  return (
    <Box className={styles.mainBox}>
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box className={styles.mainContainerBox}>
          <Box className={styles.formContainer}>
            <Container>
              <SignupForm />
            </Container>
          </Box>

          <RightSidePhotoCover imgSrc={'/signup.jpg'} />

        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
