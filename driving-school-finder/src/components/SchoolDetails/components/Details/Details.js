import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';

import styles from './details.module.css';


const Details = ({ school }) => {

  return (
    <Box>
      <Box className={styles.headerContainer}>
        <Typography
          variant='h4'
          marginBottom={{ xs: 1, sm: 0 }}
          className={styles.headerText}>
          {school.name}
        </Typography>
      </Box>

      <Divider sx={{ marginTop: 2 }} />

      {/* Rating */}
      <Box
        className={styles.ratingContainer}
        marginTop={1}
        marginBottom={1}>

        <Box className={styles.ratingBox}
          paddingBottom={1}
        >
          <Rating
            name='text-feedback'
            //!!TO DO Replace with actual variable
            value={school.ratingScore}
            readOnly
            precision={0.5}
            fontSize='inherit'
            size='large'
          />
        </Box>

        <Link href={'#reviews'} className={styles.link} variant='subtitle1'>
          {/* //!!TO DO Replace with actual variable */}
          {school.ratingScore} от {school.ratingCount} оценки
        </Link>
      </Box>

      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      {/* Description */}
      <Box marginTop={4}>
        <Typography>Описание</Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          marginTop={1}
        >
          {school.description}
        </Typography>
      </Box>

      <Divider sx={{ marginTop: 4 }} />

      {/* Categories & Regions */}
      <Box marginTop={4}>
        <Grid container spacing={2}>
          {/* categoriesServed */}
          <Grid item xs={6}>
            <ListItem
              component="div"
              disableGutters
              className={styles.listItem}
            >
              <ListItemAvatar sx={{ mr: 1 }} className={styles.listItemAvatar}>
                <Box color='text.secondary'>
                  <DirectionsCarFilledOutlinedIcon />
                </Box>
              </ListItemAvatar>

              <div>
                <Typography variant='body1'>Категории</Typography>
                <div>
                  {school.categoriesServed.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size='small'
                      color='secondary'
                      clickable
                      sx={{ marginBottom: 1, marginTop: 1, marginRight: 1 }}
                      component='a'
                      href='#courses'
                    />
                  ))}
                </div>
              </div>
            </ListItem>
          </Grid>

          {/* regionsServed */}
          <Grid item xs={6}>
            <ListItem
              component="div"
              disableGutters
              className={styles.listItem}
            >
              <ListItemAvatar sx={{ mr: 1 }} className={styles.listItemAvatar}>
                <Box color='text.secondary'>
                  <PlaceOutlinedIcon />
                </Box>
              </ListItemAvatar>
              <div>
                <Typography variant='body1'>Обслужвани райони</Typography>
                <div>
                  {school.regionsServed.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size='small'
                      color='primary'
                      clickable
                      sx={{ marginTop: 1, marginRight: 1 }}
                    />
                  ))}
                </div>
              </div>
            </ListItem>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ marginTop: 4 }} />

      {/* Why Us */}
      <Box marginTop={4}>
        <Typography>Защо да избереш нас?</Typography>
        <Box marginTop={1}>
          <ul>
            {school.whyUs.map((item, i) => (
              <li key={i}>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  marginTop={1}
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>

      <Divider sx={{ marginTop: 4 }} />

      {/* <Box marginTop={4}>
        <Button variant={'outlined'} color={'primary'} size={'large'} fullWidth>
          Добави към любими
        </Button>
      </Box> */}

      {/* Contacts */}
      <Box marginTop={4}>
        <Typography>Връзка с нас:</Typography>

        <Stack direction='row' spacing={2} marginTop={0.5}>
          <Button
            sx={{
              color: 'text.secondary',
            }}
            href={`tel:${school.phone}`}
            startIcon={
              <LocalPhoneRoundedIcon />
            }
          >
            Телефон
          </Button>

          <Button
            sx={{
              color: 'text.secondary',
            }}
            href={`mailto:${school.email}`}
            startIcon={
              <EmailRoundedIcon />
            }
          >
            Имейл
          </Button>

          <Button
            sx={{
              color: 'text.secondary',
            }}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${school.city}, ${school.region}, ${school.street}`
            )}`}
            target='_blank'
            startIcon={
              <BusinessRoundedIcon />
            }
          >
            Адрес
          </Button>

        </Stack>
      </Box>

    </Box >
  );
};

export default Details;
