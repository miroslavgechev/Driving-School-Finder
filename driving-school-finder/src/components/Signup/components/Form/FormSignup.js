/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';

import { Link } from 'react-router-dom';

import { useAuthContext } from '../../../../contexts/authContext';

import { ERROR_MESSAGES } from 'CONSTANTS';

import styles from './formSignup.module.css';

const validationSchema = yup.object({
  role: yup
    .string()
    .required('Следва да избереш'),
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

const roles = {
  student: 'student',
  school: 'school',
};

const SignupForm = () => {
  const [color, setColor] = useState('primary');
  const { register } = useAuthContext();
  const navigate = useNavigate();

  //! Add loading or suspense!

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    role: roles.student,
  };

  const onSubmit = async (values) => {
    try {
      await register(values);
      navigate('/school/all');
    } catch (error) {
      if (error.message === ERROR_MESSAGES.emailTaken) {
        formik.setErrors({ email: error.message });
      } else {
        formik.setStatus(ERROR_MESSAGES.defaultError);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (formik.values.role === 'student') {
      setColor('primary');
    } else {
      setColor('secondary');
    }
  }, [formik.values.role]);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          className={styles.headerText}
        >
          Създай профил!
        </Typography>
        <Typography color="text.secondary">
          Като просто попълниш формата по-долу.
        </Typography>
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Избери роля
            </Typography>
            <FormControl
              fullWidth
              error={formik.touched.role && Boolean(formik.errors.role)}
              variant="outlined"
              color={color}
            >
              <InputLabel id="role-select-label">Роля *</InputLabel>

              <Select
                labelId="role-select-label"
                label="Роля *"
                variant="outlined"
                name={'role'}
                value={formik.values.role}
                onChange={formik.handleChange}
                error={
                  formik.touched.role && Boolean(formik.errors.role)
                }
              >
                <MenuItem value={roles.student}>Курсист</MenuItem>
                <MenuItem value={roles.school}>Автошкола</MenuItem>
              </Select>
              {formik.touched.role && formik.errors.role ?
                (
                  <FormHelperText>
                    {formik.errors.role}
                  </FormHelperText>
                )
                :
                null}
            </FormControl>

          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Въведи името си
            </Typography>
            <TextField
              label="Име *"
              variant="outlined"
              color={color}
              name={'firstName'}
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Въведи фамилията си
            </Typography>
            <TextField
              label="Фамилия *"
              variant="outlined"
              color={color}
              name={'lastName'}
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Въведи своя имейл
            </Typography>
            <TextField
              label="Имейл *"
              variant="outlined"
              color={color}
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Въведи своята парола
            </Typography>
            <TextField
              label="Парола *"
              variant="outlined"
              color={color}
              name={'password'}
              type={'password'}
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Потвърди своята парола
            </Typography>
            <TextField
              label="Потвърди парола *"
              variant="outlined"
              color={color}
              name={'rePassword'}
              type={'password'}
              fullWidth
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
              helperText={formik.touched.rePassword && formik.errors.rePassword}
            />
          </Grid>

          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {formik.status && <Alert severity="error">{formik.status}</Alert>}
          </Grid>

          <Grid item container xs={12}>
            <Box className={styles.bottomBox}>
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={'subtitle2'}>
                  Имаш профил?{' '}
                  <Link to='/signin' className={styles.link}>
                    <Typography
                      variant={'text'}
                      color={color}
                    >
                      Влез тук.
                    </Typography>
                  </Link>
                </Typography>
              </Box>

              <Button size='large' variant='contained' color={color} type='submit'>
                Регистрация като {formik.values.role === roles.student ? 'курсист' : 'автошкола'}
              </Button>

            </Box>
          </Grid>
        </Grid>
      </form>
    </Box >
  );
};

export default SignupForm;
