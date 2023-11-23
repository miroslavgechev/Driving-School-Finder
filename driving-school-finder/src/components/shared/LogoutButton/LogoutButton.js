import { useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useAuthContext } from 'contexts/authContext';
import styles from './logoutButton.module.css';

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      setIsLoading(false);
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