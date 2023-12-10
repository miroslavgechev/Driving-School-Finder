import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/authContext';
import SpinnerFullPage from '../SpinnerFullPage/SpinnerFullPage';


const AuthGuard = ({ children }) => {

  const { user, userLoading } = useAuthContext();

  const navigate = useNavigate();

  //!TODO - REVIEW COMPONENT!
  //!TODO - add a proper Loading component
  //!TODO return the user to the page he wants to go after signin

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