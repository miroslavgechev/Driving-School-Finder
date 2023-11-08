/* eslint-disable react/no-unescaped-entities */
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const validationSchema = yup.object({
  currentPassword: yup
    .string()
    .required('Паролата е задължителна, за да знаем, че си ти')
    .min(8, 'Паролата следва да е поне 8 символа')
    .oneOf(['12345678'], 'Текущата парола е грешна'),
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
  const roles = {
    student: 1,
    school: 2,
  };

  const initialValues = {
    currentPassword: '',
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
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Въведи текущата парола
            </Typography>
            <TextField
              label="Текуща парола *"
              variant="outlined"
              name={'currentPassword'}
              type={'password'}
              fullWidth
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
              helperText={formik.touched.currentPassword && formik.errors.currentPassword}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Въведи нова парола
            </Typography>
            <TextField
              label="Нова парола *"
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

          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Потвърди нова парола
            </Typography>
            <TextField
              label="Нова парола *"
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
              margin={'0 auto'}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>

              </Box>
              <Button
                size={'large'}
                variant={'contained'}
                type={'submit'}
                startIcon={<CloudUploadOutlinedIcon />}
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
