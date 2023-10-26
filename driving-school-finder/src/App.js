import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Page from './components/Page';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import { Main } from 'layouts';
import HomeView from 'views/HomeView/HomeView';


const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <Main>
          <HomeView />
          <HomeView />
          <HomeView />
          <HomeView />

        </Main>
      </BrowserRouter>
    </Page>
  );
};

export default App;
