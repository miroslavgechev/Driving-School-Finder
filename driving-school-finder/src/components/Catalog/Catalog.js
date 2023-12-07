// import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';

import FeaturedSchools from './components/FeaturedSchools/Schools';
import FilterBar from './components/FilterBar/FilterBar';
import Hero from './components/Hero/Hero';

// import { getSchools, getSpecificFieldOfAllSchools, getSchoolByName } from 'services/firebaseFirestoreTest';/
// import { addSchool } from 'services/firebaseFirestoreTest';

const Catalogue = () => {


  return (
    <>

      <Hero />
      <FilterBar />


      <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedSchools />
        </Container>
      </Box>
    </>
  );
};

export default Catalogue;
