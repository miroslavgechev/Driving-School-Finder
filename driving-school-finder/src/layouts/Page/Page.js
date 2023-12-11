
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';

import AOS from 'aos';

import { useEffect } from 'react';

import getTheme from 'theme';

export default function Page({ children }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <ThemeProvider theme={getTheme()}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  );
}
