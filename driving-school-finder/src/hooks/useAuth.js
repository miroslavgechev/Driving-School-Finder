import { useState, useEffect } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import firebaseConfig from '../config/firebaseConfig';
import { initializeApp } from 'firebase/app';

import { ERROR_MESSAGES, ERROR_CODES } from 'CONSTANTS';
import { setCustomUserData, getCustomUserData } from 'services/firestoreService';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useAuth = () => {
  const [user, setUser] = useState(null);

  const register = async ({ email, password, role, firstName, lastName }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setCustomUserData(userCredential.user.uid, { role, firstName, lastName });
      setUser({ ...userCredential.user, role, firstName, lastName });
    } catch (error) {
      if (error.code === ERROR_CODES.emailTaken) {
        throw new Error(ERROR_MESSAGES.emailTaken);
      } else {
        throw new Error(error.message);
      }
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      async (user) => {
        if (user) {
          const customUserData = user && await getCustomUserData(user.uid);
          setUser({ ...user, ...customUserData });
        } else {
          setUser(null);
        }
      }
    );

    return unsubscribe;
  }, []);

  return { user, register, login, logout };
};

export default useAuth;