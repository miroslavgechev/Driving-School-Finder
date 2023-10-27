import React from 'react';
import Box from '@mui/material/Box';

const Headline = ({ logoUrl }) => {
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
        <img src={logoUrl} alt="Logo" style={{ maxHeight: '4em' }} />
      </Box>

    </Box>
  );
};

export default Headline;
