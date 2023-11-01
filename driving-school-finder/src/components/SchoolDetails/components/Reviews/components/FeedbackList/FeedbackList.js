import { useState, useMemo } from 'react';

import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Rating from '@mui/material/Rating';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

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
    id: 'fullName',
    numeric: false,
    label: 'От'
  },
  {
    id: 'date',
    numeric: false,
    label: 'Дата'
  }
];

function EnhancedTableHead({ order, orderBy, onRequestSort }) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ bgcolor: 'alternate.dark' }}>
      <TableRow>
        {headCells.map((headCell) =>
          <TableCell
            key={headCell.id}
            sx={{ textAlign: 'center' }}
            sortDirection={orderBy === headCell.id ? order : false}
          >

            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography
                variant={'subtitle2'}
                fontWeight={700}
              >
                {headCell.label}
              </Typography>

            </TableSortLabel>
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}

const FeedbackList = ({ onClose, open, reviews }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - reviews.length) : 0;
  const visibleRows = useMemo(
    () =>
      stableSort(reviews, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'lg'}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 2,
        },
      }}
    >

      <TableContainer component={Paper}>
        <Table style={isMd ? { width: '10% !important' } : {}}
          aria-label="simple table">

          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={reviews.length}
          />

          <TableBody>

            {visibleRows.map((row, index) => {

              return (
                <TableRow
                  hover
                  key={index}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0, bgcolor: 'text.alternate.dark' },
                    '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                    cursor: 'pointer'
                  }}
                >
                  <TableCell key={index + row.reviewScore} sx={{ textAlign: 'center' }} component="td" scope="row">
                    <Rating
                      name="text-feedback"
                      value={row.reviewScore}
                      readOnly
                      precision={0.5}
                      fontSize="inherit"
                      size="small"
                    />
                  </TableCell>

                  <TableCell key={index + row.review} component="td" scope="row">
                    <Typography variant={'subtitle2'}>
                      {row.review}
                    </Typography>
                  </TableCell>

                  <TableCell key={index + row.fullName} sx={{ textAlign: 'center' }} component="td" scope="row">
                    <Typography variant={'subtitle2'}>
                      {row.fullName}
                    </Typography>
                  </TableCell>

                  <TableCell key={index + row.date} sx={{ textAlign: 'center' }} component="td" scope="row">
                    <Typography variant={'subtitle2'}>
                      {row.date}
                    </Typography>
                  </TableCell>

                </TableRow>
              );
            })}

            {emptyRows > 0 && (
              <TableRow
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}

          </TableBody>

        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={reviews.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Dialog >
  );
};

export default FeedbackList;
