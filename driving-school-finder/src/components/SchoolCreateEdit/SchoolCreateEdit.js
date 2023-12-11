import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Container from 'layouts/Container/Container';
import Headline from '../shared/Headline/Headline';
import SchoolForm from './components/SchoolForm/SchoolForm';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ImgForm from './components/ImgForm/ImgForm';
import CoursesForm from './components/CoursesForm/CoursesForm';
import ConfirmForm from './components/ConfirmForm/ConfirmForm';
import SpinnerFullPage from 'components/shared/SpinnerFullPage/SpinnerFullPage';

import styles from './schoolCreateEdit.module.css';

import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from 'contexts/authContext';
import { useSetSchoolContext } from 'contexts/setSchoolContext';

import { getSchoolByOwnerUidAndSchoolId } from 'services/firestoreService';

const SchoolCreateEdit = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const { school, setSchool } = useSetSchoolContext();
  const { user } = useAuthContext();
  const schoolUid = useParams().id;
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const fetchedSchool = await getSchoolByOwnerUidAndSchoolId(user.uid, schoolUid);

        setSchool(fetchedSchool);

        if (!fetchedSchool) {
          throw new Error('School not found or you are not the owner');
        }

      } catch (error) {
        navigate('/notfound', { replace: true });
      }
    };
    if (user && schoolUid) fetchSchool();

  }, [user, schoolUid]);

  return (
    <>
      {!school && currentLocation !== '/school/create' &&
        <SpinnerFullPage />
      }

      {
        ((!school && currentLocation === '/school/create') || (school)) &&
        <>
          <Box bgcolor={'alternate.main'}>
            <Container paddingY={{ xs: 2, sm: 2.5 }}>
              <Headline text={
                currentLocation === '/school/create'
                  ?
                  'Създай автошкола'
                  :
                  'Редактиране на автошкола'
              } />
            </Container>
          </Box>
          <Container>

            <Box>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom className={styles.headerText}>
                    Данни за автошколата
                  </Typography>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Опиши своята автошкола, така че курсистите да разберат защо е най-подходяща за тях
                  </Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                  <SchoolForm />
                </Grid>

              </Grid>

              <Divider sx={{ marginY: 4 }} />

              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom className={styles.headerText}>
                    Данни за контакт
                  </Typography>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Въведи контактните данни на твоята автошкола
                  </Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                  <ContactsForm />
                </Grid>
              </Grid>

              <Divider sx={{ marginY: 4 }} />
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom className={styles.headerText}>
                    Снимки
                  </Typography>
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    Качи снимки с високо качество, показвайки възможностите на школата
                  </Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                  <ImgForm />
                </Grid>

              </Grid>
              <Divider sx={{ marginY: 4 }} />

              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom className={styles.headerText}>
                    Курсове
                  </Typography>
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    Опиши курсовете с тяхната продължителност и цени
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  {
                    school && school?.categoriesServed?.length > 0
                      ?
                      <CoursesForm key={school?.categoriesServed?.length} />
                      :
                      <Typography variant="h6" gutterBottom className={`${styles.headerText} ${styles.centerText}`}>
                        Все още не си избрал категории, които предлага автошколата
                      </Typography>
                  }
                </Grid>
              </Grid>

              <Divider sx={{ marginY: 4 }} />
              <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                  <ConfirmForm />
                </Grid>
              </Grid>


            </Box>
          </Container>
        </>
      }

    </>

  );
};

export default SchoolCreateEdit;
