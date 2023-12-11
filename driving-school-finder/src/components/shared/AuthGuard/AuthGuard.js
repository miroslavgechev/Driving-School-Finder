import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/authContext';
import SpinnerFullPage from '../SpinnerFullPage/SpinnerFullPage';


const AuthGuard = ({ children, authRequired = true }) => {

  const { user, userLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoading) {
      if (authRequired && !user) {
        navigate('/signin', { replace: true });
      }

      if (!authRequired && user) {
        navigate('/notfound', { replace: true });
      }
    }
  }, [userLoading, user]);

  if (userLoading) {
    return <SpinnerFullPage />;
  }

  return children ? children : null;

};

export default AuthGuard;