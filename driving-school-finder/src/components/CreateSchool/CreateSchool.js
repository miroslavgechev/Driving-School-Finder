import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Container from 'components/Container';
import Headline from '../shared/Headline/Headline';
import SchoolForm from './components/SchoolForm/SchoolForm';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ImgForm from './components/ImgForm/ImgForm';
import CoursesForm from './components/CoursesForm/CoursesForm';
import ConfirmForm from './components/ConfirmForm/ConfirmForm';

import styles from './createSchool.module.css';

import { useSetSchoolContext } from 'contexts/setSchoolContext';

const CreateSchool = () => {

  let { school } = useSetSchoolContext();

  return (
    <>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline text={'Създай автошкола'} />
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
                school?.categoriesServed?.length > 0
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
  );
};

export default CreateSchool;
