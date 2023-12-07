import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';

import styles from './filterBar.module.css';

const areas = ['Всички', 'Слатина', 'Средец'];
const categories = ['Всички', 'AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'];
const ratings = ['Всички', '>=1', '>=2', '>=3', '>=4', '>=5'];

const FilterBar = () => {

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
                defaultValue={ratings[0]}
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
                options={areas}
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