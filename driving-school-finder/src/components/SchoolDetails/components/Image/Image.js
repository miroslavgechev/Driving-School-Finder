import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import styles from './image.module.css';

const Image = ({ mainImage, supportImages, name }) => {
  let images = [];

  if (supportImages) {
    images = [mainImage, ...supportImages];
  } else {
    images = [mainImage];
  }

  return (
    <Grid container spacing={2} className={styles.mainContainer}>
      {images.map((item, i) => (
        <Grid key={i} item xs={i === 0 ? 12 : 6}>
          <Box
            className={styles.imageContainer}
            sx={{
              '& img': {
                borderRadius: 2,
              },
            }}
          >
            <img src={item} alt={name + i} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Image;
