import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      minHeight={400}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background:
          'url(https://images.pexels.com/photos/5480749/pexels-photo-5480749.jpeg) no-repeat center',
        backgroundSize: 'cover',
        marginTop: 0,
        paddingTop: 10,
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
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: 'common.white',
              textTransform: 'uppercase',
            }}
          >
            За нас
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.primary"
            sx={{
              color: 'common.white',
            }}
          >
            Какви ни докара до тук
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

