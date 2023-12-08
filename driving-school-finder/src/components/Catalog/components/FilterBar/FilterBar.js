import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Rating from '@mui/material/Rating';

import styles from './filterBar.module.css';
import { CATEGORIES, REGIONS } from 'CONSTANTS';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';

const validationSchema = yup.object({});

const regions = ['Всички', ...REGIONS];
const categories = ['Всички', ...CATEGORIES];
const ratings = [
  { label: 'Всички ', rating: 0 },
  { label: 'Над 1 звезда ', rating: 1 },
  { label: 'Над 2 звезди ', rating: 2 },
  { label: 'Над 3 звезди ', rating: 3 },
  { label: 'Над 4 звезди ', rating: 4 },
  { label: '5 звезди ', rating: 5 }
];

const FilterBar = ({ setFilter }) => {

  const initialValues = {
    name: '',
    category: categories[0],
    rating: ratings[0],
    region: regions[0],
  };

  useEffect(() => {
    setFilter(initialValues);
  }, []);

  const handleSubmit = async (values) => {
    try {
      setFilter(values);
      console.log(values);
      formik.setStatus(null);
    } catch (error) {
      console.log(error);
      formik.setStatus(error.message);
    }
  };

  const handleChange = (event) => {
    formik.handleChange(event);
  };

  const handleAutocompleteChange = (name, value) => {
    formik.setFieldValue(name, value);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box
      className={styles.mainContainer}
      sx={{
        backgroundColor: 'background.paper',
      }}
      boxShadow={1}
      borderRadius={2}
    >
      <Box
        className={styles.formContainer}
        padding={{ xs: 3, sm: 6 }}
        data-aos="fade-up"
      >
        <form onSubmit={formik.handleSubmit} noValidate autoComplete='off'>
          <Box className={styles.formFieldsContainer}>

            {/* Filter by Name*/}
            <Box
              className={styles.fieldContainer}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <TextField
                name='name'
                label='Име'
                variant='outlined'
                className={styles.textField}
                value={formik.values.name}
                onChange={handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputProps={{
                  startAdornment: (
                    <>
                      <InputAdornment position='start'>
                        <DriveFileRenameOutlineRoundedIcon color='primary' />
                      </InputAdornment>
                    </>
                  ),
                }}
              />
            </Box>

            {/* Filter by Category*/}
            <Box
              className={styles.fieldContainer}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <Autocomplete
                options={categories}
                value={formik.values.category}
                onChange={(event, value) =>
                  handleAutocompleteChange('category', value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name='category'
                    label='Категория'
                    variant='outlined'
                    className={styles.textField}
                    error={formik.touched.category && Boolean(formik.errors.category)}
                    helperText={formik.touched.category && formik.errors.category}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position='start'>
                            <DirectionsCarFilledOutlinedIcon color='primary' />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Box>

            {/* Filter by Rating*/}
            <Box
              className={styles.fieldContainer}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <Autocomplete
                options={ratings}
                getOptionLabel={(rating) => rating.label}
                value={formik.values.rating}
                onChange={(event, value) =>
                  handleAutocompleteChange('rating', value)}
                renderOption={(props, option) => (
                  <li {...props}>
                    <Rating
                      name='ratingGauge'
                      value={option.rating}
                      readOnly
                    />
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    name='rating'
                    {...params}
                    label='Оценка'
                    variant='outlined'
                    className={styles.textField}
                    error={formik.touched.rating && Boolean(formik.errors.rating)}
                    helperText={formik.touched.rating && formik.errors.rating}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position='start'>
                            <StarBorderRoundedIcon color='primary' />

                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Box>

            {/* Filter by Service Area*/}
            <Box
              className={styles.fieldContainer}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <Autocomplete
                options={regions}
                value={formik.values.region}
                onChange={(event, value) =>
                  handleAutocompleteChange('region', value)}
                renderInput={(params) => (
                  <TextField
                    name='region'
                    {...params}
                    label='Район'
                    variant='outlined'
                    className={styles.textField}
                    error={formik.touched.region && Boolean(formik.errors.region)}
                    helperText={formik.touched.region && formik.errors.region}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position='start'>
                            <PlaceOutlinedIcon color='primary' />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Box>

            {/* Filter Button */}
            <Box>
              <Button
                className={styles.filterButton}
                variant='contained'
                color='primary'
                size='medium'
                type='submit'
                startIcon={<SearchOutlinedIcon />}
              >
                Търси!
              </Button>
            </Box>
          </Box>
        </form>

      </Box>
    </Box >
  );
};

export default FilterBar;