import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
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

import styles from './story.module.css';

const header = 'My story';
const firstLine = 'I\'m Miroslav - an entrepreneur, developer and tech engineer actively enhancing my development skills to realize my innovative visions personally.';
const secondLine = 'My latest creation, the Driving School Finder, fills a gap in the market by matching individuals with their ideal driving schools.';
const thirdLine = 'As a unique solution in an underserved market, it\'s set to expand its offerings to better serve both students and driving schools.';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box>
      <Grid container spacing={4} className={styles.container}>
        <Grid
          data-aos={isMd ? 'flip-right' : 'fade-right'}
          item container
          className={styles.story}
          xs={12}
          md={6}
        >
          <Box >
            <Typography variant='h4' gutterBottom className={styles.headerText}>
              {header}
            </Typography>
            <Typography component='p'>
              {firstLine}
              <br />
              <br />
              {secondLine}
              <br />
              <br />
              {thirdLine}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          container
          xs={12}
          md={6}
          data-aos={'fade-left'}
          className={styles.contacts}
        >
          <Box
            className={styles.cardContainer}
            component={Card}
            variant='outlined'
            bgcolor='alternate.main'
          >
            <CardContent sx={{ padding: 3 }}>
              <ListItem component='div' disableGutters className={styles.listItem}>
                <ListItemAvatar sx={{ marginRight: 3 }}>
                  <Avatar
                    src={'/miroslav.jfif'}
                    variant='rounded'
                    sx={{ borderRadius: 2 }}
                    className={styles.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  className={styles.listItemText}
                  primary={'Miroslav Gechev'}
                  secondary={'Founder & Developer'}
                  primaryTypographyProps={{ variant: 'h6', className: styles.headerText }}
                  secondaryTypographyProps={{ variant: 'subtitle1' }}
                />
              </ListItem>
              <Typography variant='body1' gutterBottom className={styles.typographySubheading}>
                Please connect with me on:
              </Typography>
              <Link href='https://www.linkedin.com/in/gechev/' target='_blank' rel='noopener'>
                <IconButton color='black'>
                  <LinkedInIcon fontSize='large' />
                </IconButton>
              </Link>
              <Link href='https://github.com/miroslavgechev' target='_blank' rel='noopener'>
                <IconButton>
                  <GitHubIcon fontSize='large' />
                </IconButton>
              </Link>
              <Typography variant='body1' className={styles.whiteSpace}>
                {' '}
              </Typography>
              <Link href='mailto:miroslav.gechev@gmail.com'>
                <IconButton color='black'>
                  <EmailRounded fontSize='large' />
                </IconButton>
              </Link>
              <Link href='tel:+359879686823'>
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
