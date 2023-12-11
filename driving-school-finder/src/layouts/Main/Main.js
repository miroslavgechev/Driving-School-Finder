import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';

import { useState } from 'react';

import Container from 'layouts/Container/Container';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import { useAuthContext } from 'contexts/authContext';
import SpinnerFullPage from 'components/shared/SpinnerFullPage/SpinnerFullPage';
import styles from './main.module.css';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { userLoading } = useAuthContext();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <>
      {userLoading && <SpinnerFullPage />}

      {!userLoading &&
        <Box>

          <AppBar
            className={styles.appBar}
            sx={{
              backgroundColor:
                trigger ? theme.palette.background.paper : bgcolor,
            }}
            elevation={trigger ? 1 : 0}
          >
            <Container paddingY={1}>
              <Topbar
                onSidebarOpen={handleSidebarOpen}
                colorInvert={trigger ? false : colorInvert}
              />
            </Container>
          </AppBar>

          <Sidebar
            onClose={handleSidebarClose}
            open={open}
            variant='temporary'
          />

          <main>
            {children}
            <Divider />
          </main>

          <Container paddingY={4}>
            <Footer />
          </Container>

        </Box>
      }
    </>
  );
};

export default Main;
