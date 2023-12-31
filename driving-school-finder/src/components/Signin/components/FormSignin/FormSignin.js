import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import AlertMessage from 'components/shared/AlertMessage/AlertMessage';
import SubmitButton from 'components/shared/SubmitButton/SubmitButton';

import { useAuthContext } from 'contexts/authContext';
import { SUCCESS_STATES, ERROR_MESSAGES, ERROR_CODES, ROUTES, ALERT_SEVERITY } from 'CONSTANTS';
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
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);

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

      let trimmedValues = { ...values };

      if (values) {
        trimmedValues = {
          ...values,
          email: values?.email?.trim()
        };
      }

      await login(trimmedValues);

      setSuccessState(SUCCESS_STATES.success);
      navigate(ROUTES.schoolCatalogue());
      setIsLoading(false);
    } catch (error) {
      if (error.message.includes(ERROR_CODES.invalidCredential)) {
        formik.setStatus(ERROR_MESSAGES.invalidCredentials);
      } else {
        formik.setStatus(ERROR_MESSAGES.defaultError);
      }

      setIsLoading(false);
      setSuccessState(SUCCESS_STATES.error);
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
          variant='h4'
          className={styles.headerText}
        >
          Добре дошъл отново!
        </Typography>

        <Typography color='text.secondary'>
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
              label='Имейл *'
              variant='outlined'
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

              {/* //TODO Add functionality to reset password */}
              {/* <Typography variant='subtitle2'>
                <Link to='/signin' className={styles.link}>
                  <Typography
                    variant='text'
                    color='primary'
                  >
                    Забравил си паролата?
                  </Typography>
                </Link>
              </Typography> */}
            </Box>

            <TextField
              label='Парола *'
              variant='outlined'
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
              <AlertMessage severity={ALERT_SEVERITY.error}>
                {formik.status}
              </AlertMessage>
            </Grid>
          }

          {successState === SUCCESS_STATES.success &&
            <Grid
              item
              container
              xs={12}
              className={styles.centeredGridContainer}
            >
              <AlertMessage severity={ALERT_SEVERITY.success}>
                Успя! Пренасочваме те...
              </AlertMessage>
            </Grid>
          }

          <Grid item container xs={12}>
            <Box className={styles.bottomBox}>
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant='subtitle2'>
                  Нямаш профил?{' '}
                  <Link to={ROUTES.signup()} className={styles.link}>
                    <Typography
                      variant='text'
                      color='primary'
                    >
                      Регистрирай се тук.
                    </Typography>
                  </Link>
                </Typography>
              </Box>

              <SubmitButton
                isLoading={isLoading}
                startIcon={<PersonOutlineOutlinedIcon />}
              >
                Влез
              </SubmitButton>

            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SigninForm;