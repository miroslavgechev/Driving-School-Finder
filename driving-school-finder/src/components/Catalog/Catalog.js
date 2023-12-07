import Box from '@mui/material/Box';

import Container from 'components/Container';
import { alpha, useTheme } from '@mui/material/styles';

import FeaturedSchools from './components/FeaturedSchools/Schools';
import FilterBar from './components/FilterBar/FilterBar';
import Header from './components/Header/Header';

import styles from './catalog.module.css';

const Catalogue = () => {
  const theme = useTheme();

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
          <FeaturedSchools />
        </Container>
      </Box>
    </>
  );
};

export default Catalogue;
