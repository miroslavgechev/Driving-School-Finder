/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Container from 'components/Container';
import SchoolForm from './components/SchoolForm/SchoolForm';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ImgForm from './components/ImgForm/ImgForm';
import CoursesForm from './components/CoursesForm/CoursesForm';

//TODO Add validation

const CreateSchool = () => {
  return (
    <Container>
      <Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Данни за автошколата
            </Typography>
            <Typography variant={'subtitle2'} color={'text.secondary'}>
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
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Данни за контакт
            </Typography>
            <Typography variant={'subtitle2'} color={'text.secondary'}>
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
            <Typography variant="h6" gutterBottom fontWeight={700}>
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
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Курсове
            </Typography>
            <Typography variant={'subtitle2'} color={'text.secondary'}>
              Опиши кои курсове предлагате и техните цени
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <CoursesForm />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CreateSchool;