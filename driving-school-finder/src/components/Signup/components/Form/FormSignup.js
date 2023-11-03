/* eslint-disable react/no-unescaped-entities */
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

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

const SignupForm = () => {
  const roles = {
    student: 1,
    school: 2,
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    role: roles.student,
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
                displayEmpty
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
              name={'rePassword'}
              type={'password'}
              fullWidth
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
              helperText={formik.touched.rePassword && formik.errors.rePassword}
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
                  Имаш профил?{' '}
                  <Link
                    component={'a'}
                    color={formik.values.role === roles.student ? 'primary' : 'secondary'}
                    href={'/signin'}
                    underline={'none'}
                  >
                    Влез тук.
                  </Link>
                </Typography>
              </Box>

              {formik.values.role === roles.student ?
                <Button size='large' variant='contained' color='primary' type='submit'>
                  Регистрация като курсист
                </Button>
                :
                <Button size='large' variant='contained' color='secondary' type='submit'>
                  Регистрация като автошкола
                </Button>
              }

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

export default SignupForm;
