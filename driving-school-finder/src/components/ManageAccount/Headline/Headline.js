import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent={'center'}
      alignItems={{ sm: 'center' }}
      textAlign={{ xs: 'center', sm: 'center' }}
    >

      <Box textAlign={{ xs: 'center', sm: 'left' }}
      >
        <Typography
          variant={'h4'}
          marginY={2}
        >
          Управление на профила
        </Typography>
      </Box>

    </Box>
  );
};

export default Headline;
