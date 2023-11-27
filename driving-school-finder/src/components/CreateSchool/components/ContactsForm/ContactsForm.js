import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { REGIONS } from 'CONSTANTS';
import styles from './contacts.module.css';
import { SUCCESS_STATES } from 'CONSTANTS';
import { useSetSchoolContext } from 'contexts/setSchoolContext';


const validationSchema = yup.object({
  city: yup
    .string()
    .trim()
    .required('Добавяне на град е задължително')
    .min(1, 'Името следва да е поне 1 символ')
    .max(50, 'Името не може да е повече от 50 символа'),
  region: yup
    .string()
    .required('Поне един район трябва да бъде избран'),
  street: yup
    .string()
    .trim()
    .required('Добавяне на описанието е задължително')
    .min(1, 'Улицата следва да е поне един символ')
    .max(500, 'Улицата не може да е повече от 150 символа'),
  email: yup
    .string()
    .trim()
    .email('Въведи валиден имейл')
    .required('Имейлът е задължителнен, за да се свържат курсистите с вас'),
  phone: yup
    .string()
    .trim()
    .required('Телефонът е задължителен, за да се свържат курсистите с вас')
    .min(6, 'Телефонът следва да е поне 6 символа')
    .max(10, 'Телефонът не може да е повече от 10 символа'),
});

const ContactsForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);
  const { setSchoolContacts } = useSetSchoolContext();

  const initialValues = {
    city: 'София',
    region: '',
    street: '',
    email: '',
    phone: '',
  };

  const handleSubmit = async (values) => {
    try {
      formik.setStatus(null);
      setIsLoading(true);

      setSchoolContacts(values);
      setTimeout(() => {
        setIsLoading(false);
        setSuccessState(SUCCESS_STATES.success);
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setSuccessState(SUCCESS_STATES.error);
      }, 1000);
    }
  };

  const handleChange = (event) => {
    setSuccessState(SUCCESS_STATES.error);
    formik.handleChange(event);
  };

  const handleAutocompleteChange = (name, value) => {
    setSuccessState(SUCCESS_STATES.error);
    console.log(name, value);
    formik.setFieldValue(name, value);
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
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Град
            </Typography>
            <TextField
              variant="outlined"
              name='city'
              fullWidth
              disabled
              value={formik.values.city}
              onChange={handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Район
            </Typography>
            <Autocomplete
              options={REGIONS}
              value={formik.values.region || null}
              onChange={(event, value) => handleAutocompleteChange('region', value)}
              renderInput={(params) => (
                <TextField {...params}
                  label='Район'
                  name='region'
                  variant="outlined"
                  fullWidth
                  error={formik.touched.region && Boolean(formik.errors.region)}
                  helperText={formik.touched.region && formik.errors.region}
                  InputProps={{ ...params.InputProps }}
                />
              )}
            />

          </Grid>

          <Grid item xs={12}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Въведи адрес
            </Typography>
            <TextField
              label='Адрес на автошколата *'
              variant='outlined'
              name='street'
              fullWidth
              value={formik.values.street}
              onChange={handleChange}
              error={formik.touched.street && Boolean(formik.errors.street)}
              helperText={formik.touched.street && formik.errors.street}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Въведи имейл
            </Typography>
            <TextField
              label='Имейл за контакт *'
              variant='outlined'
              name='email'
              fullWidth
              value={formik.values.email}
              onChange={handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Въведи телефон
            </Typography>
            <TextField
              label='Телефон за контакт *'
              variant="outlined"
              name='phone'
              fullWidth
              value={formik.values.phone}
              onChange={handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>

          <Grid item container xs={12}>
            <Box className={styles.buttonBoxContainer}>
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                {successState === SUCCESS_STATES.success &&
                  <Alert
                    className={styles.fullWidth}
                    severity="success">
                    Промените са запазени локално
                  </Alert>
                }
                {successState === SUCCESS_STATES.error &&
                  <Alert
                    className={styles.fullWidth}
                    severity="error">
                    Промените не са запазени
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
        </Grid>
      </form>
    </Box>
  );
};

export default ContactsForm;
