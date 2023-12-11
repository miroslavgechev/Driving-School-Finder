import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/authContext';
import SpinnerFullPage from '../SpinnerFullPage/SpinnerFullPage';


const AuthGuard = ({ children }) => {

  const { user, userLoading } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoading && !user) {
      navigate('/signin', { replace: true });
    }
  }, [userLoading, user]);

  if (userLoading) {
    return <SpinnerFullPage />;
  }

  return children ? children : null;

};

export default AuthGuard;