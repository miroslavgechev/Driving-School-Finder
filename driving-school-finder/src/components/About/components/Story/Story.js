/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRounded from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              My story
            </Typography>
            <Typography component={'p'}>
              I'm Miroslav - an entrepreneur and tech engineer actively enhancing my development skills to realize my innovative visions personally.
              <br />
              <br />
              My latest creation, the Driving School Finder, fills a gap in the market by matching individuals with their ideal driving schools.
              <br />
              <br />
              As a unique solution in an underserved market, it's set to expand its offerings to better serve both students and driving schools.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box
            width={1}
            height={1}
            component={Card}
            boxShadow={0}
            variant={'outlined'}
            bgcolor={'alternate.main'}
          >
            <CardContent sx={{ padding: 3 }}>
              <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                <ListItemAvatar sx={{ marginRight: 3 }}>
                  <Avatar
                    src={'/miroslav.jfif'}
                    variant={'rounded'}
                    sx={{ width: 100, height: 100, borderRadius: 2 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  sx={{ margin: 0 }}
                  primary={'Miroslav Gechev'}
                  secondary={'Founder & Developer'}
                  primaryTypographyProps={{ variant: 'h6', fontWeight: 700 }}
                  secondaryTypographyProps={{ variant: 'subtitle1' }}
                />
              </ListItem>
              <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700, paddingTop: '1em' }}>
                Please connect with me on:
              </Typography>
              <Link href="https://www.linkedin.com/in/gechev/" target="_blank" rel="noopener">
                <IconButton color='black'>
                  <LinkedInIcon fontSize='large' />
                </IconButton>
              </Link>
              <Link href="https://github.com/miroslavgechev" target="_blank" rel="noopener">
                <IconButton>
                  <GitHubIcon fontSize='large' />
                </IconButton>
              </Link>
              <Typography variant={'body1'} sx={{ display: 'inline', margin: '0 10px' }}>
                {' '}
              </Typography>
              <Link href="mailto:miroslav.gechev@gmail.com">
                <IconButton color='black'>
                  <EmailRounded fontSize='large' />
                </IconButton>
              </Link>
              <Link href="tel:+359879686823">
                <IconButton color='black'>
                  <LocalPhoneRoundedIcon fontSize='large' />
                </IconButton>
              </Link>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
