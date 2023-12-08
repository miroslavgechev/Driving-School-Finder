import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import Rating from '@mui/material/Rating';

import styles from './filterBar.module.css';
import { CATEGORIES, REGIONS } from 'CONSTANTS';
import { useState } from 'react';

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

const FilterBar = () => {
  const [formRating, setFormRating] = useState(ratings[0]);

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

        <form noValidate autoComplete='off'>
          <Box className={styles.formFieldsContainer}>

            {/* Filter by Name*/}
            <Box
              className={styles.fieldContainer}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <TextField label='Име' variant='outlined' className={styles.textField}
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
                defaultValue={categories[0]}
                renderInput={(params) => (
                  <TextField {...params} label='Категория' variant='outlined' className={styles.textField}
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
                value={formRating}
                onChange={(event, newValue) => {
                  setFormRating(newValue);
                }}
                renderOption={(props, option) => (
                  <li {...props}>
                    <Rating
                      name="read-only"
                      value={option.rating}
                      readOnly
                    />
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} label='Оценка' variant='outlined' className={styles.textField}
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
                defaultValue={ratings[0]}
                renderInput={(params) => (
                  <TextField {...params} label='Район' variant='outlined' className={styles.textField}
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
                variant="contained"
                color="primary"
                size="medium"
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