import Box from '@mui/material/Box';

import Container from 'components/Container';
import { alpha, useTheme } from '@mui/material/styles';

import SchoolsList from './components/SchoolsList/SchoolsList';
import FilterBar from './components/FilterBar/FilterBar';
import Header from './components/Header/Header';

import styles from './catalog.module.css';
import { getAllSchoolsWithRatingsSorted } from 'services/firestoreService';
import { useState, useEffect } from 'react';
import { filterSchools } from 'utils/schools';


const Catalogue = () => {
  const [schoolsInitial, setSchoolsInitial] = useState(null);
  const [schoolsFiltered, setSchoolsFiltered] = useState(null);
  const [filter, setFilter] = useState(null);

  const theme = useTheme();

  useEffect(() => {
    const getSchools = async () => {
      try {
        const schools = await getAllSchoolsWithRatingsSorted();
        setSchoolsInitial(schools);
        setSchoolsFiltered(schools);
      } catch (error) {
        console.log(error);
      }
    };

    getSchools();
  }, []);

  useEffect(() => {
    const filteredSchools = filterSchools(schoolsInitial, filter);
    setSchoolsFiltered(filteredSchools);
  }, [filter]);

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

      <FilterBar filter={filter} setFilter={setFilter} />

      <Box
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <SchoolsList schoolsFiltered={schoolsFiltered} />
        </Container>
      </Box>
    </>
  );
};

export default Catalogue;
