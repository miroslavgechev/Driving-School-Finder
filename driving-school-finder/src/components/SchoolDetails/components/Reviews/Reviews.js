import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import FeedbackForm from './components/FeedbackForm/FeedbackForm';

const Reviews = ({ ratingScore = 0, ratingCount = 0, reviews }) => {

  const [open, setOpen] = useState(false);

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant={'h5'} fontWeight={700}>
            Отзиви от курсисти
          </Typography>
          <Box display={'flex'} alignItems={'center'} marginY={2}>
            <Typography variant={'h2'} fontWeight={700} marginRight={1}>
              {ratingScore}
            </Typography>
            <Box>
              <Box display={'flex'} alignItems={'center'}>
                <Rating
                  name="text-feedback"
                  value={ratingScore}
                  readOnly
                  precision={0.5}
                  fontSize="inherit"
                  size="large"
                />
              </Box>
              <Typography color={'text.secondary'}>
                Общо {ratingCount} оценки
              </Typography>
            </Box>
          </Box>
          <Stack direction={'row'} spacing={2}>
            <Button size={'large'} variant={'outlined'}>
              Виж всички
            </Button>
            <Button
              size={'large'}
              variant={'contained'}
              sx={{
                marginTop: { xs: 2, md: 0 },
              }}
              onClick={() => setOpen(true)}
            >
              Дай оценка!
            </Button>
          </Stack>
        </Grid>
        {reviews.map((item, i) => (
          <Grid key={i} xs={12} sm={6} item>
            <Box display={'flex'} alignItems={'center'}>
              <Rating
                name="text-feedback"
                value={item.reviewScore}
                readOnly
                precision={0.5}
                fontSize="inherit"
                size="large"
              />
            </Box>
            <Typography variant={'caption'} color={'text.secondary'}>
              {`от ${item.fullName}, ${item.date}`}
            </Typography>
            <Typography marginY={1}>{item.review}</Typography>
          </Grid>
        ))}
      </Grid>
      <FeedbackForm open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default Reviews;
