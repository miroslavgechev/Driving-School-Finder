import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import Page from './components/Page';
import Main from 'layouts/Main/Main';
// import Home from 'components/Home/Home';
// import SchoolDetails from './components/SchoolDetails/SchoolDetails';
// import Catalogue from './components/Catalog/Catalog';
// import Signin from 'components/Signin/Signin';
// import Signup from 'components/Signup/Signup';
import CreateSchool from 'components/CreateSchool/CreateSchool';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <Main>
          {/* <SchoolDetails /> */}
          {/* <Home /> */}
          {/* <Catalogue /> */}
          {/* <Signin /> */}
          {/* <Signup /> */}
          <CreateSchool />
        </Main>
      </BrowserRouter>
    </Page>
  );
};

export default App;
