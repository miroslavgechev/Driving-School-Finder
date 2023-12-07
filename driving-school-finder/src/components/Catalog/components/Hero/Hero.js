/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';
import styles from './hero.module.css';

const title = 'Търсиш автошкола в София?';
const subtitle = 'Нека ти помогнем';

const Hero = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        className={styles.hero}
        minHeight={300}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          background:
            'url(/hero.jpg) no-repeat center',
          backgroundSize: 'cover',
          marginTop: 0,
          paddingTop: 13,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 1,
            height: 1,
            background: alpha(theme.palette.primary.dark, 0.3),
            zIndex: 1,
          }}
        />
        <Container position={'relative'} zIndex={2}>
          <Box>
            {/* Hero */}
            <Box marginBottom={4} data-aos="fade-up">
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 900,
                  color: 'common.white',
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{
                  fontWeight: 400,
                  color: 'common.white',
                }}
              >
                {subtitle}
              </Typography>

            </Box>

          </Box>
        </Container>
      </Box>
      {children}
    </>
  );
};

export default Hero;


