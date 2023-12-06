import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import EditFeedbackForm from './EditFeedbackForm/EditFeedbackForm';
import DeleteFeedbackForm from './DeleteFeedbackForm/DeleteFeedbackForm';

import styles from './manageReviews.module.css';
import { useAuthContext } from 'contexts/authContext';
import { getReviewsByUserId } from 'services/firestoreService';

const ManageReviews = () => {
  const [openToReview, setOpenToReview] = useState(false);
  const [openToDelete, setOpenToDelete] = useState(false);
  const [userReviews, setUserReviews] = useState([]);
  const [reviewToEdit, setReviewToEdit] = useState(null);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviewsByUserId(user.uid);
        setUserReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    user && fetchReviews();
  }, [user, reviewToEdit, reviewToDelete]);

  const headCells = [
    {
      id: 'reviewScore',
      numeric: true,
      label: 'Оценка'
    },
    {
      id: 'review',
      numeric: false,
      label: 'Отзив'
    },
    {
      id: 'school',
      numeric: false,
      label: 'Автошкола'
    },
    {
      id: 'date',
      numeric: false,
      label: 'Дата'
    },
    {
      id: 'editButton',
      numeric: false,
      label: ''
    },
    {
      id: 'deleteButton',
      numeric: false,
      label: ''
    }
  ];

  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ bgcolor: 'alternate.dark' }}>
                  <TableRow>
                    {headCells.map((headCell) =>
                      <TableCell
                        key={headCell.id}
                        className={styles.tableCell}
                      >

                        {headCell.label}

                      </TableCell>
                    )}
                  </TableRow>
                </TableHead>

                <TableBody>

                  {userReviews.map((review, index) => (
                    <TableRow
                      hover
                      key={index}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0, bgcolor: 'text.alternate.dark' },
                        '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                      }}
                      className={styles.cursor}
                    >
                      <TableCell key={index + review.rating} className={styles.centerText} component='td' scope='row'>
                        <Rating
                          name='text-feedback'
                          value={Number(review.rating)}
                          readOnly
                          precision={0.5}
                          fontSize='inherit'
                          size='small'
                        />
                      </TableCell>

                      <TableCell key={index + review.feedback} component='td' scope='row'>
                        <Typography variant='subtitle2'>
                          {review.feedback}
                        </Typography>
                      </TableCell>

                      <TableCell key={index + review.schoolName} className={styles.centerText} component='td' scope='row'>
                        <Typography variant='subtitle2'>
                          {review.schoolName}
                        </Typography>
                      </TableCell>

                      <TableCell key={index + review.date} className={styles.centerText} component='td' scope='row'>
                        <Typography variant='subtitle2'>
                          {review?.date?.slice(0, 10)}
                        </Typography>
                      </TableCell>

                      <TableCell key={index + 'button'} className={styles.centerText}>
                        <Button
                          color='primary'
                          variant='text'
                          name={index}
                          onClick={() => {
                            setOpenToReview(true);
                            setReviewToEdit(review);
                          }}
                        >
                          Редактирай
                        </Button>
                      </TableCell>

                      <TableCell key={index + 'deleteButton'} variant='warning' className={styles.centerText}>
                        <Button
                          color='error'
                          variant='text'
                          name={index}
                          onClick={() => {
                            setOpenToDelete(true);
                            setReviewToDelete(review);
                          }}
                        >
                          Изтрий
                        </Button>
                      </TableCell>

                    </TableRow>
                  )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid
            item
            container
            xs={12}
            className={styles.gridItem}
          >

          </Grid>
        </Grid>


      </Container >

      {
        reviewToEdit && <EditFeedbackForm
          reviewToEdit={reviewToEdit}
          setReviewToEdit={setReviewToEdit}
          open={openToReview}
          onClose={() => setOpenToReview(false)} />
      }

      {
        reviewToDelete && <DeleteFeedbackForm
          reviewToDelete={reviewToDelete}
          setReviewToDelete={setReviewToDelete}
          open={openToDelete}
          onClose={() => setOpenToDelete(false)} />
      }
    </>
  );
};

export default ManageReviews;
