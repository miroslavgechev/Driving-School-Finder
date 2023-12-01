import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Skeleton from '@mui/material/Skeleton';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { getSchoolByOwnerUid } from '../../../../services/firestoreService';
import { useAuthContext } from 'contexts/authContext';
import SchoolTableContainer from './components/SchoolTableContainer';

import styles from './manageSchools.module.css';

const ManageSchools = () => {

  const { user } = useAuthContext();
  const [school, setSchool] = useState(null);

  useEffect(() => {

    const fetchSchool = async () => {
      try {
        const fetchedSchool = await getSchoolByOwnerUid(user.uid);
        setSchool(fetchedSchool);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (user) fetchSchool();

  }, [user]);


  return (
    <Container>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>

            {school === null &&
              <Box className={styles.skeletonForm}>
                <Skeleton variant="rectangular" className={styles.skeletonHeight} animation="wave" />
              </Box>
            }

            {school === undefined &&
              <Box marginBottom={{ xs: 1, sm: 0 }} className={styles.buttonBoxContainer}>
                <Button
                  component={Link}
                  to='/school/create'
                  size='large'
                  variant='contained'
                  startIcon={<AddOutlinedIcon />}
                >
                  Създай автошкола
                </Button>
              </Box>
            }

            {school &&
              <SchoolTableContainer school={school} />

            }
          </Grid>
        </Grid>
      </form>
    </Container >
  );
};

export default ManageSchools;
