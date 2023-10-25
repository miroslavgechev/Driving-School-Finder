import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <div>Hi!</div>
      </BrowserRouter>
    </Page>
  );
};

export default App;
