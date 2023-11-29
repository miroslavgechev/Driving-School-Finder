import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import styles from './changePasswordForm.module.css';
import { SUCCESS_STATES, ERROR_MESSAGES, ERROR_CODES } from 'CONSTANTS';
import { useAuthContext } from 'contexts/authContext';

const validationSchema = yup.object({
  oldPassword: yup
    .string()
    .required('Паролата е задължителна, за да знаем, че си ти')
    .min(8, 'Паролата следва да е поне 8 символа'),
  password: yup
    .string()
    .required('Паролата е задължителна, за да знаем, че си ти')
    .min(8, 'Паролата следва да е поне 8 символа'),
  rePassword: yup
    .string()
    .required('Паролата е задължителна, за да знаем, че си ти')
    .min(8, 'Паролата следва да е поне 8 символа')
    .oneOf([yup.ref('password')], 'Паролите трябва да съвпадат'),
});

const ChangePasswordForm = () => {

  const { updateCredentials } = useAuthContext();

  const initialValues = {
    oldPassword: '',
    password: '',
    rePassword: '',
  };

  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);

  const handleSubmit = async (values) => {
    try {
      formik.setStatus(null);
      setIsLoading(true);
      await updateCredentials(values);
      setIsLoading(false);
      setSuccessState(SUCCESS_STATES.success);
    } catch (error) {
      if (error.message.includes(ERROR_CODES.invalidCredential)) {
        formik.setStatus(ERROR_MESSAGES.invalidCredential);
      } else {
        formik.setStatus(ERROR_MESSAGES.defaultError);
      }

      setIsLoading(false);
      setSuccessState(SUCCESS_STATES.error);
    }
  };

  const handleChange = (event) => {
    setSuccessState(SUCCESS_STATES.error);
    formik.handleChange(event);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
              Въведи текущата парола
            </Typography>
            <TextField
              label='Текуща парола *'
              variant='outlined'
              name={'oldPassword'}
              type='password'
              fullWidth
              value={formik.values.oldPassword}
              onChange={handleChange}
              error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
              helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
              Въведи нова парола
            </Typography>
            <TextField
              label='Нова парола *'
              variant='outlined'
              name={'password'}
              type='password'
              fullWidth
              value={formik.values.password}
              onChange={handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
              Потвърди нова парола
            </Typography>
            <TextField
              label='Нова парола *'
              variant='outlined'
              name={'rePassword'}
              type='password'
              fullWidth
              value={formik.values.rePassword}
              onChange={handleChange}
              error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
              helperText={formik.touched.rePassword && formik.errors.rePassword}
            />
          </Grid>

          <Grid item container xs={12}>
            <Box className={styles.buttonBoxContainer} >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                {successState === SUCCESS_STATES.success &&
                  <Alert
                    className={styles.fullWidth}
                    severity="success">
                    Промените са запазени в системата.
                  </Alert>
                }
                {formik.status &&
                  <Alert
                    className={styles.fullWidth}
                    severity="error">
                    {formik.status}
                  </Alert>
                }
              </Box>
              <Button
                size='large'
                variant='contained'
                type='submit'
                disabled={isLoading}
                startIcon={isLoading
                  ?
                  <CircularProgress size={22} />
                  :
                  <CloudUploadOutlinedIcon />}
              >
                Запази промените
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
          >

            {/* <Typography
              variant={'subtitle2'}
              color={'text.secondary'}
              align={'center'}
            >
              С натискането на бутона "Регистрация" съгласяваш с нашите{' '}
              <Link
                component={'a'}
                color={'primary'}
                href={'/company-terms'}
                underline={'none'}
              >
                условия за ползване.
              </Link>
            </Typography> */}
          </Grid>
        </Grid>
      </form>
    </Box >
  );
};

export default ChangePasswordForm;
