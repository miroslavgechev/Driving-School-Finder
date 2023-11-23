/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../../contexts/authContext';
import { ERROR_MESSAGES } from 'CONSTANTS';
import styles from './formSignin.module.css';


const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Въведи валиден имейл')
    .required('Имейлът е задължителнен, за да знаем, че си ти'),
  password: yup
    .string()
    .required('Паролата е задължителна, за да знаем, че си ти')
    .min(8, 'Паролата следва да е поне 8 символа'),
});

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values) => {
    try {
      formik.setStatus(null);
      setIsLoading(true);
      await login(values);
      setIsSuccess(true);

      setTimeout(() => {
        navigate('/school/all');
        setIsLoading(false);
      }, 2000);

    } catch (error) {
      if (error.message === ERROR_MESSAGES.invalidCredentials) {
        formik.setStatus(ERROR_MESSAGES.invalidCredentials);
      } else {
        formik.setStatus(ERROR_MESSAGES.defaultError);
      }
      setIsLoading(false);
      setIsSuccess(false);
    }
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
          className={styles.headerText}
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
            <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
              Въведи своя имейл
            </Typography>
            <TextField
              label="Имейл *"
              variant="outlined"
              name='email'
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Box className={styles.passwordBox} marginBottom={2}>
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant='subtitle2'>
                  Въведи парола
                </Typography>
              </Box>
              <Typography variant='subtitle2'>
                {/* //TODO Replace link */}
                <Link to='/signin' className={styles.link}>
                  <Typography
                    variant='text'
                    color='primary'
                  >
                    Забравил си паролата?
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <TextField
              label="Парола *"
              variant="outlined"
              name='password'
              type='password'
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          {formik.status &&
            <Grid
              item
              container
              xs={12}
              className={styles.centeredGridContainer}
            >
              <Alert className={styles.fullWidth} severity="error">{formik.status}</Alert>
            </Grid>}

          {isSuccess && <Grid
            item
            container
            xs={12}
            className={styles.centeredGridContainer}
          >
            <Alert className={styles.fullWidth} severity="success">Успя! Пренасочваме те...</Alert>
          </Grid>}

          <Grid item container xs={12}>
            <Box className={styles.bottomBox}>
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant='subtitle2'>
                  Нямаш профил?{' '}
                  <Link to='/signup' className={styles.link}>
                    <Typography
                      variant='text'
                      color='primary'
                    >
                      Регистрирай се тук.
                    </Typography>
                  </Link>
                </Typography>
              </Box>
              <Button size='large' variant='contained' type='submit' disabled={isLoading}>
                {isLoading && <CircularProgress size={24} />}
                Влез
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SigninForm;