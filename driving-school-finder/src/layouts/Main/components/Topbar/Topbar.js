import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { alpha, useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import UserAvatar from 'components/shared/UserAvatar/UserAvatar';
import LogoutButton from 'components/shared/LogoutButton/LogoutButton';
import Logo from 'components/shared/Logo/Logo';

import { useAuthContext } from 'contexts/authContext';
import { ROUTES } from 'CONSTANTS';
import styles from './topbar.module.css';

const Topbar = ({ onSidebarOpen = false }) => {
  const theme = useTheme();
  const { user } = useAuthContext();

  return (
    <Box className={styles.box}>

      <Box width={{ xs: 100, md: 120 }}>
        <Link to={ROUTES.home()} className={styles.link}>
          <Logo />
        </Link>
      </Box>

      <Box className={styles.nav}>

        <Box marginLeft={4}>
          <Link to={ROUTES.schoolCatalogue()} className={styles.link}>
            <Typography
              color='text.primary'
              sx={{
                '&:hover': {
                  color: alpha(theme.palette.text.primary, 0.7),
                }
              }}>
              Автошколи
            </Typography>
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link to={ROUTES.faq()} className={styles.link}>
            <Typography
              color='text.primary'
              sx={{
                '&:hover': {
                  color: alpha(theme.palette.text.primary, 0.7),
                }
              }}>
              ЧЗВ
            </Typography>
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link to={ROUTES.about()} className={styles.link}>
            <Typography
              color='text.primary' sx={{
                '&:hover': {
                  color: alpha(theme.palette.text.primary, 0.7),
                }
              }}>
              За нас
            </Typography>
          </Link>
        </Box>

        {!user &&
          <>
            <Box marginLeft={4}>
              <Button
                variant='contained'
                color='primary'
                component={Link}
                to={ROUTES.signin()}
                size='large'
                startIcon={<PersonOutlineOutlinedIcon />}
              >
                Влез
              </Button>
            </Box>

            <Box marginLeft={4}>
              <Button
                variant='contained'
                color='secondary'
                component={Link}
                to={ROUTES.signup()}
                size='large'
                startIcon={<PersonAddAlt1OutlinedIcon />}
              >
                Регистрация
              </Button>
            </Box>
          </>
        }

        {user &&
          <>
            <Box marginLeft={4}>
              <UserAvatar
                firstName={user?.firstName}
                lastName={user?.lastName}
                role={user?.role}
              />
            </Box>

            <Box marginLeft={4}>
              <LogoutButton />
            </Box>
          </>
        }

      </Box>

      <Box className={styles.menu}>
        <Button
          onClick={() => onSidebarOpen()}
          variant='outlined'
          className={styles.menuButton}
          sx={{
            borderRadius: 2,
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
