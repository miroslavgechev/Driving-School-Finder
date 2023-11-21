import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant='subtitle2'
        color="text.secondary"
        gutterBottom
        className={styles.centerText}
      >
        &copy; Driving School Finder. 2023, Miroslav Gechev. All rights reserved
      </Typography>
      <Typography
        variant='caption'
        color="text.secondary"
        component={'p'}
        className={styles.centerText}
      >
        When you visit or interact with the site we may use cookies for storing
        information to help provide you with a better, faster and safer
        experience and for marketing purposes.
      </Typography>

    </Grid>
  );
};

export default Footer;