import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'contexts/authContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import Page from './components/Page';
import Main from 'layouts/Main/Main';
import Home from 'components/Home/Home';
import Catalogue from './components/Catalog/Catalog';
import SchoolDetails from './components/SchoolDetails/SchoolDetails';
import CreateSchool from 'components/CreateSchool/CreateSchool';
import Signin from 'components/Signin/Signin';
import Signup from 'components/Signup/Signup';
import ManageAccount from 'components/ManageAccount/ManagerAccount';
import Faq from 'components/Faq/Faq';
import About from 'components/About/About';
import NotFound from 'components/NotFound/NotFound';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <AuthProvider>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/school/all" element={<Catalogue />} />
              <Route path="/school/create" element={<CreateSchool />} />

              //! Add edit school component

              <Route path="/school/:id" element={<SchoolDetails />} />
              <Route path="/account" element={<ManageAccount />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
        </AuthProvider>
      </BrowserRouter>
    </Page>
  );
};

export default App;
