import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';
import SignupForm from './components/Form/FormSignup';
import RightSidePhotoCover from '../shared/RightSidePhotoCover/RightSidePhotoCover';

const Signup = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={'flex'}
            alignItems={'center'}
          >

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
