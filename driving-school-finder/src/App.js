import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'contexts/authContext';
import { SetSchoolProvider } from 'contexts/setSchoolContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import Page from './components/Page';
import Main from 'layouts/Main/Main';
import Catalogue from './components/Catalog/Catalog';
import SchoolDetails from './components/SchoolDetails/SchoolDetails';
import SchoolCreateEdit from './components/SchoolCreateEdit/SchoolCreateEdit';
import Signin from 'components/Signin/Signin';
import Signup from 'components/Signup/Signup';
import ManageAccount from 'components/ManageAccount/ManagerAccount';
import Faq from 'components/Faq/Faq';
import About from 'components/About/About';
import NotFound from 'components/NotFound/NotFound';
import AuthGuard from 'components/shared/AuthGuard/AuthGuard';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <AuthProvider>
          <SetSchoolProvider>
            <Main>
              <Routes>
                <Route path='/' element={<Catalogue />} />
                <Route path='/school/all' element={<Catalogue />} />

                <Route path='/school/create' element={
                  <AuthGuard>
                    <SchoolCreateEdit />
                  </AuthGuard>
                } />

                <Route path='/school/:id/edit' element={
                  <AuthGuard>
                    <SchoolCreateEdit />
                  </AuthGuard>
                } />

                <Route path='/school/:id' element={
                  <AuthGuard>
                    <SchoolDetails />
                  </AuthGuard>
                } />

                <Route path='/account' element={
                  <AuthGuard>
                    <ManageAccount />
                  </AuthGuard>
                } />

                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Main>
          </SetSchoolProvider>
        </AuthProvider>
      </BrowserRouter>
    </Page>
  );
};

export default App;
