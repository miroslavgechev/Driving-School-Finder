/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Необходим е валиден имейл')
    .required('Имейлът е задължителнен, за да знаем, че си ти'),
  password: yup
    .string()
    .required('Паролата е задължителна, за да знаем, че си ти')
    .min(8, 'Паролата е неправилна'),
});

const FormStudent = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box marginBottom={4}>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Добре дошъл отново!
        </Typography>
        <Typography color="text.secondary">
          Влез за пълен достъп до всички функционалности.
        </Typography>
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Въведи своя имейл
            </Typography>
            <TextField
              label="Имейл *"
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              marginBottom={2}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={'subtitle2'}>
                  Въведи парола
                </Typography>
              </Box>
              <Typography variant={'subtitle2'}>
                <Link
                  component={'a'}
                  color={'primary'}
                  href={'/password-reset-cover'}
                  underline={'none'}
                >
                  Забравил си паролата?
                </Link>
              </Typography>
            </Box>
            <TextField
              label="Парола *"
              variant="outlined"
              name={'password'}
              type={'password'}
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              maxWidth={600}
              margin={'0 auto'}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={'subtitle2'}>
                  Нямаш профил?{' '}
                  <Link
                    component={'a'}
                    color={'primary'}
                    href={'/signup'}
                    underline={'none'}
                  >
                    Регистрирай се тук.
                  </Link>
                </Typography>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Влез като курсист
              </Button>
            </Box>
          </Grid>
        </Grid>

      </form>
    </Box>
  );
};

export default FormStudent;
