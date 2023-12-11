import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import SpinnerFullPage from '../SpinnerFullPage/SpinnerFullPage';
import { useAuthContext } from 'contexts/authContext';
import { ROUTES } from 'CONSTANTS';

const AuthGuard = ({ children, authRequired = true }) => {
  const { user, userLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoading) {
      if (authRequired && !user) {
        navigate(ROUTES.signin(), { replace: true });
      }

      if (!authRequired && user) {
        navigate(ROUTES.notFound(), { replace: true });
      }
    }
  }, [userLoading, user]);

  if (userLoading) {
    return <SpinnerFullPage />;
  }

  return children ? children : null;
};

export default AuthGuard;