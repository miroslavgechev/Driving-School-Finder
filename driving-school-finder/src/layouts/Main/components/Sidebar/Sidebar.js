import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

import { Link } from 'react-router-dom';

import styles from './sidebar.module.css';
import { useAuthContext } from 'contexts/authContext';
import LogoutButton from 'components/shared/LogoutButton/LogoutButton';
import Divider from '@mui/material/Divider';
import Logo from 'components/shared/Logo/Logo';

const Sidebar = ({ open, variant, onClose }) => {
  const { user } = useAuthContext();
  const color = user?.role === 'student' ? 'primary.main' : 'secondary.main';

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          padding: 1,
        }}
        className={styles.maxHeight}
      >

        <Box>
          <Box width={1} paddingX={2} paddingY={1}>
            <Box width={{ xs: 100, md: 120 }}>
              <Link to='/' className={styles.link}>
                <Logo />
              </Link>
            </Box>
          </Box>

          <Box paddingX={2} paddingY={2}>

            <Box paddingY={2}>
              <Link to='/school/all' className={styles.link}>
                <Typography color={'text.primary'}>Автошколи</Typography>
              </Link>
            </Box>

            <Box paddingY={2}>
              <Link to='/faq' className={styles.link}>
                <Typography color={'text.primary'}>ЧЗВ</Typography>
              </Link>
            </Box>

            <Box paddingY={2}>
              <Link to='/about' className={styles.link}>
                <Typography color={'text.primary'}>За нас</Typography>
              </Link>
            </Box>
            {!user &&
              <>
                <Box marginTop={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to='/signin'
                    size="large"
                    fullWidth
                    startIcon={<PersonOutlineOutlinedIcon />}
                  >
                    Влез
                  </Button>
                </Box>

                <Box marginTop={1}>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to='/signup'
                    size="large"
                    fullWidth
                    startIcon={<PersonAddAlt1OutlinedIcon />}
                  >
                    Регистрация
                  </Button>
                </Box>
              </>
            }

            {user &&
              <>
                <Divider sx={{ marginY: 1 }} />
                <Box paddingY={2}>
                  <Link to='/account' className={styles.link}>
                    <Typography color={color}>Профил</Typography>
                  </Link>
                </Box>
              </>
            }

            {user &&
              <>
                <Divider sx={{ marginY: 1 }} />
                <Box>
                  <LogoutButton />
                </Box>
              </>
            }

          </Box>

        </Box>
      </Box>
    </Drawer >
  );
};

export default Sidebar;
