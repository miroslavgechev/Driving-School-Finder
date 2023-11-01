/* eslint-disable react/no-unescaped-entities */

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';


const areas = ['Всички', 'Слатина', 'Средец'];
const categories = ['Всички', 'AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'];
const ratings = ['Всички', '>=1', '>=2', '>=3', '>=4', '>=5'];

const FilterBar = () => {

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 70,
        zIndex: 99,
        backgroundColor: 'background.paper',
      }}
      boxShadow={1}
    >

      <Box
        padding={{ xs: 3, sm: 6 }}
        width={0.7}
        margin="auto"
        data-aos="fade-up"
      >

        <form noValidate autoComplete="off">
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>

            {/* Filter by Name*/}
            <Box
              width={1}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <TextField label="Име" variant="outlined" fullWidth
                InputProps={{
                  startAdornment: (
                    <>
                      <InputAdornment position="start">
                        <DriveFileRenameOutlineRoundedIcon color='primary' />
                      </InputAdornment>
                    </>
                  ),
                }}
              />
            </Box>

            {/* Choose Category Autocomplete */}
            <Box
              width={1}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <Autocomplete
                options={categories}
                defaultValue={categories[0]}
                renderInput={(params) => (
                  <TextField {...params} label="Категория" variant="outlined" fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
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

            {/* Choose Rating Autocomplete */}
            <Box
              width={1}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <Autocomplete
                options={ratings}
                defaultValue={ratings[0]}
                renderInput={(params) => (
                  <TextField {...params} label="Оценка" variant="outlined" fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
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

            {/* Choose Area Autocomplete */}
            <Box
              width={1}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 2, md: 0 }}
            >
              <Autocomplete
                options={areas}
                defaultValue={ratings[0]}
                renderInput={(params) => (
                  <TextField {...params} label="Район" variant="outlined" fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
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

            {/* Search Button */}
            <Box>
              <Button
                sx={{ height: 54, whiteSpace: 'nowrap' }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
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


