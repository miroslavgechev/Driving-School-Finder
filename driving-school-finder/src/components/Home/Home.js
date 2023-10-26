import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';

import FeaturedSchools from './components/FeaturedSchools/FeaturedSchools';
import HeroHero from './components/Hero/Hero';

const Rental = () => {
  return (
    <>
      <HeroHero />

      <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedSchools />
        </Container>
      </Box>
    </>
  );
};

export default Rental;
