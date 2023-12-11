import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from 'contexts/authContext';
import { SetSchoolProvider } from 'contexts/setSchoolContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import Page from 'layouts/Page/Page';
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

import { ROUTES } from 'CONSTANTS';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <AuthProvider>
          <SetSchoolProvider>
            <Main>
              <Routes>
                <Route path={ROUTES.home()} element={<Catalogue />} />
                <Route path={ROUTES.schoolCatalogue()} element={<Catalogue />} />

                <Route path={ROUTES.schoolCreate()} element={
                  <AuthGuard authRequired={true}>
                    <SchoolCreateEdit />
                  </AuthGuard>
                } />

                <Route path={ROUTES.schoolEditWithParams()} element={
                  <AuthGuard authRequired={true}>
                    <SchoolCreateEdit />
                  </AuthGuard>
                } />

                <Route path={ROUTES.schoolDetailsWithParams()} element={
                  <AuthGuard authRequired={true}>
                    <SchoolDetails />
                  </AuthGuard>
                } />

                <Route path={ROUTES.account()} element={
                  <AuthGuard authRequired={true}>
                    <ManageAccount />
                  </AuthGuard>
                } />

                <Route path={ROUTES.signin()} element={
                  <AuthGuard authRequired={false}>
                    <Signin />
                  </AuthGuard>
                } />

                <Route path={ROUTES.signup()} element={
                  <AuthGuard authRequired={false}>
                    <Signup />
                  </AuthGuard>
                } />

                <Route path={ROUTES.faq()} element={<Faq />} />
                <Route path={ROUTES.about()} element={<About />} />
                <Route path={ROUTES.notFound()} element={<NotFound />} />
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
