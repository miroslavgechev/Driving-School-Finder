import { useState } from 'react';

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

import EditFeedbackForm from './EditFeedbackForm/EditFeedBackForm';

const ManageReviews = () => {
  const [openToReview, setOpenToReview] = useState(false);

  const reviewsMock = [
    { school: 'Училище 1', date: '2023-03-25', reviewScore: 4, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
    { school: 'Училище 2', date: '2023-01-26', reviewScore: 5, review: 'Най-добрите!' },
  ];

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
                      sx={{ textAlign: 'center', fontWeight: 700 }}
                    >

                      {headCell.label}

                    </TableCell>
                  )}
                </TableRow>
              </TableHead>

              <TableBody>

                {reviewsMock.map((review, index) => (
                  <TableRow
                    hover
                    key={index}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0, bgcolor: 'text.alternate.dark' },
                      '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                      cursor: 'pointer'
                    }}
                  >
                    <TableCell key={index + review.reviewScore} sx={{ textAlign: 'center' }} component="td" scope="row">
                      <Rating
                        name="text-feedback"
                        value={review.reviewScore}
                        readOnly
                        precision={0.5}
                        fontSize="inherit"
                        size="small"
                      />
                    </TableCell>

                    <TableCell key={index + review.review} component="td" scope="row">
                      <Typography variant={'subtitle2'}>
                        {review.review}
                      </Typography>
                    </TableCell>

                    <TableCell key={index + review.school} sx={{ textAlign: 'center' }} component="td" scope="row">
                      <Typography variant={'subtitle2'}>
                        {review.school}
                      </Typography>
                    </TableCell>

                    <TableCell key={index + review.date} sx={{ textAlign: 'center' }} component="td" scope="row">
                      <Typography variant={'subtitle2'}>
                        {review.date}
                      </Typography>
                    </TableCell>

                    <TableCell key={index + 'button'} sx={{ textAlign: 'center' }}>
                      <Button
                        color={'primary'}
                        variant={'text'}
                        name={index}
                        onClick={() => setOpenToReview(true)}

                      >
                        Редактирай
                      </Button>
                    </TableCell>

                    <TableCell key={index + 'deleteButton'} variant='warning' sx={{ textAlign: 'center' }}>
                      <Button
                        color={'error'}
                        variant={'text'}
                        name={index}
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

      </Grid>

      <EditFeedbackForm open={openToReview} onClose={() => setOpenToReview(false)} />

    </Container>
  );
};

export default ManageReviews;
