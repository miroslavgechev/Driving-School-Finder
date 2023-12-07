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
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { useTheme } from '@mui/material/styles';
import styles from './schoolsList.module.css';

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

const SchoolsList = () => {
  const theme = useTheme();

  return (
    <Box paddingTop={{ xs: 0, md: 4 }}>

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
            <Box
              component={Card}
              className={styles.cardContainer}
            >
              <CardMedia
                title={item.title}
                image={item.media}
                className={styles.cardMedia}
              >
                <Box
                  className={styles.overMediaItemsContainer}
                  padding={2}
                >
                  <Box
                    className={styles.ratingContainer}
                    padding={1}
                    bgcolor={'background.paper'}
                    boxShadow={1}
                    borderRadius={2}
                  >
                    <Rating name='read-only' value={item.value} readOnly />
                  </Box>

                  {/* <Box
                    className={styles.favouritesContainer}
                    padding={1}
                    bgcolor={'background.paper'}
                    boxShadow={1}
                    borderRadius={2}
                  >
                    <FavoriteBorderOutlinedIcon
                      color='primary'
                    />
                  </Box> */}

                </Box>
              </CardMedia>

              <CardContent>
                <Typography
                  className={styles.schoolTitle}
                  variant='h6'
                >
                  {item.title}
                </Typography>

                <Box
                  className={styles.schoolItemsContainer}
                  marginY={2}
                >
                  <PlaceOutlinedIcon
                    className={styles.itemIcon}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  />
                  <Typography variant='subtitle2' color='text.secondary'>
                    {item.location}
                  </Typography>
                </Box>

                <Box className={styles.schoolItemsContainer}>
                  <DirectionsCarFilledOutlinedIcon
                    className={styles.itemIcon}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  />
                  <Typography variant='subtitle2' color='text.secondary'>
                    {item.categories.join(', ')}
                  </Typography>
                </Box>

                <CardActions className={styles.cardActions}>
                  <Button
                    endIcon={
                      <EastRoundedIcon
                        className={styles.itemIcon}
                      />
                    }
                  >
                    Виж повече
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Box
            className={styles.loadMoreBtnContainer}
            marginTop={2}
          >
            <Button
              variant='outlined'
              color='primary'
              size='large'
              className={styles.loadMoreButton}
            >
              Зареди още...
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
};

export default SchoolsList;
