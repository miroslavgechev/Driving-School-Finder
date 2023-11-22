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

import { ERROR_MESSAGES } from 'CONSTANTS';
import { addCustomUserData } from 'services/firestoreService';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useAuth = () => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  const register = async ({ email, password, role, firstName, lastName }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);

      await addCustomUserData(userCredential.user.uid, { role, firstName, lastName });

    } catch (error) {

      if (error.code === 'auth/email-already-in-use') {
        throw new Error(ERROR_MESSAGES.emailTaken);
      } else {
        throw new Error(error.message);
      }
    }
  };

  const login = async (email = 'miroslav.gechev@gmail.com', password = 'password123') => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Error signing in user:', error.code, error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);

    return unsubscribe;
  }, []);

  return { user, register, login, logout };
};

export default useAuth;