import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './confirmForm.module.css';

import { useSetSchoolContext } from 'contexts/setSchoolContext';
import { SUCCESS_STATES } from 'CONSTANTS';

//!TO DO - add redirection to details!
//!TO DO - fix alert texts based on edit/create

const ConfirmForm = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSchoolObjectCompleted, setIsSchoolObjectCompleted] = useState(false);
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);

  const { school, uploadSchool } = useSetSchoolContext();
  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  useEffect(() => {
    if (school &&
      Object.prototype.hasOwnProperty.call(school, 'name') &&
      Object.prototype.hasOwnProperty.call(school, 'region') &&
      Object.prototype.hasOwnProperty.call(school, 'mainImage') &&
      Object.prototype.hasOwnProperty.call(school, 'courses')) {
      setIsSchoolObjectCompleted(true);
    } else {
      setIsSchoolObjectCompleted(false);
    }
  }, [school]);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      await uploadSchool();
      setSuccessState(SUCCESS_STATES.success);

    } catch (error) {
      setSuccessState(SUCCESS_STATES.error);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Grid item container xs={12}>
        <Box className={styles.buttonBoxContainer} >
          <Button
            size='large'
            variant='contained'
            type='button'
            onClick={handleClick}
            disabled={!isSchoolObjectCompleted || isLoading}
            startIcon={isLoading
              ?
              <CircularProgress size={22} />
              :
              <CloudUploadOutlinedIcon />}
          >
            {currentLocation === '/school/create'
              ?
              'Създай автошколата'
              :
              'Обнови автошколата'}
          </Button>
          <Box marginBottom={{ xs: 1, sm: 0 }}>
            {successState === SUCCESS_STATES.success &&
              <Alert
                className={styles.fullWidth}
                severity="success">
                Автошколата е създадена успешно, пренасочваме те...
              </Alert>
            }
            {successState === SUCCESS_STATES.error &&
              <Alert
                className={styles.fullWidth}
                severity="error">
                Нещо се счупи. Автошколата не е създадена...
              </Alert>
            }
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default ConfirmForm;