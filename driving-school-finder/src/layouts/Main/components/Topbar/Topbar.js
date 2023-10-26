import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import SportsMotorsportsRoundedIcon from '@mui/icons-material/SportsMotorsportsRounded';

const Topbar = ({ onSidebarOpen = false }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Driving School Finder"
        width={{ xs: 100, md: 120 }}
        sx={{ textDecoration: 'none' }}
      >

        <Typography>
          <SportsMotorsportsRoundedIcon
            sx={{
              fontSize: '3em',
              color: '#000000'
            }}

          />
        </Typography>

      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box
          marginLeft={4}
          href="/"
          component={'a'}
          sx={{ cursor: 'pointer', textDecoration: 'none !important' }}
        >
          <Typography color={'text.primary'}>Автошколи</Typography>
        </Box>

        <Box
          marginLeft={4}
          href="/"
          component={'a'}
          sx={{ cursor: 'pointer', textDecoration: 'none !important' }}
        >
          <Typography color={'text.primary'}>ЧЗВ</Typography>
        </Box>

        <Box
          marginLeft={4}
          href="/"
          component={'a'}
          sx={{ cursor: 'pointer', textDecoration: 'none !important' }}
        >
          <Typography color={'text.primary'}>За нас</Typography>
        </Box>

        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="/"
            size="large"
          >
            Вход за автошколи
          </Button>
        </Box>

        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="secondary"
            component="a"
            target="blank"
            href="/"
            size="large"
          >
            Вход за кандидати
          </Button>
        </Box>

      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
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

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
