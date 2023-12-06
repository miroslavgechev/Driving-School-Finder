import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import styles from './schoolTableContainer.module.css';

const SchoolTableContainer = ({ school, setOpenToDelete }) => {

  const headCells = [
    {
      id: 'name',
      numeric: true,
      label: 'Име на автошколата'
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
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': { border: 0, bgcolor: 'text.alternate.dark' },
              '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
              cursor: 'pointer'
            }}
          >
            <TableCell className={styles.centerText} component='td' scope='row'>
              <Typography variant='subtitle2'>
                {school?.name}
              </Typography>
            </TableCell>

            <TableCell className={styles.centerText}>
              <Button
                component={Link}
                to={`/school/${school?.id}/edit`}
                color='warning'
                variant='text'
                className={styles.cursorPointer}
              >
                Редактирай
              </Button>
            </TableCell>

            <TableCell className={styles.centerText}>
              <Button
                color='error'
                variant='text'
                className={styles.cursorPointer}
                onClick={() => {
                  setOpenToDelete(true);
                }}
              >
                Изтрий
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SchoolTableContainer;