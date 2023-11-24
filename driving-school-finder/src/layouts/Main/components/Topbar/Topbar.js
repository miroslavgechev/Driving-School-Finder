import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SportsMotorsportsRoundedIcon from '@mui/icons-material/SportsMotorsportsRounded';

import { Link } from 'react-router-dom';

import styles from './topbar.module.css';
import UserAvatar from 'components/shared/UserAvatar/UserAvatar';
import LogoutButton from 'components/shared/LogoutButton/LogoutButton';
import { useAuthContext } from 'contexts/authContext';

const Topbar = ({ onSidebarOpen = false }) => {
  const theme = useTheme();
  const { user } = useAuthContext();

  return (
    <Box className={styles.box}>
      <Box width={{ xs: 100, md: 120 }}>
        <Link to='/' className={styles.link}>
          <Typography>
            <SportsMotorsportsRoundedIcon
              className={styles.headerIcon}
            />
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        className={styles.alignCenter}>
        <Box marginLeft={4}>
          <Link to='/school/all' className={styles.link}>
            <Typography
              color={'text.primary'}
              sx={{
                '&:hover': {
                  color: alpha(theme.palette.text.primary, 0.7),
                }
              }}>Автошколи</Typography>
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link to='/faq' className={styles.link}>
            <Typography
              color={'text.primary'}
              sx={{
                '&:hover': {
                  color: alpha(theme.palette.text.primary, 0.7),
                }
              }}>ЧЗВ</Typography>
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link to='/about' className={styles.link}>
            <Typography color={'text.primary'} sx={{
              '&:hover': {
                color: alpha(theme.palette.text.primary, 0.7),
              }
            }}>За нас</Typography>
          </Link>
        </Box>

        {!user &&
          <>
            <Box marginLeft={4}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to='/signin'
                size="large"
              >
                Влез
              </Button>
            </Box>

            <Box marginLeft={4}>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to='/signup'
                size="large"
              >
                Регистрация
              </Button>
            </Box>
          </>
        }

        {user &&
          <>
            <Box marginLeft={4}>
              <UserAvatar firstName={user.firstName} lastName={user.lastName} role={user.role} />
            </Box>
            <Box marginLeft={4}>
              <LogoutButton />
            </Box>
          </>
        }

      </Box>

      <Box
        sx={{ display: { xs: 'block', md: 'none' } }}
        className={styles.alignCenter}>
        <Button
          onClick={() => onSidebarOpen()}
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box >
  );
};

export default Topbar;
