import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';

import FeaturedSchools from './components/FeaturedSchools/Schools';
import Hero from './components/FilterBar/FilterBar';

import { getSchools, getSpecificFieldOfAllSchools, getSchoolByName } from 'services/firestoreTest';
// import { addSchool } from 'services/firestoreTest';

const Catalogue = () => {
  //TODO Temp Code to test fetching data from the database
  const [schools, setSchools] = useState([]);
  const [schoolsLite, setSchoolsLite] = useState([]);
  const [schoolByName, setSchoolByName] = useState({});

  useEffect(() => {
    const fetchSchools = async () => {
      const schoolsList = await getSchools();
      setSchools(schoolsList);
    };

    const fetchSchoolsLite = async () => {
      const schoolsList = await getSpecificFieldOfAllSchools();
      setSchoolsLite(schoolsList);
    };

    fetchSchools();
    fetchSchoolsLite();
  }, []);

  useEffect(() => {
    const fetchSchoolByName = async () => {
      const school = await getSchoolByName('Гечеви');
      setSchoolByName(school);
    };

    fetchSchoolByName();
  }, []);

  // Add new school to the database
  // useEffect(() => {
  //   const addNewSchool = async () => {
  //     await addSchool();
  //     console.log('School added');
  //   };

  //   addNewSchool();
  // }, []);

  //TODO End of Temp Code

  return (
    <>
      {console.log(schools)}
      {console.log(schoolsLite)}
      {console.log(schoolByName)}

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
