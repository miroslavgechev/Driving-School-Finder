import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import SportsMotorsportsRoundedIcon from '@mui/icons-material/SportsMotorsportsRounded';

import { Link } from 'react-router-dom';

import styles from './sidebar.module.css';

const Sidebar = ({ open, variant, onClose }) => {
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
                <Typography>
                  <SportsMotorsportsRoundedIcon
                    className={styles.headerIcon}
                  />
                </Typography>
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

            <Box marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to='/signin'
                size="large"
                fullWidth

              >
                Вход за курсисти
              </Button>
            </Box>

            <Box marginTop={1}>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to='/signin'
                size="large"
                fullWidth
              >
                Вход за автошколи
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
