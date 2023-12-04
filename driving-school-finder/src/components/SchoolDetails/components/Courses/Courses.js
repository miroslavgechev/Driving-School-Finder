import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

import { TABLE_SUBTITLES } from 'CONSTANTS';
import styles from './courses.module.css';

const Courses = ({ school }) => {

  const subtitles = TABLE_SUBTITLES;

  const tableValues = {};

  school?.categoriesServed?.forEach((key) => {
    Object.entries(subtitles).forEach(([item]) => {
      let combinedKey = key + '_' + item;
      tableValues[combinedKey] = '';

      school?.courses?.forEach(course => {
        if (combinedKey in course) {
          tableValues[combinedKey] = course[combinedKey];
        }
      });
    });
  });

  return (
    <Container paddingY={{ xs: 2, sm: 2.5 }}>
      <TableContainer component={Paper}>
        <Table id='courses' className={styles.table}>
          <TableHead sx={{ bgcolor: 'alternate.dark' }}>
            <TableRow>
              <TableCell />
              {school?.categoriesServed.map((item, i) => (
                <TableCell key={i} className={styles.centerText}>
                  <Typography
                    variant='subtitle2'
                    className={styles.headerText}
                  >
                    Категория "{item}"
                  </Typography>
                </TableCell>
              ))}
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
                <TableCell className={styles.cellWidth} component="th" scope="row">
                  <Typography variant='subtitle2' className={styles.headerText}>
                    {value}
                  </Typography>
                </TableCell>

                {school.categoriesServed.map((item, i) => (
                  <TableCell key={i + item} className={styles.centerText}>

                    <Typography color='text.secondary.contrastText' variant='subtitle2' fontWeight={key === 'coursePrice' ? 900 : undefined} >
                      {tableValues[`${item + '_' + key}`] == 0 ? 'Безплатен' : tableValues[`${item + '_' + key}`]}
                      {' '}
                      {tableValues[`${item + '_' + key}`] != 0 ? (key.startsWith('hours') ? 'часа' : 'лв.') : ''}
                    </Typography>

                  </TableCell>
                ))}

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Container>


  );
};

export default Courses;