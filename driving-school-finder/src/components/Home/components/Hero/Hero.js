/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { alpha, useTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

import Container from 'components/Container';

const title = 'Търсиш автошкола в София?';
const subtitle = 'Нека ти помогнем';

const areas = ['Всички', 'Слатина', 'Средец'];
const categories = ['Всички', 'A', 'B', 'B+', 'M'];
const ratings = ['Всички', '>=1', '>=2', '>=3', '>=4', '>=5'];

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background:
          'url(/hero.jpg) no-repeat center',
        // 'url(https://images.pexels.com/photos/13861/IMG_3496bfree.jpg) no-repeat center',
        backgroundSize: 'cover',
        marginTop: 0,
        paddingTop: 13,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha(theme.palette.primary.dark, 0.3),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          {/* Hero */}
          <Box marginBottom={4} data-aos="fade-up">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'common.white',
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: 'common.white',
              }}
            >
              {subtitle}
            </Typography>

          </Box>

          {/* Search Bar */}
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={1}
            data-aos="fade-up"
          >
            <form noValidate autoComplete="off">
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>

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
                    defaultValue={areas[0]}
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
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;


