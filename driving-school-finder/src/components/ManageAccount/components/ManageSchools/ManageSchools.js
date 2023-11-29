import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';

import styles from './manageSchools.module.css';
// import { useSetSchoolContext } from 'contexts/setSchoolContext';

const ManageSchools = () => {
  const school = {
    id: 15,
    name: 'Test Driving School Mock'
  };
  // const { school } = useSetSchoolContext();

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
    <Container>
      <form>
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
                  <TableRow
                    hover
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0, bgcolor: 'text.alternate.dark' },
                      '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                      cursor: 'pointer'
                    }}
                  >
                    <TableCell className={styles.centerText} component="td" scope="row">
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
                      >
                        Редактирай
                      </Button>
                    </TableCell>

                    <TableCell className={styles.centerText}>
                      <Button
                        color='error'
                        variant={'text'}
                      >
                        Изтрий
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ManageSchools;
