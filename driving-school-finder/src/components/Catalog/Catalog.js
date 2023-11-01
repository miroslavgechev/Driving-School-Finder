import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';

import FeaturedSchools from './components/FeaturedSchools/Schools';
import Hero from './components/FilterBar/FilterBar';

const Catalogue = () => {
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

export default Catalogue;
