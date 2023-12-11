import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from 'firebase/auth';
import firebaseConfig from '../config/firebaseConfig';
import { initializeApp } from 'firebase/app';

import { useState, useEffect } from 'react';

import { ERROR_MESSAGES, ERROR_CODES } from 'CONSTANTS';
import { setCustomUserData, getCustomUserData, updateCustomUserData } from 'services/firestoreService';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const register = async ({ email, password, role, firstName, lastName }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setCustomUserData(userCredential.user.uid, { role, firstName, lastName });

      setUser({ ...userCredential.user, role, firstName, lastName });
    } catch (error) {
      // if (error.code === ERROR_CODES.emailTaken) {
      //   throw new Error(ERROR_MESSAGES.emailTaken);
      // } else {
      //   throw new Error(error.message);
      // }

      throw new Error(error.message);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const customUserData = await getCustomUserData(userCredential.user.uid);

      setUser({ ...userCredential.user, ...customUserData });
    } catch (error) {
      if (error.code === ERROR_CODES.invalidCredentials) {
        throw new Error(ERROR_MESSAGES.invalidCredentials);
      } else {
        throw new Error(error.message);
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateCredentials = async ({ oldPassword, password }) => {
    try {
      const user = auth.currentUser;

      // Re-authenticate the user
      const credential = EmailAuthProvider.credential(user?.email, oldPassword);
      await reauthenticateWithCredential(user, credential);

      // If re-authentication is successful, update the password
      await updatePassword(user, password);
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateUserData = async (uid, { firstName, lastName }) => {
    try {
      await updateCustomUserData(uid, { firstName, lastName });
      setUser({ ...user, firstName, lastName });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      async (user) => {
        //eslint-disable-next-line no-debugger
        debugger;
        if (user) {
          const customUserData = user && await getCustomUserData(user?.uid);
          setUser({ ...user, ...customUserData });
        } else {
          setUser(null);
        }
        setUserLoading(false);
      });

    return () => {
      unsubscribe();
      setUserLoading(true);
    };
  }, []);

  return {
    user,
    userLoading,
    register,
    login,
    logout,
    updateCredentials,
    updateUserData
  };
};

export default useAuth;