import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import styles from './feedbackForm.module.css';
import { useAuthContext } from 'contexts/authContext';
import { SUCCESS_STATES } from 'CONSTANTS';
import { addReviewToSchool } from 'services/firestoreService';

const validationSchema = yup.object({
  rating: yup
    .number()
    .transform(value => (isNaN(value) ? undefined : value))
    .required('Оценката е задължителна')
    .positive('Оценката трябва да е положително число')
    .integer('Оценката трябва да е цяло число'),
  feedback: yup
    .string()
    .trim()
    .required('Въвеждането на отзив е задължително')
    .min(1, 'Отзива следва да е поне един символ')
    .max(500, 'Отзива не може да е повече от 500 символа'),
});

const FeedbackForm = ({ onClose, open, schoolUid }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);

  const initialValues = {
    rating: 3,
    feedback: '',
  };

  const handleSubmit = async (values) => {
    try {
      formik.setStatus(null);
      setIsLoading(true);

      //TODO: ADD FULL NAME AND DATE TO REVIEW!

      await addReviewToSchool(schoolUid, user.uid, values);

      setTimeout(() => {
        setIsLoading(false);
        setSuccessState(SUCCESS_STATES.success);
        onClose();
      }, 1000);

    } catch (error) {
      setIsLoading(false);
      setSuccessState(SUCCESS_STATES.error);
    }
  };

  const handleChange = (event) => {
    formik.handleChange(event);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'sm'}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 2,
        },
      }}
    >
      <Box paddingY={2} paddingX={4}>
        <Box paddingY={2} className={styles.containerBox}>
          <Typography variant='h5' className={styles.headerText}>
            Дай оценка
          </Typography>
          <CloseOutlinedIcon
            onClick={onClose}
            className={styles.cursorPointer}
          />
        </Box>

        <Box paddingY={2}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='subtitle1' className={styles.headerText} sx={{ marginBottom: 1 }}>
                  Даваш оценка като {user?.firstName} {user?.lastName}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='subtitle2' sx={{ marginBottom: 1 }}>
                  Оценка
                </Typography>

                <Box className={styles.containerBox}>
                  <Rating
                    name='rating'
                    precision={1}
                    fontSize='inherit'
                    size='large'
                    value={Number(formik.values.rating)}
                    onChange={handleChange}
                  />
                  {formik.touched.rating && formik.errors.rating &&
                    <FormHelperText error>{formik.errors.rating}</FormHelperText>
                  }
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subtitle2' sx={{ marginBottom: 1 }}>

                </Typography>
                <TextField
                  label='Отзив *'
                  variant='outlined'
                  name='feedback'
                  className={styles.fullWidth}
                  multiline
                  rows={5}
                  value={formik.values.feedback}
                  onChange={handleChange}
                  error={formik.touched.feedback && Boolean(formik.errors.feedback)}
                  helperText={formik.touched.feedback && formik.errors.feedback}
                />
              </Grid>
              <Grid item container xs={12}>
                <Box className={styles.buttonBoxContainer}>

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

                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    {successState === SUCCESS_STATES.success &&
                      <Alert
                        className={styles.fullWidth}
                        severity="success">
                        Твоят отзив е получен!
                      </Alert>
                    }
                    {successState === SUCCESS_STATES.error &&
                      <Alert
                        className={styles.fullWidth}
                        severity="error">
                        Нещо се обърка, твоят отзив не е получен...
                      </Alert>
                    }
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Dialog>
  );
};

export default FeedbackForm;
