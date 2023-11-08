/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Container from 'components/Container';
import Headline from './Headline/Headline';
import EditPersonalDataForm from './EditPersonalDataForm/EditPersonalDataForm';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';
import ManageReviews from './ManageReviews/ManageReviews';
import ManageSchools from './ManageSchools/ManageSchools';

//TODO Add validation

const ManageAccount = () => {

  return (
    <>
      <Box bgcolor={'alternate.main'} >
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      <Container>

        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom fontWeight={700}>
                Данни за профила
              </Typography>
              <Typography variant={'subtitle2'} color={'text.secondary'}>
                Можеш да промениш личните данни на профила си
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <EditPersonalDataForm />
            </Grid>

          </Grid>

          <Divider sx={{ marginY: 4 }} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom fontWeight={700}>
                Парола
              </Typography>
              <Typography variant={'subtitle2'} color={'text.secondary'}>
                Можеш да промениш паролата си
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <ChangePasswordForm />
            </Grid>
          </Grid>

          <Divider sx={{ marginY: 4 }} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom fontWeight={700}>
                Твоите отзиви
              </Typography>
              <Typography variant={'subtitle2'} color={'text.secondary'}>
                Отзивите, които си оставил
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <ManageReviews />
            </Grid>
          </Grid>

          <Divider sx={{ marginY: 4 }} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom fontWeight={700}>
                Твоите автошколи
              </Typography>
              <Typography variant={'subtitle2'} color={'text.secondary'}>
                Управявай автошколите, които си създал
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <ManageSchools />
            </Grid>
          </Grid>

        </Box>
      </Container>
    </>
  );
};

export default ManageAccount;