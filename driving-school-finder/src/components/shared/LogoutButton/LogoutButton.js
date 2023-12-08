import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useAuthContext } from 'contexts/authContext';
import { useSetSchoolContext } from 'contexts/setSchoolContext';
import styles from './logoutButton.module.css';

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { logout } = useAuthContext();
  const { resetSchool } = useSetSchoolContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      resetSchool();
      setIsLoading(false);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Button
      variant='text'
      color='error'
      size='large'
      onClick={() => handleLogout()}
      disabled={isLoading}
      className={styles.logoutButton}
    >
      {isLoading ? <CircularProgress color='error' size={24} /> : 'Изход'}
    </Button>
  );
};

export default LogoutButton;