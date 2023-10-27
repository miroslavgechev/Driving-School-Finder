import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import SportsMotorsportsRoundedIcon from '@mui/icons-material/SportsMotorsportsRounded';


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
          height: '100%',
          padding: 1,
        }}
      >

        <Box>
          <Box width={1} paddingX={2} paddingY={1}>
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
          </Box>
          <Box paddingX={2} paddingY={2}>
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

            <Box marginTop={2}>
              <Button
                size={'large'}
                variant="contained"
                component="a"
                href="/"
                target={'blank'}
                color="primary"
                fullWidth

              >
                Вход за автошколи
              </Button>
            </Box>

            <Box marginTop={1}>
              <Button
                variant="contained"
                color="secondary"
                component="a"
                target="blank"
                href="/"
                size="large"
                fullWidth
              >
                Вход за курсисти
              </Button>
            </Box>
          </Box>
        </Box>

      </Box>
    </Drawer>
  );
};

export default Sidebar;
