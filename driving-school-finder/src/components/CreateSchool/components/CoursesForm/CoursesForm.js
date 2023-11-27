import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import styles from './courseForm.module.css';
import { TABLE_SUBTITLES } from 'CONSTANTS';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

import { useSetSchoolContext } from 'contexts/setSchoolContext';

const subtitles = TABLE_SUBTITLES;

const CoursesForm = () => {

  const { school } = useSetSchoolContext();

  return (
    <Container>
      <form>
        <Grid container spacing={4} paddingY={{ xs: 2, sm: 2.5 }}>
          <TableContainer component={Paper}>
            <Table className={styles.minWidth}>
              <TableHead sx={{ bgcolor: 'alternate.dark' }}>
                <TableRow>
                  <TableCell />
                  {school.categoriesServed?.map((item, i) => (
                    <TableCell key={i} className={styles.tableHead}>
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
                    <TableCell className={style.cellWidth} component="th" scope="row">
                      <Typography variant='subtitle2' className={styles.headerText}>
                        {value}
                      </Typography>
                    </TableCell>

                    {school.categoriesServed?.map((item, i) => (
                      <TableCell key={i + item} className={styles.tableHead}>

                        <Box className={styles.tableCellContainer}>
                          <TextField
                            variant='outlined'
                            name={item + '_' + key}
                            className={styles.cellWidthContent}
                            inputProps={{ className: styles.tableHead }}
                          />
                          <Typography color='text.secondary.contrastText' variant='subtitle2' fontWeight={key === 'coursePrice' ? 900 : undefined} >
                            {item[key]} {item[key] == 'Безплатен' ? '' : key.startsWith('hours') ? 'часа' : 'лева'}
                          </Typography>
                        </Box>

                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>

          <Grid item container xs={12}>
            <Box className={styles.buttonBoxContainer} >

              <Box marginBottom={{ xs: 1, sm: 0 }}>

              </Box>
              <Button
                size={'large'}
                variant={'contained'}
                type={'submit'}
                startIcon={<CloudUploadOutlinedIcon />}
              >
                Запази промените
              </Button>
            </Box>
          </Grid>

        </Grid>
      </form>
    </Container>
  );
};

export default CoursesForm;
