import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="text.secondary"
        gutterBottom
      >
        &copy; Driving School Finder. 2023, Miroslav Gechev. All rights reserved
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="text.secondary"
        component={'p'}
      >
        When you visit or interact with the site we may use cookies for storing
        information to help provide you with a better, faster and safer
        experience and for marketing purposes.
      </Typography>

    </Grid>
  );
};

export default Footer;

{/* <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                За нас
              </Link>
            </Box>
            
          </Box> */}