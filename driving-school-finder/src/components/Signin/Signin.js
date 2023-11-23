import { useState } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Container from 'components/Container';
import SigninFormSchool from './components/FormSchool/SigninFormSchool';
import SigninFormStudent from './components/FormStudent/SignInFormStudent';



const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

const Signin = () => {
  const [tabInUse, setTabInUse] = useState(0);

  const handleChange = (event, newValue) => {
    setTabInUse(newValue);
  };

  const getIndicatorColor = () => {
    switch (tabInUse) {
      case 0:
        return 'primary.main';
      case 1:
        return 'secondary.main';
      default:
        return 'primary';
    }
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >

      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>

        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={'flex'}
            alignItems={'center'}
          >

            <Container>
              <Box>
                <Tabs value={tabInUse} onChange={handleChange} textColor="secondary" sx={{
                  '& .MuiTabs-indicator': {
                    bgcolor: getIndicatorColor(),
                  },

                }}>
                  <Tab label="Вход за курсисти" sx={{ '&.Mui-selected': { color: 'primary.main' }, fontSize: '1.2em', marginRight: '1em' }} />
                  <Tab label="Вход за автошколи" sx={{ '&.Mui-selected': { color: 'secondary.main' }, fontSize: '1.2em' }} />
                </Tabs>
              </Box>
              <TabPanel value={tabInUse} index={0}>
                <SigninFormStudent />
              </TabPanel>

              <TabPanel value={tabInUse} index={1}>
                <SigninFormSchool />
              </TabPanel>

            </Container>
          </Box>

          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
              minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 'auto', md: 1 },
                      '& img': {
                        objectFit: 'cover',
                      },
                    }}
                  >
                    <Box
                      component={'img'}
                      loading="lazy"
                      src={
                        '/signin.jpg'
                        // 'https://images.unsplash.com/photo-1527937444527-466f6fd54936?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      }
                      height={{ xs: 'auto', md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}

                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Signin;
