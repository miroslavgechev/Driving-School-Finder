import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';

const Details = ({
  name,
  description,
  ratingScore,
  ratingCount,
  address,
  phone,
  email,
  whyUs,
  regionsServed,
  categoriesServed,
}) => {
  return (
    <Box>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={'space-between'}
        alignItems={{ sm: 'center' }}
        textAlign={{ xs: 'center', sm: 'center' }}
      >
        <Typography variant="h4" marginBottom={{ xs: 1, sm: 0 }} fontWeight={700}>{name}</Typography>
      </Box>

      <Divider sx={{ marginTop: 2 }} />

      {/* Rating */}
      <Box display={'flex'}
        flexDirection={{ xs: 'column', sm: 'column' }}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={1}
        marginBottom={1}>

        <Box display={'flex'}
          justifyContent={'center'}
          paddingBottom={1}
        >
          <Rating
            name="text-feedback"
            value={ratingScore}
            readOnly
            precision={0.5}
            fontSize="inherit"
            size="large"
          />
        </Box>

        <Link href={'#reviews'} underline={'hover'} variant={'subtitle1'}
        >
          {ratingScore} от {ratingCount} оценки
        </Link>
      </Box>

      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      {/* Description */}
      <Box marginTop={4}>
        <Typography>Описание</Typography>
        <Typography
          variant={'body1'}
          color={'text.secondary'}
          marginTop={1}
        >
          {description}
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
              sx={{
                alignItems: 'flex-start',
                padding: 0,
              }}
            >
              <ListItemAvatar sx={{ minWidth: 0, mr: 1 }}>
                <Box color={'text.secondary'}>
                  <DirectionsCarFilledOutlinedIcon />
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary='Категории'
                secondary={
                  categoriesServed.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size={'small'}
                      color={'secondary'}
                      clickable
                      sx={{ marginBottom: 1, marginTop: 1, marginRight: 1 }}
                    />
                  ))
                }
                sx={{
                  margin: 0,
                }}
              />
            </ListItem>
          </Grid>

          {/* regionsServed */}
          <Grid item xs={6}>
            <ListItem
              component="div"
              disableGutters
              sx={{
                alignItems: 'flex-start',
                padding: 0,
              }}
            >
              <ListItemAvatar sx={{ minWidth: 0, mr: 1 }}>
                <Box color={'text.secondary'}>
                  <PlaceOutlinedIcon />
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary='Обслужвани райони'
                secondary={
                  regionsServed.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size={'small'}
                      color={'primary'}
                      clickable
                      sx={{ marginTop: 1, marginRight: 1 }}
                    />
                  ))
                }
                sx={{
                  margin: 0,
                }}
              />
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
            {whyUs.map((item, i) => (
              <li>
                <Typography
                  key={i}
                  variant={'body1'}
                  color={'text.secondary'}
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

        <Stack direction={'row'} spacing={2} marginTop={0.5}>
          <Button
            sx={{
              color: 'text.secondary',
            }}
            href={`tel:${phone}`}
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
            href={`mailto:${email}`}
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
              `${address.city}, ${address.region}, ${address.street}`
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
