import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useState } from 'react';

import AlertMessage from 'components/shared/AlertMessage/AlertMessage';
import SubmitButton from 'components/shared/SubmitButton/SubmitButton';

import { useAuthContext } from 'contexts/authContext';
import { SUCCESS_STATES, ALERT_SEVERITY } from 'CONSTANTS';
import { updateCustomUserData } from 'services/firestoreService';
import styles from './editPersonalDataForm.module.css';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Името следва да е между 2 и 50 букви')
    .max(50, 'Името следва да е между 2 и 50 букви')
    .required('Не е въведено име'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Фамилията следва да е между 2 и 50 букви')
    .max(50, 'Фамилията следва да е между 2 и 50 букви')
    .required('Не е въведена фамилия'),
  email: yup
    .string()
    .trim()
    .email('Въведи валиден имейл')
    .required('Имейлът е задължителнен, за да знаем, че си ти'),
});

const EditPersonalDataForm = () => {
  const { user } = useAuthContext();

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    role: user?.role,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);

  const handleSubmit = async (values) => {
    try {
      formik.setStatus(null);
      setIsLoading(true);

      await updateCustomUserData(user.uid, values);

      setIsLoading(false);
      setSuccessState(SUCCESS_STATES.success);
    } catch (error) {
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
          <Grid item xs={12} sm={6}>
            <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
              Име
            </Typography>
            <TextField
              label='Име *'
              variant='outlined'
              name='firstName'
              fullWidth
              value={formik.values.firstName}
              onChange={handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
              Фамилия
            </Typography>
            <TextField
              label='Фамилия *'
              variant='outlined'
              name='lastName'
              fullWidth
              value={formik.values.lastName}
              onChange={handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
              Имейл
            </Typography>
            <TextField
              disabled
              label='Имейл *'
              variant='outlined'
              name='email'
              fullWidth
              value={formik.values.email}
              onChange={handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item container xs={12}>
            <Box className={styles.buttonBoxContainer} >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                {successState === SUCCESS_STATES.success &&
                  <AlertMessage severity={ALERT_SEVERITY.success}>
                    Промените са запазени в системата
                  </AlertMessage>
                }
                {successState === SUCCESS_STATES.error &&
                  <AlertMessage severity={ALERT_SEVERITY.error}>
                    Промените не са запазени
                  </AlertMessage>
                }
              </Box>

              <SubmitButton
                isLoading={isLoading}
                startIcon={<CloudUploadOutlinedIcon />}
              >
                Запази промените
              </SubmitButton>
            </Box>
          </Grid>


          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
          />
        </Grid>
      </form>
    </Box >
  );
};

export default EditPersonalDataForm;
