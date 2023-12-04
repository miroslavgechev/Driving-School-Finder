import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackList from './components/FeedbackList/FeedbackList';

import styles from './reviews.module.css';

const Reviews = ({ ratingScore, ratingCount, reviews, schoolUid }) => {

  const [openToReview, setOpenToReview] = useState(false);
  const [openFeedbackList, setOpenFeedbackList] = useState(false);

  return (
    <Box className={styles.mainContainer}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='h5' className={styles.headerText}>
            Отзиви от курсисти
          </Typography>
          <Box className={styles.ratingBox} marginY={2}>
            <Typography variant='h2' className={styles.headerText} marginRight={1}>
              {ratingScore}
            </Typography>
            <Box>
              <Box className={styles.ratingBox}>
                <Rating
                  name='text-feedback'
                  value={ratingScore}
                  readOnly
                  precision={0.5}
                  fontSize='inherit'
                  size="large"
                />
              </Box>
              <Typography color='text.secondary'>
                Общо {ratingCount} оценки
              </Typography>
            </Box>
          </Box>
          <Stack direction='row' spacing={2}>
            <Button
              size='large'
              variant='outlined'
              onClick={() => setOpenFeedbackList(true)}
            >
              Виж всички
            </Button>
            <Button
              size='large'
              variant='contained'
              sx={{
                marginTop: { xs: 2, md: 0 },
              }}
              onClick={() => setOpenToReview(true)}
            >
              Дай оценка!
            </Button>
          </Stack>
        </Grid>
        {reviews.map((item, i) => (
          <Grid key={i} xs={12} sm={6} item>
            <Box className={styles.ratingBox}>
              <Rating
                name='text-feedback'
                value={item.reviewScore}
                readOnly
                precision={0.5}
                fontSize='inherit'
                size='large'
              />
            </Box>
            <Typography variant='caption' color='text.secondary'>
              {`от ${item.fullName}, ${item.date}`}
            </Typography>
            <Typography marginY={1}>{item.review}</Typography>
          </Grid>
        ))}
      </Grid>
      <FeedbackForm schoolUid={schoolUid} open={openToReview} onClose={() => setOpenToReview(false)} />
      <FeedbackList open={openFeedbackList} onClose={() => setOpenFeedbackList(false)} reviews={reviews} />

    </Box>
  );
};

export default Reviews;
