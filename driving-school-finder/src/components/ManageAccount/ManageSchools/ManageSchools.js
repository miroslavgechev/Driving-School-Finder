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

const ManageSchools = () => {

  const schoolsMock = [
    { name: 'Училище 1 Училище 1 Училище 1 Училище 1 Училище 1 Училище 1 Училище 1' },
    { name: 'Училище 2' },
  ];

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
                        sx={{ textAlign: 'center', fontWeight: 700 }}
                      >

                        {headCell.label}

                      </TableCell>
                    )}
                  </TableRow>
                </TableHead>

                <TableBody>

                  {schoolsMock.map((school, index) => (
                    <TableRow
                      hover
                      key={index}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0, bgcolor: 'text.alternate.dark' },
                        '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                        cursor: 'pointer'
                      }}
                    >


                      <TableCell key={index + school.name} sx={{ textAlign: 'center' }} component="td" scope="row">
                        <Typography variant={'subtitle2'}>
                          {school.name}
                        </Typography>
                      </TableCell>

                      <TableCell key={index + 'editButton'} sx={{ textAlign: 'center' }}>
                        <Button
                          color={'primary'}
                          variant={'text'}
                          name={index}
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
      </form>
    </Container>
  );
};

export default ManageSchools;
