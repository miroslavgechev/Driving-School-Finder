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
import CircularProgress from '@mui/material/CircularProgress';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS';
import styles from './schoolsList.module.css';

const SchoolsList = ({ schoolsFiltered }) => {
  const theme = useTheme();

  return (
    <Box paddingTop={{ xs: 0, md: 4 }}>
      {!schoolsFiltered &&
        <Box className={styles.spinner}>
          <CircularProgress />
        </Box>
      }

      {schoolsFiltered?.length === 0 &&
        <Box className={styles.noSchoolFoundMessageContainer}>
          <Typography variant='h6' className={styles.noSchoolFoundMessage}>
            Няма автошкола, отговаряща на критериите.
          </Typography>
        </Box>
      }

      {schoolsFiltered &&
        <Grid container spacing={4}>
          {schoolsFiltered?.map((school, i) => (
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
                  title={school.name}
                  image={school.mainImage}
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
                      <Rating
                        name='read-only'
                        value={Number(school.ratingScore)}
                        precision={0.5}
                        readOnly
                      />
                    </Box>

                    {/* To use for add to favourites future functionality: */}
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
                    {school.name}
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
                      {
                        school.regionsServed.includes('Всички')
                          ?
                          'Всички'
                          :
                          school.regionsServed.join(', ').slice(0, 40) + '...'
                      }
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
                      {school.categoriesServed.join(', ')}
                    </Typography>
                  </Box>

                  <CardActions className={styles.cardActions}>
                    <Button
                      component={Link}
                      to={ROUTES.schoolDetails(school.ownerUid)}
                      endIcon={
                        <EastRoundedIcon className={styles.itemIcon} />
                      }
                    >
                      Виж повече
                    </Button>
                  </CardActions>
                </CardContent>
              </Box>
            </Grid>
          ))}

          {/* Use in case of more schools than the current limit: */}
          {/* <Grid item xs={12}>
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
        </Grid> */}
        </Grid>
      }
    </Box >

  );
};

export default SchoolsList;
