import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { useState } from 'react';

import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackList from './components/FeedbackList/FeedbackList';

import { formatDate } from 'utils/dateFormatter';
import styles from './reviews.module.css';

const Reviews = ({ schoolUid, schoolName, userCanEdit, rating, reviews, setUserCanEdit }) => {
  const [openToReview, setOpenToReview] = useState(false);
  const [openFeedbackList, setOpenFeedbackList] = useState(false);

  return (
    <Box className={styles.mainContainer}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='h5' className={styles.headerText}>
            Отзиви от курсисти
          </Typography>

          {rating &&
            reviews &&
            (Object.keys(reviews)?.length === 0
              || Object.keys(rating)?.length === 0)
            ?
            <Typography variant='h6' className={styles.noRatingParagraph}>
              {(userCanEdit) ? 'Все още няма отзиви, можеш да дадеш първия!' : 'Все още няма отзиви'}
            </Typography>
            :
            <Box className={styles.ratingBox} marginY={2}>
              <Typography variant='h2' className={styles.headerText} marginRight={1}>
                {rating?.ratingScore?.toFixed(1)}
              </Typography>
              <Box>
                <Box className={styles.ratingBox}>
                  <Rating
                    name='text-feedback'
                    value={rating?.ratingScore}
                    readOnly
                    precision={0.5}
                    fontSize='inherit'
                    size="large"
                  />
                </Box>
                <Typography color='text.secondary'>
                  Общо {rating?.reviewsCount} оценки
                </Typography>
              </Box>
            </Box>
          }

          <Stack direction='row' spacing={2}>

            {reviews && Object.keys(reviews)?.length !== 0 &&
              <Button
                size='large'
                variant='outlined'
                onClick={() => setOpenFeedbackList(true)}
              >
                Виж всички
              </Button>
            }

            {userCanEdit &&
              <Button
                size='large'
                variant='contained'
                sx={{
                  marginTop: { xs: 2, md: 0 },
                }}
                onClick={() => setOpenToReview(true)}
              >
                Дай оценка!
              </Button>}

          </Stack>
        </Grid>

        {Object.values(reviews)?.map((review, i) => (
          <Grid key={i} xs={12} sm={6} item>

            <Box className={styles.ratingBox}>
              <Rating
                name='text-feedback'
                value={Number(review?.rating)}
                readOnly
                precision={0.5}
                fontSize='inherit'
                size='large'
              />
            </Box>

            <Typography variant='caption' color='text.secondary'>
              {`от ${review.fullName}, ${formatDate(review.date)}`}
            </Typography>

            <Typography marginY={1}>
              {review?.feedback}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <FeedbackForm
        schoolUid={schoolUid}
        schoolName={schoolName}
        open={openToReview}
        setUserCanEdit={setUserCanEdit}
        onClose={() => setOpenToReview(false)}
      />

      <FeedbackList
        open={openFeedbackList}
        onClose={() => setOpenFeedbackList(false)}
        reviews={reviews}
      />

    </Box>
  );
};

export default Reviews;
