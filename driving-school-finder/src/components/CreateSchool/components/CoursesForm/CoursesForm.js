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
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import { useState } from 'react';
import styles from './courseForm.module.css';
import { TABLE_SUBTITLES, SUCCESS_STATES } from 'CONSTANTS';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useSetSchoolContext } from 'contexts/setSchoolContext';

const subtitles = TABLE_SUBTITLES;

let validationSchema = yup.object();

const CoursesForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);
  const { setSchoolCourses, school } = useSetSchoolContext();

  school?.categoriesServed?.forEach((item) => {
    Object.entries(subtitles).forEach(([key]) => {
      validationSchema = validationSchema.shape({
        [item + '_' + key]: yup.number().typeError('Въведи валидно число').min(0).required('Полето е задължително'),
      });
    });
  });

  let initialValues = {};
  school.categoriesServed?.forEach((item) => {
    Object.entries(subtitles).forEach(([key]) => {
      initialValues[item + '_' + key] = '';
    });
  });

  const handleSubmit = async (values) => {
    try {
      formik.setStatus(null);
      setIsLoading(true);

      let courses = [];

      school.categoriesServed?.forEach((item) => {
        let course = Object.fromEntries(Object.entries(values).filter(([key]) => key.split('_')[0] === item));
        courses.push(course);
      });

      setSchoolCourses(courses);

      setTimeout(() => {
        setIsLoading(false);
        setSuccessState(SUCCESS_STATES.success);
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setSuccessState(SUCCESS_STATES.error);
      }, 500);
    }
  };

  const handleChange = (event) => {
    setSuccessState(SUCCESS_STATES.error);
    formik.handleChange(event);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4} paddingY={{ xs: 2, sm: 2.5 }}>
          <TableContainer component={Paper}>
            <Table className={styles.minWidth}>
              <TableHead sx={{ bgcolor: 'alternate.dark' }}>
                <TableRow>
                  <TableCell />
                  {school?.categoriesServed?.map((item, i) => (
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
                    <TableCell className={styles.cellWidth} component="th" scope="row">
                      <Typography variant='subtitle2' className={styles.headerText}>
                        {value}
                      </Typography>
                    </TableCell>

                    {school?.categoriesServed?.map((item, i) => (
                      <TableCell key={i + item} className={styles.tableHead}>

                        <Box className={styles.tableCellContainer}>
                          <TextField
                            variant='outlined'
                            name={item + '_' + key}
                            className={styles.cellWidthContent}
                            inputProps={{ className: styles.tableHead }}
                            value={formik.values[`${item + '_' + key}`]}
                            onChange={handleChange}
                            error={formik.touched[`${item + '_' + key}`] && Boolean(formik.errors[`${item + '_' + key}`])}
                            helperText={formik.touched[`${item + '_' + key}`] && formik.errors[`${item + '_' + key}`]}
                          />
                          <Typography
                            color='text.secondary.contrastText'
                            variant='subtitle2'
                            fontWeight={key === 'coursePrice' ? 900 : undefined}
                          >
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
                {successState === SUCCESS_STATES.success &&
                  <Alert
                    className={styles.fullWidth}
                    severity="success">
                    Промените са запазени локално
                  </Alert>
                }
                {successState === SUCCESS_STATES.error &&
                  <Alert
                    className={styles.fullWidth}
                    severity="error">
                    Промените не са запазени
                  </Alert>
                }
              </Box>
              <Button
                size='large'
                variant='contained'
                type='submit'
                disabled={isLoading}
                startIcon={isLoading
                  ?
                  <CircularProgress size={22} />
                  :
                  <CloudUploadOutlinedIcon />}
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