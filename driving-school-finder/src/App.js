import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import Home from 'components/Home/Home';
import Main from 'layouts/Main/Main';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <Main>
          <Home />
        </Main>
      </BrowserRouter>
    </Page>
  );
};

export default App;
