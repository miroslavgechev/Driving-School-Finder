import { initializeApp } from 'firebase/app';

import firebaseConfig from 'config/firebaseConfig';

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';

import { schoolMock } from 'dbTemp';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addCustomUserData = async (uid, { role, firstName, lastName }) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      role,
      firstName,
      lastName,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a list of schools from the database
export const getSchools = async () => {
  const schoolsCol = collection(db, 'schools');
  const schoolsSnapshot = await getDocs(schoolsCol);
  const schoolsList = schoolsSnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));
  return schoolsList;
};

export const getSpecificFieldOfAllSchools = async () => {
  const schoolsCol = collection(db, 'schools');
  const schoolsSnapshot = await getDocs(schoolsCol);
  const schoolsList = schoolsSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      name: data.name,
      description: data.description,
    };
  });
  return schoolsList;
};

export const getSchoolByName = async (name) => {
  const q = query(collection(db, 'schools'), where('name', '==', name));

  const querySnapshot = await getDocs(q);
  const school = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }))[0];

  return school;
};

export const addSchool = async () => await addDoc(collection(db, 'schools'), schoolMock);
