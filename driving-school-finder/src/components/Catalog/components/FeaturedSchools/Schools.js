import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import useMediaQuery from '@mui/material/useMediaQuery';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

import { useTheme } from '@mui/material/styles';

const mock = [
  {
    media: 'https://images.pexels.com/photos/7433/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Автошкола Иванов',
    categories: ['AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'],
    location: 'Всички',
    value: 2
  },
  {
    media: 'https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Автошкола Петров',
    categories: ['AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'],
    location: 'Слатина, Средец',
    value: 4
  },
  {
    media: 'https://images.pexels.com/photos/543602/pexels-photo-543602.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Автошкола Георгиев',
    categories: ['AM', 'A', 'A1', 'A2'],
    location: 'Всички',
    value: 5
  },
  {
    media: 'https://images.pexels.com/photos/1051071/pexels-photo-1051071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Автошкола Димитров',
    categories: ['B1', 'B', 'BA'],
    location: 'Всички',
    value: 4
  },
  {
    media: 'https://images.pexels.com/photos/1051071/pexels-photo-1051071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Loft design',
    categories: ['AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'],
    location: 'Всички',
    value: 5
  },
  {
    media: 'https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Автошкола Гечев',
    categories: ['AM', 'A', 'A1', 'A2', 'B1', 'B', 'BA'],
    location: 'Всички',
    value: 4.5
  },
];

const Schools = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>

      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  title={item.title}
                  image={item.media}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    position={'absolute'}
                    bottom={0}
                    padding={2}
                    width={1}
                  >
                    <Box
                      padding={1}
                      bgcolor={'background.paper'}
                      boxShadow={1}
                      borderRadius={2}
                    >
                      <Typography>
                        <Rating name="read-only" value={item.value} readOnly />
                      </Typography>
                    </Box>

                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={2}>
                    <PlaceOutlinedIcon
                      sx={{
                        fontSize: '1em',
                        marginRight: '0.5em',
                        color: theme.palette.text.secondary,
                      }}
                    />
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'}>
                    <DirectionsCarFilledOutlinedIcon
                      sx={{
                        fontSize: '1em',
                        marginRight: '0.5em',
                        color: theme.palette.text.secondary,
                      }}
                    />
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.categories.join(', ')}
                    </Typography>
                  </Box>
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button
                      endIcon={
                        <EastRoundedIcon
                          sx={{
                            fontSize: '1em',
                            marginRight: '0.5em',
                          }}
                        />
                      }
                    >
                      Виж повече
                    </Button>
                  </CardActions>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            justifyContent={'center'}
            marginTop={2}
          >

            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              fullWidth={isMd ? false : true}
            >
              Зареди още...
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Schools;
