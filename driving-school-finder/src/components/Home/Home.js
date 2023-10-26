import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';

import FeaturedSchools from './components/FeaturedSchools/FeaturedSchools';
import Hero from './components/Hero/Hero';

const Home = () => {
  return (
    <>
      <Hero />

      <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedSchools />
        </Container>
      </Box>
    </>
  );
};

export default Home;
