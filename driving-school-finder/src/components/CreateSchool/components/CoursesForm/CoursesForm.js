import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Container from 'components/Container';

import { TABLE_SUBTITLES } from 'CONSTANTS';

const subtitles = TABLE_SUBTITLES;

const courses = ['A', 'B'];

const CoursesForm = () => {

  return (
    <Container paddingY={{ xs: 2, sm: 2.5 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: 'alternate.dark' }}>
            <TableRow>
              <TableCell />
              {courses.map((item, i) => (
                <TableCell key={i} sx={{ textAlign: 'center' }}>
                  <Typography
                    variant={'subtitle2'}
                    fontWeight={700}
                  >
                    Категория "{item}"
                  </Typography>
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {Object.entries(subtitles).map(([key, value]) => (
              <TableRow
                key={key}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0, bgcolor: 'text.alternate.dark' },
                  '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                }}
              >
                <TableCell sx={{ width: '20%' }} component="th" scope="row">
                  <Typography variant={'subtitle2'} fontWeight={700}>
                    {value}
                  </Typography>
                </TableCell>

                {courses.map((item, i) => (
                  <TableCell key={i + item} sx={{ textAlign: 'center' }}>

                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'1em'}>
                      <TextField
                        variant="outlined"
                        name={item + '_' + key}
                        sx={{ width: '20%', textAlign: 'center' }}
                      />
                      {' '}
                      <Typography color={'text.secondary.contrastText'} variant={'subtitle2'} fontWeight={key === 'coursePrice' ? 900 : undefined} >
                        {item[key]} {item[key] == 'Безплатен' ? '' : key.startsWith('hours') ? 'часа' : 'лв.'}
                      </Typography>
                    </Box>

                  </TableCell>
                ))}

                <TableCell>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Container>
  );
};

export default CoursesForm;
