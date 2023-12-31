import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useTheme } from '@mui/material/styles';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useState, useEffect } from 'react';

import AlertMessage from 'components/shared/AlertMessage/AlertMessage';
import SubmitButton from 'components/shared/SubmitButton/SubmitButton';

import { REGIONS, CATEGORIES, SUCCESS_STATES, ALERT_SEVERITY } from 'CONSTANTS';
import { useSetSchoolContext } from 'contexts/setSchoolContext';
import { useAuthContext } from 'contexts/authContext';
import fileMapper from 'utils/fileMapper';
import styles from './schoolForm.module.css';

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Добавяне на името е задължително')
    .min(1, 'Името следва да е поне 1 символ')
    .max(50, 'Името не може да е повече от 50 символа'),
  logoUrl: yup
    .mixed()
    .required('Добавяне на логo е задължително')
    .test('type', 'Логото трябва да бъде картинка', value => {
      if (typeof value === 'string') {
        return true;
      } else if (value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)) {
        return true;
      } else {
        return false;
      }
    }),
  description: yup
    .string()
    .trim()
    .required('Добавяне на описанието е задължително')
    .min(1, 'Името следва да е поне един символ')
    .max(500, 'Описанието не може да е повече от 500 символа'),
  whyUs1: yup
    .string()
    .trim()
    .required('Добавяне на поне една причина е задължително')
    .min(1, 'Името следва да е поне 1 символ')
    .max(150, 'Една причина не може да е повече от 150 символа'),
  whyUs2: yup
    .string()
    .trim()
    .max(150, 'Една причина не може да е повече от 150 символа'),
  whyUs3: yup
    .string()
    .trim()
    .max(150, 'Една причина не може да е повече от 150 символа'),
  regionsServed: yup
    .array()
    .of(yup.string())
    .required('Поне един район трябва да бъде избран')
    .min(1, 'Поне един район трябва да бъде избран'),
  categoriesServed: yup
    .array()
    .of(yup.string())
    .required('Поне една категория трябва да бъде избрана')
    .min(1, 'Поне една категория трябва да бъде избрана')
});

const regions = ['Всички', ...REGIONS];

