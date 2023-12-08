import Box from '@mui/material/Box';

import Container from 'components/Container';
import { alpha, useTheme } from '@mui/material/styles';

import SchoolsList from './components/SchoolsList/SchoolsList';
import FilterBar from './components/FilterBar/FilterBar';
import Header from './components/Header/Header';

import styles from './catalog.module.css';
import { getAllSchoolsWithRatingsSorted } from 'services/firestoreService';
import { useState, useEffect } from 'react';

const Catalogue = () => {
  const [schoolsForCatalog, setSchoolsForCatalog] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const getSchools = async () => {

      try {
        const schools = await getAllSchoolsWithRatingsSorted();
        setSchoolsForCatalog(schools);
      } catch (error) {
        console.log(error);
      }
    };

    getSchools();
  }, []);

  return (
    <>
      <Box
        className={styles.mainContainer}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          className={styles.backgroundImageFilter}
          sx={{
            background: alpha(theme.palette.primary.dark, 0.3),
          }}
        />
      </Box>

      <Header />

      <FilterBar />

      <Box
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <SchoolsList schoolsForCatalog={schoolsForCatalog} />
        </Container>
      </Box>
    </>
  );
};

export default Catalogue;
