import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CircularProgress from '@mui/material/CircularProgress';

import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import AlertMessage from 'components/shared/AlertMessage/AlertMessage';

import { useSetSchoolContext } from 'contexts/setSchoolContext';
import { ROUTES, SUCCESS_STATES, ALERT_SEVERITY } from 'CONSTANTS';
import styles from './confirmForm.module.css';

const ConfirmForm = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSchoolObjectCompleted, setIsSchoolObjectCompleted] = useState(false);
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);

  const { school, uploadSchool } = useSetSchoolContext();
  const location = useLocation();
  const navigate = useNavigate();

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
      setTimeout(() => {
        navigate(ROUTES.account());
      }, 500);
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
            {currentLocation === ROUTES.schoolCreate()
              ?
              'Създай автошколата'
              :
              'Обнови автошколата'}
          </Button>
          <Box marginBottom={{ xs: 1, sm: 0 }}>
            {successState === SUCCESS_STATES.success &&
              <AlertMessage severity={ALERT_SEVERITY.success}>
                {currentLocation === ROUTES.schoolCreate()
                  ?
                  'Автошколата е създадена успешно, пренасочваме те...'
                  :
                  'Автошколата е обновена успешно, пренасочваме те...'}
              </AlertMessage>
            }
            {successState === SUCCESS_STATES.error &&
              <AlertMessage severity={ALERT_SEVERITY.error}>
                {currentLocation === ROUTES.schoolCreate()
                  ?
                  'Нещо се счупи. Автошколата не е създадена...'
                  :
                  'Нещо се счупи. Автошколата не е обновена...'}
              </AlertMessage>
            }
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default ConfirmForm;