const SchoolForm = () => {
  const [logoUrl, setLogoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);
  const { setSchoolDescription, setSchoolFiles, school } = useSetSchoolContext();
  const { user } = useAuthContext();

  const theme = useTheme();

  const initialValues = {
    name: school?.name || '',
    logoUrl: school?.logoUrl || '',
    description: school?.description || '',
    whyUs1: school?.whyUs?.[0] || '',
    whyUs2: school?.whyUs?.[1] || '',
    whyUs3: school?.whyUs?.[2] || '',
    regionsServed: school?.regionsServed || [],
    categoriesServed: school?.categoriesServed || [],
  };

  useEffect(() => {
    setLogoUrl(school?.logoUrl || null);
  }, []);

  const handleSubmit = async (values) => {
    try {
      formik.setStatus(null);
      setIsLoading(true);

      const updatedObject = { ...values, logoUrl, ownerUid: user.uid };

      setSchoolDescription(updatedObject);
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

  const handleLogoChange = async (event, name) => {
    setSuccessState(SUCCESS_STATES.error);
    const url = await fileMapper([event.target.files[0]]);

    setLogoUrl(url[0]);

    setSchoolFiles(name, event.target.files[0]);
    formik.setFieldValue(name, event.target.files[0]);
  };

  const handleAutocompleteChange = (name, value) => {
    setSuccessState(SUCCESS_STATES.error);
    formik.setFieldValue(name, value);
  };

  const handleLogoDelete = () => {
    setLogoUrl(null);
    formik.setFieldValue('logoUrl', '');
    setSuccessState(SUCCESS_STATES.error);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
  const checkedIcon = <CheckBoxIcon fontSize='small' />;

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>

          <Grid item xs={12} sm={8}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Въведи името
            </Typography>
            <TextField
              label='Име на автошколата *'
              variant='outlined'
              name='name'
              fullWidth
              value={formik.values.name}
              onChange={handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          <Grid item container xs={12} sm={4} className={styles.gridContainer}>
            <Box
              className={styles.boxContainer}
              marginBottom={{ xs: 0, sm: 0.5 }}
            >
              {logoUrl
                ?
                <Box className={styles.imageBoxContainer}>
                  <img src={logoUrl} alt='logo' className={styles.image} />
                  <Button onClick={() => handleLogoDelete()}>Изтрий</Button>
                </Box>
                :
                <Grid item xs={12} sm={12}>
                  <Button
                    variant='contained'
                    component='label'
                    size='large'
                    startIcon={<AddPhotoAlternateOutlinedIcon />}
                    fullWidth
                    value={formik.values.logoUrl}
                    onChange={(event) => handleLogoChange(event, 'logoUrl')}
                  >
                    Избери лого
                    <input
                      type="file"
                      hidden
                      name='logoUrl'
                      accept="image/*"
                    />
                  </Button>
                  {formik.errors.logoUrl
                    ?
                    <FormHelperText error>
                      {formik.touched.logoUrl && formik.errors.logoUrl}
                    </FormHelperText>
                    :
                    null}
                </Grid>
              }
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Напишете кратко описание на автошколата
            </Typography>
            <TextField
              label='Описание *'
              variant='outlined'
              name='description'
              multiline
              rows={4}
              fullWidth
              value={formik.values.description}
              onChange={handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Въведи до три причини да изберат твоята автошкола
            </Typography>
            <TextField
              label='Първа причина'
              variant='outlined'
              name='whyUs1'
              multiline
              rows={2}
              fullWidth
              sx={{ marginBottom: 2 }}
              value={formik.values.whyUs1}
              onChange={handleChange}
              error={formik.touched.whyUs1 && Boolean(formik.errors.whyUs1)}
              helperText={formik.touched.whyUs1 && formik.errors.whyUs1}
            />
            <TextField
              label='Втора причина'
              variant='outlined'
              name='whyUs2'
              multiline
              rows={2}
              fullWidth
              sx={{ marginBottom: 2 }}
              value={formik.values.whyUs2}
              onChange={handleChange}
              error={Boolean(formik.touched.whyUs2 && formik.errors.whyUs2)}
              helperText={formik.touched.whyUs2 && formik.errors.whyUs2}
            />
            <TextField
              label='Трета причина'
              variant='outlined'
              name='whyUs3'
              multiline
              rows={2}
              fullWidth
              value={formik.values.whyUs3}
              onChange={handleChange}
              error={formik.touched.whyUs3 && Boolean(formik.errors.whyUs3)}
              helperText={formik.touched.whyUs3 && formik.errors.whyUs3}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Избери районите, които обслужва автошколата
            </Typography>
            <Autocomplete
              multiple
              disableCloseOnSelect
              color='primary'
              options={regions}
              value={formik.values.regionsServed}
              onChange={(event, value) =>
                handleAutocompleteChange('regionsServed', value)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option}
                    {...getTagProps({ index })}
                    color='primary'
                  />
                ))
              }
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    checked={selected}
                  />
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name='regionsServed'
                  label='Райони *'
                  error={formik.touched.regionsServed && Boolean(formik.errors.regionsServed)}
                  helperText={formik.touched.regionsServed && formik.errors.regionsServed} />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant='subtitle2'
              sx={{ marginBottom: 2 }}
              className={styles.headerText}
            >
              Избери категориите, които предлага автошколата
            </Typography>
            <Autocomplete
              multiple
              disableCloseOnSelect
              options={CATEGORIES}
              value={formik.values.categoriesServed}
              onChange={(event, value) =>
                handleAutocompleteChange('categoriesServed', value)}
              color='secondary'
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option}
                    {...getTagProps({ index })}
                    color='secondary'
                  />
                ))
              }
              renderOption={(props, option, { selected }) => (
                <li style={{
                  backgroundColor: selected
                    ?
                    theme.palette.secondary.light
                    :
                    undefined
                }} {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    checked={selected}
                    color='secondary'
                    style={{ color: theme.palette.secondary.main }}
                  />
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name='categoriesServed'
                  label='Категории *'
                  error={formik.touched.categoriesServed && Boolean(formik.errors.categoriesServed)}
                  helperText={formik.touched.categoriesServed && formik.errors.categoriesServed}
                />
              )}
            />
          </Grid>

          <Grid item container xs={12}>
            <Box className={styles.buttonBoxContainer} >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                {successState === SUCCESS_STATES.success &&
                  <AlertMessage severity={ALERT_SEVERITY.success}>
                    Промените са запазени локално
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
                startIcon={<SaveOutlinedIcon />}
              >
                Запази промените
              </SubmitButton>
            </Box>
          </Grid>
        </Grid>
      </form >
    </Box >
  );
};

export default SchoolForm;